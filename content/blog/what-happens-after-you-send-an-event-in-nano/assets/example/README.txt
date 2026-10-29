Nano order events example

Requires Java 21 or later and Maven. Uses Nano 2026.10.10.

Run it

From this directory:

    mvn compile exec:java

Check the startup log for the HTTP port. It's normally 8080 but Nano may
choose another available port if that one is busy.

The store starts empty. Add a status, then look it up:

    curl -i -X PUT http://localhost:8080/orders/purchase-1001/status \
      -H 'Content-Type: text/plain' --data 'PROCESSING'

    curl -i http://localhost:8080/orders/purchase-1001

The first PUT returns 201. Later PUTs to the same URL replace the status and
return 200. Try changing PROCESSING to SHIPPED, then run GET again. Repeating
the same PUT leaves the same status. GET returns 404 for an unknown order.

Status labels must start with an uppercase letter and contain 1 to 32 uppercase
letters or underscores. Invalid labels return 400. Unhandled routes and methods
return 404. The path checks reject extra segments because pathMatch also accepts
prefixes in this release. Nano normalizes trailing slashes so /orders/123/ and
/orders/123 reach the same lookup.

Stop with Ctrl+C. Nano stops OrderService and closes the HTTP server. The map
loses its contents when the service stops or the process exits. This example
accepts status labels without checking business rules about status changes.
It runs on the JVM; a native-image build configuration isn't included.

How a request gets handled

DemoApplication starts OrderService, registers the two static HTTP handlers,
then starts HttpServer. The service and routes are ready before HTTP requests
arrive.

    GET /orders/{orderId}
      -> OrderController.getOrder
      -> ORDER_LOOKUP
      -> OrderService reads the map
      -> OrderResult
      -> HTTP 200 or 404

    PUT /orders/{orderId}/status
      -> OrderController.putStatus
      -> ORDER_STATUS_PUT
      -> OrderService updates the map
      -> OrderStatusWritten
      -> HTTP 201 or 200

Both operations use synchronous dispatch. The HTTP handler reads the response
after send() returns; a missing reply becomes HTTP 500. Creation is determined
from the previous value returned by ConcurrentHashMap.put, avoiding a separate
check that could race another write.

Each handler creates a child context from the incoming HTTP event's context.
The Consumer overload of context(OrderController.class).subscribeEvent doesn't
replace that incoming context.

Why use static handlers and a service?

OrderController translates HTTP requests into events and replies. It has no
resources to open or close so static subscriptions are enough. Each handler
checks its method and full path. Subscriber order isn't guaranteed: keep
validation in the handler if it must run before a write.

OrderService owns the map because it needs to survive between requests. Nano
calls onEvent only while the service is ready. A database pool would use the
same lifecycle: open it in start and close it in stop. An HTTP module that owns
a cache or runtime configuration could become a service for the same reason.

Direct subscriptions stay registered until removed. If a service subscribes in
start, it must keep the original listener objects and unsubscribe in stop.
A fresh method reference may not identify the registered listener. Otherwise,
callbacks can reach resources that have already been closed. Unsubscribing
prevents later dispatches; it doesn't cancel a callback already running.
Direct listener exceptions go to EVENT_APP_ERROR rather than Service.onFailure.

Static helpers make their inputs visible and keep request data out of service
fields. The lifecycle overrides are still instance methods. Either kind of
method can access shared objects and every request here uses the same map.
ConcurrentHashMap provides concurrent get and put operations; static itself
provides no concurrency protection. Testing a helper still requires supplying
or replacing the dependencies it uses.

Why check containsEvent()?

OrderService accepts OrderLookup and OrderStatusPut records. Its onEvent method
skips events marked with containsEvent() before matching those channels.
event.channel(CHANNEL) both matches the channel and gives us a typed event,
avoiding an unchecked cast from Event<?, ?>.

The check matters when a handler throws. Nano attaches the exception to the
original event and calls Service.onFailure. Returning null forwards the failure:

    EVENT_APP_ERROR
      payload = the original ORDER_LOOKUP or ORDER_STATUS_PUT event

Unless an earlier listener acknowledges it, that report can reach onEvent too.
The typed channel helper can find the original event inside the report. Without
the containsEvent() guard, our service could accidentally run a failed operation
again. Error handlers such as subscribeError can deliberately unwrap the event
when they need it.

The demo's onFailure returns null. The article also shows an optional policy
that logs and acknowledges a lookup failure. A non-null return from onFailure
marks the failure handled; sending a business reply requires respond(result)
on the typed lookup event. The article's policy sends no result so the HTTP
handler returns 500. An unknown order is a successful lookup with a null status
and returns 404.

Using the async helper

OrderLookups.lookupAsync(context, orderId, timeout) returns a
CompletableFuture<OrderService.OrderResult>. A scheduled job can compose it with
thenApply or thenCompose while doing other work. Supply a positive Duration.

A missing order completes normally with a null status. Calling acknowledge()
on the lookup invokes its response callback with null, which the helper turns
into IllegalStateException. An acknowledgment propagated from an error report
doesn't invoke that callback. If no callback arrives before the deadline, the
future fails with TimeoutException. The first completion wins and timing out
doesn't cancel dispatch. The helper supplies the future and deadline.

The HTTP routes keep synchronous dispatch. HttpServer checks for a response
when HTTP-event dispatch returns so replying from a later callback could miss
that check.

Adding the article's notification

The article's tracking, broadcast and local failure-handler snippets are
optional additions to this demo. ORDER_STATUS_READ is a channel you define and
share with interested listeners. They must subscribe or handle it in onEvent.
Define each channel once: registering an existing name with different class
arguments doesn't validate a new type contract in this release.

Send the notification after a successful lookup. broadcast(true) keeps dispatch
going after an acknowledgment; async(true) moves it to a virtual thread. The
listeners run sequentially with the same event and immutable result record.
Replies aren't collected. If an audit record must survive a crash, store it:
these notifications aren't durable.

The Developer Console can show captured events but its bounded history isn't
a journal. It may miss events acknowledged before its listener runs.
Nano's eventCount() counts active dispatches, not all events ever sent.
