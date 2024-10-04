import React from 'react';

import Image from "next/image";
import nano_context from "@/public/images/conponents/context.jpg";
import nano_events from "@/public/images/conponents/events.jpg";
import nano_logger from "@/public/images/conponents/logger.jpg";
import nano_schedulers from "@/public/images/conponents/schedulers.jpg";
import nano_services from "@/public/images/conponents/services.jpg";


const documentation_subtopic_content: { [key: string]: JSX.Element } = {
    introduction: (
        <div id="introduction">
            <h1 className="text-2xl font-bold mb-4">Introduction</h1>
            <br/>
            <h2 className="text-1xl font-bold mb-4">Back to basics and forget about frameworks!</h2>
            <p>Nano is a lightweight concept which makes it easier for developers to write microservices in functional,
                fluent,
                chaining, plain, modern Java with a nano footprint. Nano is also designed to be fully compilable with
                &nbsp;<a className="nano-link" href="https://www.graalvm.org/" target="_blank"
                         rel="noopener noreferrer">GraalVM</a> to create native executables. To enhance efficiency and performance, Nano utilizes non-blocking virtual
                threads from
                &nbsp;<a className="nano-link" href="https://jdk.java.net/loom/" target="_blank"
                         rel="noopener noreferrer">Project Loom</a>.
            </p>
        </div>
    ),
    overview: (
        <div id="overview">
            <h1 className="text-2xl font-bold mb-4">Overview</h1>
            <p>This section provides an overview of the project...</p>
        </div>
    ),
    installation: (
        <div id="installation">
            <h1 className="text-2xl font-bold mb-4">Installation</h1>
            <p>To install the package, use the following command...</p>
        </div>
    ),
    setup: (
        <div id="setup">
            <h1 className="text-2xl font-bold mb-4">Setup</h1>
            <p>Setup instructions go here...</p>
        </div>
    ),
    // Add more subtopic documentation_subtopic_content as needed
    'getting-started': (
        <div id="getting-started">
            <h1 className="text-2xl font-bold mb-4">Getting Started</h1>
        </div>
    ),
    configuration: (
        <div id="configuration">
            <h1 className="text-2xl font-bold mb-4">Configuration</h1>
            <p>To configure the application, you need to...</p>
        </div>
    ),
    usage: (
        <div id="usage">
            <h1 className="text-2xl font-bold mb-4">Usage</h1>
            <p>Here's how you can use the application...</p>
        </div>
    ),
    'core-concept': (
        <div id="core-concept">
            <h1 className="text-2xl font-bold mb-4">Core Concept</h1>
            <p>Nano handles threads for you and provides a basic construct for event-driven architecture.
                It's providing a simple way to write microservices in a functional fluent and chaining style.
                Objects are less needed thanks to the underlying &nbsp;<a className="nano-link"
                                                                          href="https://github.com/YunaBraska/type-map"
                                                                          target="_blank"
                                                                          rel="noopener noreferrer">TypeMap</a>. Nano
                provides full access to all
                internal components, resulting in very few private methods or fields.</p>
        </div>
    ),
    concept: (
        <div id="concept">
            <br/><br/>
            <p>Nano is a minimalist standalone library designed to facilitate the creation of microservices
                using plain, modern Java. Nano is a tool, not a framework, and it emphasizes simplicity,
                security, and efficiency.</p>
        </div>
    ),
    'modern-and-fluent-design': (
        <div id="modern-and-fluent-design">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Modern and Fluent Design 🚀</h1>
            <p>Nano leverages fluent chaining and functional programming styles to create a syntax that resembles
                a stateless scripting language. By avoiding annotations and other “black magic” Nano maintains
                transparency and simplicity in its codebase. Fluent and chaining means, there are no <span
                    className="bg-gray-200 px-1 rounded">get</span> and&nbsp;
                <span className="bg-gray-200 px-1 rounded">set</span> prefixes and no
                <span className="bg-gray-200 px-1 rounded">void</span> returns for methods.
            </p>

        </div>
    ),
    'no-external-dependencies': (
        <div id="no-external-dependencies">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">No External Dependencies 🔒</h1>
            <p>Nano is built without any foreign dependencies, ensuring a lean, secure library free from common
                vulnerabilities and excessive dependencies. This results in a smaller, faster, and more secure codebase.
                You only need to trust and know the license agreements of Nano.</p>
        </div>
    ),
    'minimal-resource-consumption': (
        <div id="minimal-resource-consumption">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Minimal Resource Consumption 🌱</h1>
            <p>Nano is engineered for a minimal environmental footprint, utilizing fewer resources
                and making garbage collection more efficient due to its functional programming style.</p>
        </div>
    ),
    'non-blocking-virtual-threads': (
        <div id="non-blocking-virtual-threads">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Non-Blocking Virtual Threads 🧵</h1>
            <p>Nano utilizes non-blocking virtual threads from <a className="nano-link"
                                                                  href="https://jdk.java.net/loom/" target="_blank"
                                                                  rel="noopener noreferrer">Project Loom</a> to enhance
                efficiency and performance.
                These threads maximize CPU utilization without blocking the main thread, eliminating the need for
                manual thread limit settings. Note that Nano cannot control Java’s built-in <span
                    className="bg-gray-200 px-1 rounded">ForkJoinPool</span> used for
                <span className="bg-gray-200 px-1 rounded">java.util.concurrent</span> objects like streams. To optimize
                performance, it is recommended to set the
                Java property to something like this <br/><span
                    className="bg-gray-200 px-1 rounded">-Djava.util.concurrent.ForkJoinPool.common.parallelism=100</span>.
                in case of high parallelism.</p>
        </div>
    ),
    'graalvm-compatibility': (
        <div id="graalvm-compatibility">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">GraalVM Compatibility ⚡</h1>
            <p>Nano is fully compatible with <a className="nano-link" href="https://www.graalvm.org/"
                                                target="_blank" rel="noopener noreferrer">GraalVM</a>, allowing you to
                compile native executables that do not require a JVM to run.
                This feature is particularly useful in containerized and serverless environments. Nano avoids reflection
                and dynamic
                class loading, ensuring seamless <a className="nano-link" href="https://www.graalvm.org/"
                                                    target="_blank" rel="noopener noreferrer">GraalVM</a> integration
                without additional configuration.</p>
        </div>
    ),
    'extensible-and-open': (
        <div id="extensible-and-open">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Extensible and Open 🪶</h1>
            <p>All Nano functions and classes are <span className="bg-gray-200 px-1 rounded">public</span> or <span
                className="bg-gray-200 px-1 rounded">protected</span>
                , allowing developers to extend or modify the library
                as needed. This breaks the concept of immutable objects, but we think it's more important to be able to
                extend and
                modify Nano than closing it. Means, every developer is responsible for the own code! We still encourages
                contributions and improvements from the community.</p>
        </div>
    ),
    'modular-design': (
        <div id="modular-design">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Modular Design 🧩</h1>
            <p>Nano’s <span className="bg-gray-200 px-1 rounded">Event</span> system enables decoupling of functions,
                plugin creation (<span className="bg-gray-200 px-1 rounded">Services</span>), and function interception.
                For example, you can globally control and respond to every error that occurs, similar to a global <span
                    className="bg-gray-200 px-1 rounded">Controller Advice</span>.
                With that its also easy to change configurations on the fly. This modular design allows services, such
                as the built-in
                <span className="bg-gray-200 px-1 rounded">HttpService</span> and <span
                    className="bg-gray-200 px-1 rounded">MetricService</span>, to operate independently while still
                being able to interact when started.</p>
        </div>
    ),
    'service-based-architecture': (
        <div id="service-based-architecture">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Service-Based Architecture 📊</h1>
            <p>(<span className="bg-gray-200 px-1 rounded">Services</span>) in Nano function as plugins or extensions,
                executed only when explicitly added to Nano programmatically.
                This approach simplifies testing, as services and components can be tested independently without the
                need for mocking or stubbing.
                You execute only what you define, avoiding the pitfalls of auto-applying dependencies.</p>
        </div>
    ),
    'flexible-object-mapping': (
        <div id="flexible-object-mapping">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Flexible Object Mapping 🔄</h1>
            <p>Nano’s built-in TypeConverter eliminates the need for custom objects by enabling easy conversion of <span
                className="bg-gray-200 px-1 rounded">JSON</span>, <span className="bg-gray-200 px-1 rounded">XML</span>,
                and other simple Java objects. For example, HTTP requests can be converted to <span
                    className="bg-gray-200 px-1 rounded">TypeInfo</span>, <span
                    className="bg-gray-200 px-1 rounded">TypeMap</span> or <span
                    className="bg-gray-200 px-1 rounded">TypeList</span>,
                which lazily convert fields to the requested type. See <a className="nano-link"
                                                                          href="https://github.com/YunaBraska/type-map"
                                                                          target="_blank"
                                                                          rel="noopener noreferrer">TypeMap</a> for more
                information. If an object cannot
                be converted,
                it is straightforward to register a custom type conversion. These <a className="nano-link"
                                                                                     href="https://github.com/YunaBraska/type-map"
                                                                                     target="_blank"
                                                                                     rel="noopener noreferrer">TypeMaps</a> and
                TypeLists are used extensively,
                such as in events and the context.</p>
        </div>
    ),
    'configuration-management': (
        <div id="configuration-management">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Configuration Management ⚙️</h1>
            <p>Nano uses a <span className="bg-gray-200 px-1 rounded">Context</span> object to manage logging, tracing
                and configurations. Nano reads property files
                and profiled properties which all end up in the <span
                    className="bg-gray-200 px-1 rounded">Context</span> Object. The properties can be converted to the
                required types as needed.
                This eliminates the need for custom configuration objects.</p>
        </div>
    ),
    mechanics: (
        <div id="mechanics">
            <h1 className="text-2xl font-bold mb-4">Mechanics</h1>
        </div>
    ),
    'error-handling': (
        <div id="error-handling">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Error Handling</h1>
            <p>Error handling is pretty straight forward in Nano. All errors are
                <a className="nano-link" href="https://github.com/NanoNative/nano/blob/main/docs/events/README.md"
                   target="_blank" rel="noopener noreferrer"> Events</a> which are logged automatically with the
                <a className="nano-link" href="https://github.com/NanoNative/nano/blob/main/docs/logger/README.md"
                   target="_blank" rel="noopener noreferrer"> Logger</a> from the caller
                <a className="nano-link" href="https://github.com/NanoNative/nano/blob/main/docs/context/README.md"
                   target="_blank" rel="noopener noreferrer"> Context</a>. These
                <a className="nano-link" href="https://github.com/NanoNative/nano/blob/main/docs/events/README.md"
                   target="_blank" rel="noopener noreferrer"> Events</a> are send to the
                <span className="bg-gray-200 px-1 rounded">EVENT_APP_UNHANDLED</span> channel and can be caught or
                intercepted.
            </p>
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Handle Error</h1>
            <p>To handle an error, you can subscribe to the <span
                className="bg-gray-200 px-1 rounded">EVENT_APP_UNHANDLED</span> channel and filter the events by the
                <span className="bg-gray-200 px-1 rounded">error</span> property. <span
                    className="bg-gray-200 px-1 rounded">event.acknowledge()</span> is optional to stop further
                processing. (Cough vs Intercept)</p>

            <br/>
            <pre className="text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code className="language-java">
                  {`    public static void main(final String[] args) {
        final Context context = new Nano(args).context(ErrorHandling.class);
    
        // Listen to exceptions
        context.subscribeEvent(EVENT_APP_UNHANDLED, event -> {
            // Print error message
            event.context().logger().warn(() -> "Caught event [{}] with error [{}] ", event.nameOrg(), event.error().getMessage());
            event.acknowledge(); // Set exception as handled (prevent further processing)
        });
    
        // Throw an exception
        context.run(() -> {
            throw new RuntimeException("Test Exception");
        });
    }`}
                    </code>
                  </pre>


            <h1>

            </h1>
        </div>
    ),
    'registers': (
        <div id="registers">

            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Registers <span className="text-base">(ConfigRegister, TypeConversionRegister,
                LogFormatRegister, EventChannelRegister)</span></h1>

            <p>Nano comes with a set of registers that are used to add custom functionality to internal components.
                It's recommended to use the register in <span className="bg-gray-200 px-1 rounded">static</span>
                blocks to ensure that they are only executed on need.
                Like when the class is used.</p>

            <br/>
            <h1 className="text-2xl font-bold mb-4">ConfigRegister</h1>

            <p>
                The <span className="bg-gray-200 px-1 rounded">ConfigRegister</span> is used to register custom
                configuration
                values. This register is non functional and mostly used for documentation purposes like the help menu.
                The config
                keys are usually separated by <span className="bg-gray-200 px-1 rounded">_</span> and written in
                lowercase.
                This ensures a common naming convention which is compatible in environments like env variables and as
                parameters.
            </p>

            <br/>
            <h1 className="text-base font-bold mb-4">Usage:</h1>
            <pre className="text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code className="language-java">
                  {`    static {
        // Register a config key
        String key = ConfigRegister.registerConfig("my_config_key", "my description");
    
        // Getting a config description
        String description = ConfigRegister.configDescriptionOf("my_config_key");
    
        // Getting all configs
        Map<String, String> allConfigs = CONFIG_KEYS;
    }`}
                    </code>
                  </pre>

            <br/>
            <h1 className="text-2xl font-bold mb-4">EventChannelRegister:</h1>
            <p>The <span className="bg-gray-200 px-1 rounded">EventChannelRegister</span> is used to register custom
                <a className="nano-link" href="https://github.com/NanoNative/nano/blob/main/docs/events/README.md"
                   target="_blank" rel="noopener noreferrer"> Events</a> channels to send or subscribe <a
                    className="nano-link" href="https://github.com/NanoNative/nano/blob/main/docs/events/README.md"
                    target="_blank" rel="noopener noreferrer"> events</a> to.
                the registration is needed to create unique channel ids for the
                <a className="nano-link" href="https://github.com/NanoNative/nano/blob/main/docs/events/README.md"
                   target="_blank" rel="noopener noreferrer"> Events</a> bus. These ids are faster than
                using <span className="bg-gray-200 px-1 rounded">String</span> ids </p>

            <br/>
            <h1 className="text-base font-bold mb-4">Usage:</h1>
            <pre className="text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code className="language-java">
                      {`    static {
        // Register a channel
        int MY_EVENT_CHANNEL_ID = EventChannelRegister.registerChannelId("my_channel_name");
    
        // Getting a channel name by id
        String myChanelName = EventChannelRegister.eventNameOf(MY_EVENT_CHANNEL_ID);
    
        // Getting a channelId by name
        int MY_EVENT_CHANNEL_ID = EventChannelRegister.eventIdOf("my_channel_name");
    
        // checking if a channel is registered
        boolean isChannelAvailable = ConfigRegister.isChannelIdAvailable("my_config_key");
    }
                  `}
                    </code>
                  </pre>
            <br/>
            <h1 className="text-2xl font-bold mb-4">LogFormatRegister</h1>
            <p>This register is used to register custom log formats. Default formats are
                <span className="bg-gray-200 px-1 rounded">console</span> and
                <span className="bg-gray-200 px-1 rounded">json</span>. The
                <a className="nano-link" href="https://github.com/NanoNative/nano/blob/main/docs/logger/README.md"
                   target="_blank" rel="noopener noreferrer">Logger</a>
                is still under construction. The functionality might change in the future. Simply use the default
                log Formatter interface of java <span
                    className="bg-gray-200 px-1 rounded">java.util.logging.Formatter</span>.
            </p>
            <br/>
            <h1 className="text-base font-bold mb-4">Usage:</h1>
            <pre className="text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code className="language-java">
                  {`    static {
        // Register a log formatter
        LogFormatRegister.registerLogFormatter("xml", new XmlLogFormatter());
    
        // Getting a log formatter by name
        Formatter jsonFormatter = LogFormatRegister.getLogFormatter("json");
        }`}
                    </code>
                  </pre>

            <br/>
            <h1 className="text-2xl font-bold mb-4">TypeConversionRegister</h1>
            <p>The <span className="bg-gray-200 px-1 rounded">TypeConversionRegister</span> is used to register custom
                type converters. It's the core of Nano.
                These type conversion are used in the Config/Context, Event Cache, HttpService request &
                responses and everything which uses <span className="bg-gray-200 px-1 rounded">TypeMap</span>,
                <span className="bg-gray-200 px-1 rounded">TypeList</span> or <span
                    className="bg-gray-200 px-1 rounded">TypeInfo</span>.
                See <a className="nano-link" href="https://github.com/YunaBraska/type-map" target="_blank"
                       rel="noopener noreferrer">TypeMap</a>
                for more information.
            </p>
            <br/>
            <h1 className="text-base font-bold mb-4">Usage:</h1>
            <pre className="text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code className="language-java">
                  {`    import berlin.yuna.typemap.logic.TypeConverter;

    static {
        // Register type conversion from String to LogLevel
        registerTypeConvert(String.class, LogLevel.class, LogLevel::nanoLogLevelOf);
    
        // Register type conversion from LogLevel to String
        registerTypeConvert(LogLevel.class, String.class, Enum::name);
    
        // Manual type conversion
        TypeConverter.convertObj("INFO", LogLevel.class);
    }
                  `}
                    </code>
                  </pre>

        </div>
    ),
    'integrations': (
        <div id="integrations">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Integrations</h1>
            <p>Nano is fully standalone and can be integrated into various frameworks and libraries. This section
                provides examples of how to integrate Nano into</p>
            <br/>
            <br/>
            <h1 className="text-2xl font-bold mb-4">🌱 Nano in Spring boot</h1>
            <ul className="list-disc pl-5">
                <li className="mb-2 pt-1">Run Nano as Bean</li>
                <pre className="text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code className="language-java">
                  {`    @Configuration
    public class NanoConfiguration {
    
        @Bean
        public Nano nanoInstance() {
            // Initialize your Nano instance with the desired services
            return new Nano(); // Optionally add your services and configurations here
        }
    }             `}
                    </code>
                  </pre>
                <li className="mb-2 pt-1">Use Nano in a Service</li>
                <pre className="text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code className="language-java">
                  {`    @Service
    public class SomeService {
    
        private final Nano nano;
    
        @Autowired
        public SomeService(final Nano nano) {
            this.nano = nano;
            // Use Nano instance as needed
        }
    }`}
                    </code>
                  </pre>
                <p className="py-2">Nano has a graceful shutdown by itself, but it could be useful to trigger it from a
                    Spring bean.</p>
                <li className="mb-2 pt-1">Graceful shutdown using <span
                    className="bg-gray-200 px-1 rounded">DisposableBean</span></li>
                <pre className="text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code className="language-java">
                  {`    @Component
    public class NanoManager implements DisposableBean {
    
        private final Nano nano;
    
        public NanoManager(final Nano nano) {
            this.nano = nano;
        }
    
        @Override
        public void destroy() {
            nano.stop(); // Trigger Nano's shutdown process
        }
    }`}
                    </code>
                  </pre>
                <li className="mb-2 pt-1">raceful shutdown using @PreDestroy annotation</li>
                <pre className="text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code className="language-java">
                  {`    @Component
    public class NanoManager {
    
        private final Nano nano;
    
        public NanoManager(final Nano nano) {
            this.nano = nano;
        }
    
        @PreDestroy
        public void onDestroy() {
            nano.stop(); // Trigger Nano's shutdown process
        }
    }`}
                    </code>
                  </pre>
            </ul>

            <br/>
            <br/>
            <h1 className="text-2xl font-bold mb-4">🧑‍🚀 Nano in Micronaut</h1>
            <ul className="list-disc pl-5">
                <li className="mb-2 pt-1">Define the Nano Bean</li>
                <pre className="text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code className="language-java">
                  {`    @Factory
    public class NanoFactory {
    
        @Singleton
        public Nano nanoInstance() {
            // Initialize your Nano instance with desired services
            return new Nano(); // Optionally add services and configurations here
        }
    }`}
                    </code>
                  </pre>
                <li className="mb-2 pt-1">Use Nano in Your Application</li>
                <pre className="text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code className="language-java">
                  {`    @Singleton
    public class SomeService {
    
        private final Nano nano;
    
        public SomeService(final Nano nano) {
            this.nano = nano;
            // Use the Nano instance as needed
        }
    }`}
                    </code>
                  </pre>
                <li className="mb-2 pt-1">Graceful shutdown using <span
                    className="bg-gray-200 px-1 rounded">@ServerShutdownEvent</span></li>
                <pre className="text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code className="language-java">
                  {`    @Singleton
    public class NanoManager implements ApplicationEventListener<ServerShutdownEvent> {
    
        private final Nano nano;
    
        public NanoManager(final Nano nano) {
            this.nano = nano;
        }
    
        @Override
        public void onApplicationEvent(final ServerShutdownEvent event) {
            nano.stop(); // Trigger Nano's shutdown process
        }
    }`}
                    </code>
                  </pre>
            </ul>

            <br/>
            <br/>
            <h1 className="text-2xl font-bold mb-4">🐸 Nano in Quarkus</h1>
            <ul className="list-disc pl-5">
                <li className="mb-2 pt-1">Define the Nano Producer</li>
            </ul>
            <pre className="text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code className="language-java">
                  {`    @ApplicationScoped
    public class NanoProducer {
    
        @Produces
        public Nano produceNano() {
            // Initialize your Nano instance with the desired services
            return new Nano(); // Optionally add your services and configurations here
        }
    }`}
                    </code>
                  </pre>


        </div>
    ),
    'code-examples': (
        <div id="code-examples">
            <h1 className="text-2xl font-bold mb-4"></h1>

        </div>
    ),
    'components': (
        <div id="components">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-2">Components</h1>
            <p>All you need to know are few classes: <a className="nano-link" href="#nano-context">Context</a>, <a className="nano-link" href="#nano-events">Events</a>, <a
                className="nano-link" href="#nano-logger">Logger</a>, <a className="nano-link" href="#nano-schedulers">Schedulers</a>, Services</p>
        </div>
    ),

    'nano-context': (
        <div id="nano-context">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Context</h1>
            <p>The <a className="nano-link" href="#nano-context">Context</a> object is the main and overwhelming object
                that is passed around in Nano and accessible at
                any time. It is used to interact with the core components: <a className="nano-link"
                                                                              href="#nano-logger">Logger</a>, <a
                    className="nano-link" href="#nano-events">Events</a> , <a className="nano-link"
                                                                              href="#nano-services">Services</a>, <a
                    className="nano-link" href="#nano-schedulers">Schedulers</a>,
                traces and <a className="nano-link" href="#nano-configuration">configuration</a>. There
                is no need to create any custom config class as the <a className="nano-link"
                                                                       href="#nano-context">Context</a> contains all
                needed
                information including type conversion.</p>


            <div
                className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit]">
                <Image
                    className="rounded-lg bg-gray-900"
                    src={nano_context}
                    width={1200}
                    height={500}
                    alt="Nano Context"
                />
            </div>


            <br/>
            <h1 className="text-base font-bold mb-4">Examples</h1>
            <h1 className="text-base font-bold mb-4">Access Configs</h1>
            <ul className="list-disc pl-5">
                <li className="mb-2"><span className="bg-gray-200 px-1 rounded">context.get(Integer.class, "app_config_key")</span> -
                    Get a configuration value as an
                    Integer
                </li>
                <li className="mb-2"><span className="bg-gray-200 px-1 rounded">context.getList(Integer.class, "app_config_key")</span> -
                    Get a configuration value as a
                    List of Integers
                </li>
                <li className="mb-2"><span className="bg-gray-200 px-1 rounded">context.getMap(String.class, Integer.class, "app_config_key")</span> -
                    Get a configuration
                    value as a Map of Strings to Integers
                </li>
                <li className="mb-2"><span className="bg-gray-200 px-1 rounded">context.traceId()</span> - Get the trace
                    id of the current <a className="nano-link" href="#nano-context">Context</a>
                </li>
                <li className="mb-2"><span className="bg-gray-200 px-1 rounded">context.logLevel()</span> - Get the log
                    level of the current <a className="nano-link" href="#nano-context">Context</a>
                </li>
                <li className="mb-2"><span className="bg-gray-200 px-1 rounded">context.logger.info(() -{'>'} "Hello {}", "World")</span> -
                    Log a message with the <a className="nano-link" href="#nano-logger">Logger</a> at
                    the info level
                </li>
                <li className="mb-2"><span
                    className="bg-gray-200 px-1 rounded">context.newContext(MyClass.class)</span> -
                    Create a new <a className="nano-link" href="#nano-context">Context</a> with a <a className="nano-link" href="#nano-logger">Logger</a> for the
                    specific class
                </li>
            </ul>
            <br/>
            <h2 className="text-lg font-semibold">Events</h2><br/>
            <ul className="list-disc pl-5 mb-4">
                <li className="mb-2"><span
                    className="bg-gray-200 px-1 rounded">context.registerChannelId("MyEventName")</span> - Register a
                    new Event type and get the event id
                </li>
                <li className="mb-2"><span className="bg-gray-200 px-1 rounded">context.sendEvent(channelId, MyPayloadObject)</span> -
                    Send an Event with a payload
                </li>
                <li className="mb-2"><span className="bg-gray-200 px-1 rounded">context.subscribeEvent(channelId, event -{'>'} System.out.println(event))</span> -
                    Subscribe to an Event and execute the lambda when the event is triggered
                </li>
                <li className="mb-2"><span className="bg-gray-200 px-1 rounded">context.broadcastEvent(channelId, MyPayloadObject)</span> -
                    Broadcast an Event with a payload
                </li>
                <li className="mb-2"><span className="bg-gray-200 px-1 rounded">context.eventNameOf(channelId)</span> -
                    Get the name of an Event from the event id
                </li>
                <li className="mb-2"><span className="bg-gray-200 px-1 rounded">context.channelIdOf(eventName)</span> -
                    Get the id of an Event from the event name
                </li>
            </ul>
            <br/>
            <h2 className="text-lg font-semibold">Executors</h2><br/>
            <ul className="list-disc pl-5 mb-4">
                <li className="mb-2"><span
                    className="bg-gray-200 px-1 rounded">context.run(() -{'>'} System.out.println("Scheduled"), 128, 256, MILLISECONDS)</span> -
                    Run a lambda on a Scheduler with a 128ms delay and 256ms period
                </li>
                <li className="mb-2"><span
                    className="bg-gray-200 px-1 rounded">context.run(() -{'>'} System.out.println("Async Task"))</span> -
                    Run a lambda asynchronously
                </li>
                <li className="mb-2"><span
                    className="bg-gray-200 px-1 rounded">context.runAwait(() -{'>'} System.out.println("Task 1"), () -{'>'} System.out.println("Task 2"))</span> -
                    Run a lambda asynchronously and wait for them to finish
                </li>
            </ul>

            <h2 id="nano-configuration" className="text-lg font-semibold">Configuration</h2><br/>
            <p className="mb-4">The configuration can be set in multiple ways, with the following order of
                precedence:</p>
            <table className="table-auto border-collapse border border-gray-300 mb-4 w-full">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2">Order</th>
                    <th className="border border-gray-300 px-4 py-2">Type</th>
                    <th className="border border-gray-300 px-4 py-2">Description & examples</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">0</td>
                    <td className="border border-gray-300 px-4 py-2">Property Files</td>
                    <td className="border border-gray-300 px-4 py-2">application.properties config files, automatically
                        loaded from config, resources, and resources/config
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                    <td className="border border-gray-300 px-4 py-2">Environment Variables</td>
                    <td className="border border-gray-300 px-4 py-2">export app_profiles=production variables set in the
                        environment
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">2</td>
                    <td className="border border-gray-300 px-4 py-2">Command Line Arguments</td>
                    <td className="border border-gray-300 px-4 py-2">-Dapp_profiles=production start parameters</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                    <td className="border border-gray-300 px-4 py-2">Args</td>
                    <td className="border border-gray-300 px-4 py-2">app_profiles=production arguments passed to the
                        main method
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">4</td>
                    <td className="border border-gray-300 px-4 py-2">Nano Start</td>
                    <td className="border border-gray-300 px-4 py-2">new Nano(Map.of(CONFIG_LOG_LEVEL, TEST_LOG_LEVEL))
                        passing configuration at nano start
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">5</td>
                    <td className="border border-gray-300 px-4 py-2">Defaults</td>
                    <td className="border border-gray-300 px-4 py-2">If no other configuration value is provided</td>
                </tr>
                </tbody>
            </table>

            <p className="mb-4">To access the configuration, use the <a className="nano-link"
                                                                        href="#nano-context">Context</a> object.
                Available
                properties can be found by starting the application with the <span
                    className="bg-gray-200 px-1 rounded">--help</span> flag.</p>

            <br/>
            <h2 className="text-lg font-semibold">Configuration Profiles</h2>
            <p className="mb-4">
                Profiles define different configurations for environments, set using the <span
                className="bg-gray-200 px-1 rounded">app_profiles</span> property. It’s compatible with <span
                className="bg-gray-200 px-1 rounded">spring.profiles.active</span>, <span
                className="bg-gray-200 px-1 rounded">quarkus.profile</span>, and <span
                className="bg-gray-200 px-1 rounded">micronaut.profiles</span>. The application will load the
                corresponding <span
                className="bg-gray-200 px-1 rounded">application-{'{profile}'}.properties</span> file if available.
            </p>
            <br/>
            <h2 className="text-lg font-semibold">Configuration Format</h2>
            <p className="mb-4">
                Nano converts configuration keys to a common format: lowercase with underscores. For instance, <span
                className="bg-gray-200 px-1 rounded">app.profiles</span> becomes <span
                className="bg-gray-200 px-1 rounded">app_profiles</span>.
            </p>

            <br/>
            <h2 className="text-lg font-semibold">Configuration Naming Patterns:</h2>
            <ul className="list-disc pl-5 mb-4">
                <li className="mb-2"><span className="bg-gray-200 px-1 rounded">app_{'<key>'}</span> is reserved for
                    Nano internal configurations
                </li>
                <li className="mb-2"><span
                    className="bg-gray-200 px-1 rounded">app_service_{'<servicename>_<key>'}</span> is for Services
                </li>
                <li className="mb-2"><span className="bg-gray-200 px-1 rounded">app_config_</span> is the prefix for
                    custom configurations
                </li>
            </ul>
            <br/>
            <h2 className="text-lg font-semibold">Configuration Variables</h2>
            <p className="mb-4">
                Variables in configuration files are in the format <span
                className="bg-gray-200 px-1 rounded">{'${variableName}'}</span> or <span
                className="bg-gray-200 px-1 rounded">{'${variableName:fallback}'}</span>.
            </p>

            <h3 className="text-md font-medium mb-2">Example:</h3>
            <p className="mb-4">
                <span
                    className="bg-gray-200 px-1 rounded">{'test.placeholder.value=${placeholder_value:fallback}'}</span>
            </p>

            <br/>
            <h2 className="text-lg font-semibold">Default Configurations</h2><br/>
            <table className="table-auto border-collapse border border-gray-300 mb-4 w-full">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2">Config Name</th>
                    <th className="border border-gray-300 px-4 py-2">Type</th>
                    <th className="border border-gray-300 px-4 py-2">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">app_env_prod</td>
                    <td className="border border-gray-300 px-4 py-2">Boolean</td>
                    <td className="border border-gray-300 px-4 py-2">Enable or disable behavior like exit codes, useful
                        in prod environments, default = false
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">app_log_formatter</td>
                    <td className="border border-gray-300 px-4 py-2">String</td>
                    <td className="border border-gray-300 px-4 py-2">Log formatter: console or json</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">app_log_level</td>
                    <td className="border border-gray-300 px-4 py-2">String</td>
                    <td className="border border-gray-300 px-4 py-2">Log level for the application: INFO, DEBUG, FATAL,
                        ERROR, WARN
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">app_log_queue_size</td>
                    <td className="border border-gray-300 px-4 py-2">String</td>
                    <td className="border border-gray-300 px-4 py-2">Log queue size. Full queue means logs wait to be
                        executed (when using LogQueue Service)
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">app_oom_shutdown_threshold</td>
                    <td className="border border-gray-300 px-4 py-2">String</td>
                    <td className="border border-gray-300 px-4 py-2">Sets heap threshold percentage to send <span
                        className="bg-gray-200 px-1 rounded">EVENT_APP_OOM</span>. Default = 98, disabled = -1
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">app_params_print</td>
                    <td className="border border-gray-300 px-4 py-2">Boolean</td>
                    <td className="border border-gray-300 px-4 py-2">Prints all configured values</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">app_profiles</td>
                    <td className="border border-gray-300 px-4 py-2">String</td>
                    <td className="border border-gray-300 px-4 py-2">Is config for application profiles</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">app_thread_pool_shutdown_timeout_ms</td>
                    <td className="border border-gray-300 px-4 py-2">String</td>
                    <td className="border border-gray-300 px-4 py-2">Timeout for thread pool shutdown in milliseconds
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">app_service_shutdown_parallel</td>
                    <td className="border border-gray-300 px-4 py-2">Boolean</td>
                    <td className="border border-gray-300 px-4 py-2">Enable or disable parallel service shutdown for
                        faster shutdown
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">help</td>
                    <td className="border border-gray-300 px-4 py-2">Boolean</td>
                    <td className="border border-gray-300 px-4 py-2">Lists available config keys without starting the
                        application
                    </td>
                </tr>
                </tbody>
            </table>

            <br/>
            <h2 className="text-lg font-semibold">Default <a className="nano-link" href="#nano-events">Events</a></h2>
            <br/>
            <table className="table-auto border-collapse border border-gray-300 mb-4 w-full">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2">In/Out</th>
                    <th className="border border-gray-300 px-4 py-2">Event</th>
                    <th className="border border-gray-300 px-4 py-2">Payload</th>
                    <th className="border border-gray-300 px-4 py-2">Response</th>
                    <th className="border border-gray-300 px-4 py-2">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">🔲</td>
                    <td className="border border-gray-300 px-4 py-2">EVENT_APP_START</td>
                    <td className="border border-gray-300 px-4 py-2">Nano</td>
                    <td className="border border-gray-300 px-4 py-2">N/A</td>
                    <td className="border border-gray-300 px-4 py-2">Triggered when the Application is started</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">🔲</td>
                    <td className="border border-gray-300 px-4 py-2">EVENT_APP_SHUTDOWN</td>
                    <td className="border border-gray-300 px-4 py-2">null</td>
                    <td className="border border-gray-300 px-4 py-2">N/A</td>
                    <td className="border border-gray-300 px-4 py-2">Triggered when the Application shuts down, can be
                        manually triggered
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">🔲</td>
                    <td className="border border-gray-300 px-4 py-2">EVENT_APP_SERVICE_REGISTER</td>
                    <td className="border border-gray-300 px-4 py-2">Service</td>
                    <td className="border border-gray-300 px-4 py-2">N/A</td>
                    <td className="border border-gray-300 px-4 py-2">Triggered when a Service is started</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">🔲</td>
                    <td className="border border-gray-300 px-4 py-2">EVENT_APP_SERVICE_UNREGISTER</td>
                    <td className="border border-gray-300 px-4 py-2">Service</td>
                    <td className="border border-gray-300 px-4 py-2">N/A</td>
                    <td className="border border-gray-300 px-4 py-2">Triggered when a Service is stopped</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">🔲</td>
                    <td className="border border-gray-300 px-4 py-2">EVENT_APP_SCHEDULER_REGISTER</td>
                    <td className="border border-gray-300 px-4 py-2">Scheduler</td>
                    <td className="border border-gray-300 px-4 py-2">N/A</td>
                    <td className="border border-gray-300 px-4 py-2">Triggered when a Scheduler is started</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">🔲</td>
                    <td className="border border-gray-300 px-4 py-2">EVENT_APP_SCHEDULER_UNREGISTER</td>
                    <td className="border border-gray-300 px-4 py-2">Scheduler</td>
                    <td className="border border-gray-300 px-4 py-2">N/A</td>
                    <td className="border border-gray-300 px-4 py-2">Triggered when a Scheduler is stopped</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">🔲</td>
                    <td className="border border-gray-300 px-4 py-2">EVENT_APP_UNHANDLED</td>
                    <td className="border border-gray-300 px-4 py-2">Unhandled, HttpObject,...</td>
                    <td className="border border-gray-300 px-4 py-2">N/A</td>
                    <td className="border border-gray-300 px-4 py-2">Triggered when an unhandled error occurs within the
                        context
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">🔲</td>
                    <td className="border border-gray-300 px-4 py-2">EVENT_APP_OOM</td>
                    <td className="border border-gray-300 px-4 py-2">Double</td>
                    <td className="border border-gray-300 px-4 py-2">N/A</td>
                    <td className="border border-gray-300 px-4 py-2">Triggered when the Application reaches out of
                        memory. If unhandled, the App will shutdown (see config <span
                            className="bg-gray-200 px-1 rounded">app_oom_shutdown_threshold</span>)
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">🔲</td>
                    <td className="border border-gray-300 px-4 py-2">EVENT_APP_HEARTBEAT</td>
                    <td className="border border-gray-300 px-4 py-2">Nano</td>
                    <td className="border border-gray-300 px-4 py-2">N/A</td>
                    <td className="border border-gray-300 px-4 py-2">Sent every 256ms</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">🔳</td>
                    <td className="border border-gray-300 px-4 py-2">EVENT_CONFIG_CHANGE</td>
                    <td className="border border-gray-300 px-4 py-2">TypeMap</td>
                    <td className="border border-gray-300 px-4 py-2">N/A</td>
                    <td className="border border-gray-300 px-4 py-2">Used to change configs on the fly</td>
                </tr>
                </tbody>
            </table>


        </div>
    ),

    'nano-events': (
        <div id="nano-events">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Events</h1>
            <p>Events are the backbone of communication within the Nano Framework, enabling decoupled interaction
                between
                different parts of an application. They are a core API concept for using Services. See Event.java.</p>

            <br/>
            <div
                className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit]">
                <Image
                    className="rounded-lg bg-gray-900"
                    src={nano_events}
                    width={1200}
                    height={500}
                    alt="Nano Events"
                />
            </div>
            <br/><br/>
            <h1 className="text-base font-bold mb-4">ChannelIds</h1>
            <p>ChannelIds are globally unique IDs to identify the correct channel to send events into. They can be
                registered
                once with <code><span
                    className="bg-gray-200 px-1 rounded">ChannelIdRegister.registerChannelId("MY_EVENT_NAME")</span></code>.
                See <a className="nano-link"
                       href="https://github.com/NanoNative/nano/blob/main/src/main/java/org/nanonative/nano/helper/event/EventChannelRegister.java"
                       target="_blank" rel="noopener noreferrer">EventChannelRegister.java</a> and <a
                    className="nano-link"
                    href="https://github.com/NanoNative/nano/blob/main/src/main/java/org/nanonative/nano/helper/event/model/EventChannel.java"
                    target="_blank" rel="noopener noreferrer">DefaultEventChannel</a>.
            </p>

            <br/>
            <h1 className="text-base font-bold mb-4">Sending Events</h1>
            <ul className="list-disc pl-5">
                <li>
                    <b>Synchronous (SingleCast)</b><br/>
                    <code><span
                        className="bg-gray-200 px-1 rounded">context.sendEvent(channelId, MyPayloadObject)</span></code><br/>
                    <code><span className="bg-gray-200 px-1 rounded">sendEventReturn()</span></code> will return the
                    Event
                    instead of the <a className="nano-link" href="#nano-context">Context</a>.
                </li>
                <li>
                <b>Asynchronous (SingleCast)</b><br/>
                    <code><span className="bg-gray-200 px-1 rounded">context.sendEvent(channelId, MyPayloadObject, response -{'>'} myListener)</span></code><br/>
                    <code><span className="bg-gray-200 px-1 rounded">sendEventReturn()</span></code> will return the
                    Event
                    instead of the <a className="nano-link" href="#nano-context">Context</a>.
                </li>
                <li>
                <b>Synchronous (BroadCast)</b><br/>
                    <code><span
                        className="bg-gray-200 px-1 rounded">context.broadcastEvent(channelId, MyPayloadObject)</span></code><br/>
                    <span className="bg-gray-200 px-1 rounded">broadcastEventReturn()</span> will return the Event
                    instead of the <a className="nano-link" href="#nano-context">Context</a>.<br/>
                    The broadcast will not stop at the first responding listeners.
                </li>
                <li>
                    <b>Asynchronous (BroadCast)</b><br/>
                    <code><span className="bg-gray-200 px-1 rounded">context.broadcastEvent(channelId, MyPayloadObject, response {'>'} myListener)</span></code><br/>
                    <code><span className="bg-gray-200 px-1 rounded">broadcastEventReturn()</span></code> will return
                    the Event
                    instead of the <a className="nano-link" href="#nano-context">Context</a>.<br/>
                    The broadcast will not stop at the first responding listeners.
                </li>
            </ul>

            <br/>
            <h1 className="text-base font-bold mb-4">Listening to Events</h1>
            <p>Listeners can be registered with <code>context.subscribeEvent(channelId, event -{'>'}
                System.out.println(event))</code>. Services don’t need to subscribe or unsubscribe from <a className="nano-link" href="#nano-events">Events</a>,
                as they
                receive them through the built-in <code>onEvent</code> method.</p>

            <br/>
            <h1 className="text-base font-bold mb-4">Default Events</h1>
            <table className="table-auto border-collapse border border-gray-400">
                <thead>
                <tr>
                    <th className="border border-gray-400 px-4 py-2">In</th>
                    <th className="border border-gray-400 px-4 py-2">Out</th>
                    <th className="border border-gray-400 px-4 py-2">Event</th>
                    <th className="border border-gray-400 px-4 py-2">Payload</th>
                    <th className="border border-gray-400 px-4 py-2">Response</th>
                    <th className="border border-gray-400 px-4 py-2">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">🔲</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">EVENT_APP_START</td>
                    <td className="border border-gray-400 px-4 py-2">Nano</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">Triggered when the Application starts</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">🔲</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">EVENT_APP_SHUTDOWN</td>
                    <td className="border border-gray-400 px-4 py-2">null</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">Triggered when the Application shuts down</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">🔲</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">EVENT_APP_SERVICE_REGISTER</td>
                    <td className="border border-gray-400 px-4 py-2">Service</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">Triggered when a Service starts</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">🔲</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">EVENT_APP_SERVICE_UNREGISTER</td>
                    <td className="border border-gray-400 px-4 py-2">Service</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">Triggered when a Service stops</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">🔲</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">EVENT_APP_SCHEDULER_REGISTER</td>
                    <td className="border border-gray-400 px-4 py-2">Scheduler</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">Triggered when a Scheduler starts</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">🔲</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">EVENT_APP_SCHEDULER_UNREGISTER</td>
                    <td className="border border-gray-400 px-4 py-2">Scheduler</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">Triggered when a Scheduler stops</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">🔲</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">EVENT_APP_UNHANDLED</td>
                    <td className="border border-gray-400 px-4 py-2">Unhandled, HttpObject...</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">Triggered when an unhandled error occurs in the
                        context
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">🔲</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">EVENT_APP_OOM</td>
                    <td className="border border-gray-400 px-4 py-2">Double</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">Triggered when the Application reaches out of
                        memory. If not handled, the app shuts down. See config <code>app_oom_shutdown_threshold</code>.
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">🔲</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">EVENT_APP_HEARTBEAT</td>
                    <td className="border border-gray-400 px-4 py-2">Nano</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">Sent every 256ms</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">🔳</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">EVENT_CONFIG_CHANGE</td>
                    <td className="border border-gray-400 px-4 py-2">TypeMap</td>
                    <td className="border border-gray-400 px-4 py-2">N/A</td>
                    <td className="border border-gray-400 px-4 py-2">Used to change configs on the fly</td>
                </tr>
                </tbody>
            </table>
        </div>
    ),
    'nano-logger': (
        <div id="nano-logger">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Logger</h1>
            <p>The <a className="nano-link" href="#nano-logger">Logger</a> is a simple wrapper around the built-in Java
                logger that comes with predefined log formats
                (console and json). <strong>Note:</strong> the logger is still under construction.</p>

            <br/>
            <div
                className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit]">
                <Image
                    className="rounded-lg bg-gray-900"
                    src={nano_logger}
                    width={1200}
                    height={500}
                    alt="Nano Logger"
                />
            </div>

            <br/>
            <h1 className="text-base font-bold mb-4">Placeholder</h1>
            <p>The logger supports placeholders in the message string. The placeholders are replaced by the arguments
                passed to the logger.</p>
            <ul className="list-disc pl-5">
                <li><code>{}</code> and <code>%s</code> are replaced by the argument at the same index.</li>
                <li><code>{0}</code> is replaced by the argument at the specified index.</li>
            </ul>

            <br/>
            <h1 className="text-base font-bold mb-4">Log Formatter</h1>
            <p>The <a className="nano-link" href="#nano-logger">Logger</a> supports two default log formatters:</p>
            <ul className="list-disc pl-5">
            <li>
                    <b>console</b> - Logs the message to the console.<br/>
                    <b>Example:</b>
                    <span className="bg-gray-200 px-1 rounded">context.logger(() -{'>'} "Hello {}", "World")
                </span>
                    <br/>
                    <b>Output:</b> <span className="bg-gray-200 px-1 rounded">[2024-11-11 11:11:11.111] [DEBUG] [Nano] - Hello World</span>
                </li>
                <li>
                   <span
                       className="bg-gray-200 px-1 rounded"><b>json</b></span>- Logs the message as JSON to the console.<br/>
                    <b>Example:</b> <span className="bg-gray-200 px-1 rounded">context.logger(() -{'>'} "Hello {}", "World")</span><br/>
                    <b>Output:</b>
                    <pre className="bg-gray-100 p-2 rounded">
                {"{"}<br/>
                        &nbsp;&nbsp;"Hello": "World",<br/>
                        &nbsp;&nbsp;"level": "DEBUG",<br/>
                        &nbsp;&nbsp;"logger": "Nano",<br/>
                        &nbsp;&nbsp;"message": "Hello World",<br/>
                        &nbsp;&nbsp;"timestamp": "2024-11-11 11:11:11.111"<br/>
                        {"}"}
            </pre>
                </li>
            </ul>

            <br/>
            <h1 className="text-base font-bold mb-4">Custom Log Formatter</h1>
            <p>Custom log formatters can be registered by using <code>LogFormatRegister.registerLogFormatter(Name,
                Formatter)</code>
                where <code>Formatter</code> is a Java <code>java.util.logging.Formatter</code>.</p>

            <br/>
            <h1 className="text-base font-bold mb-4">Log Queue</h1>
            <p>The <a className="nano-link" href="#nano-logger">Logger</a> supports a <b>LogQueue</b>, which can be used
                to prevent the main thread from being blocked
                when
                logging. Nano comes with a default LogQueue Service that can be added like any other services:</p>
            <pre className="bg-gray-100 p-2 rounded">
        <code>new Nano(new LogQueue())</code>
    </pre>
        </div>
    ),
    'nano-schedulers': (
        <div id="nano-schedulers">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Schedulers</h1>
            <p> Schedulers are managed functions that run in the
                background, allowing for tasks to be executed either
                after a delay or periodically.</p>

            <div
                className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit]">
                <Image
                    className="rounded-lg bg-gray-900"
                    src={nano_schedulers}
                    width={1200}
                    height={500}
                    alt="Nano Scheduler"
                />
            </div>

            <br/>
            <h1 className="text-base font-bold mb-4">Examples</h1>
            <ul className="list-disc pl-5">
                <li>
                    <b>Run once with a delay (128ms)</b><br/>
                    <span className="bg-gray-200 px-1 rounded">context.run(() -{'>'} System.out.println("Scheduled"), 128, MILLISECONDS)</span>
                </li>
                <li>
                    <b>Run periodically (every 256ms) with an initial delay (128ms)</b><br/>
                    <span className="bg-gray-200 px-1 rounded">context.run(() -{'>'} System.out.println("Scheduled"), 128, 256, MILLISECONDS)</span>
                </li>
            </ul>
        </div>

    ),
    'nano-services': (
        <div id="nano-services">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Services</h1>
            <p>Services are extensions for Nano, acting as independently managed programs that run in the background.
                They are typically designed to be accessed by <a className="nano-link" href="#nano-events">Events</a>.
                Nano provides default Services such as
                <span className="bg-gray-200 px-1 rounded">HttpService</span>, <span
                    className="bg-gray-200 px-1 rounded">MetricService</span>,
                and <span className="bg-gray-200 px-1 rounded">LogQueue</span>.</p>

            <br/>
            <div
                className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit]">
                <Image
                    className="rounded-lg bg-gray-900"
                    src={nano_services}
                    width={1200}
                    height={500}
                    alt="Nano Service"
                />
            </div>
            <br/>
            <h1 className="text-base font-bold mb-4">Start Services</h1>
            <ul className="list-disc pl-5">
                <li>
                    <b>Start Services with Nano Startup:</b><br/>
                    <span className="bg-gray-200 px-1 rounded">new Nano(new HttpService(), new MetricService(), new LogQueue())</span><br/>
                    <span>Services will start automatically when Nano starts.</span>
                </li>
                <li>
                    <b>Start a Service Manually:</b><br/>
                    <span className="bg-gray-200 px-1 rounded">context.run(new HttpService())</span><br/>
                    <span>This will start the <code>HttpService</code> manually.</span>
                </li>
            </ul>
        </div>

    ),
    'maven-example': (
        <div id="maven-example">
            <br/><br/>
            <h1 className="text-base font-bold mb-4">Maven example</h1>
            <pre className="text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code className="language-java">
                  {`    <dependency>
        <groupId>org.nanonative</groupId>
        <artifactId>nano</artifactId>
        <version>1.0.0</version>
    </dependency>`}
                    </code>
                  </pre>
        </div>
    ),
    'gradle-example': (
        <div id="gradle-example">
            <br/><br/>
            <h1 className="text-base font-bold mb-4">Gradle example</h1>
            <pre className="text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code className="language-java">
                  {`    dependencies {
        implementation 'org.nanonative:nano:1.0.0'
    }`}
                    </code>
                  </pre>

            <br/>
            <p className="px-1"> <b>Simple Nano example</b> with <a className="nano-link" href="https://github.com/NanoNative/nano/blob/main/docs/services/httpservice/README.md" target="_blank" rel="noopener noreferrer">HttpService</a> (a default service)</p><br/>
            <pre className="text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code className="language-java">
                  {`public static void main(final String[] args) {
    // Start Nano with HttpService
    final Nano app = new Nano(args, new HttpService());

    // listen to /hello
    app.subscribeEvent(EVENT_HTTP_REQUEST, event -> event.payloadOpt(HttpObject.class)
        .filter(HttpObject::isMethodGet)
        .filter(request -> request.pathMatch("/hello"))
        .ifPresent(request -> request.response().body(Map.of("Hello", System.getProperty("user.name"))).respond(event)));

    // Override error handling for HTTP requests
    app.subscribeEvent(EVENT_APP_UNHANDLED, event -> event.payloadOpt(HttpObject.class).ifPresent(request ->
        request.response().body("Internal Server Error [" + event.error().getMessage() + "]").statusCode(500).respond(event)));
}`}
                    </code>
                  </pre>
        </div>

    ),
    'build-nano': (
        <div id="build-nano">
            <h1 className="text-2xl font-bold mb-4">Build Nano</h1>
            <br/>
            <p className="px-1">add the native-image profile to your pom.xml and run mvn package -Pnative-image</p>
            <pre className="text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code className="language-java">
                  {`    <profiles>
        <!-- NATIVE COMPILATION -->
        <plugin>
            <groupId>org.graalvm.nativeimage</groupId>
            <artifactId>native-image-maven-plugin</artifactId>
            <version>21.2.0</version>
            <configuration>
                <imageName>ExampleApp</imageName>
                <mainClass>de.yuna.berlin.nativeapp.helper.ExampleApp</mainClass>
                <buildArgs>
                    <!-- Reduces the image size - Ensures the native image doesn't include the JVM as a fallback option -->
                    <buildArg>--no-fallback</buildArg>
                    <!-- Disables the use of the GraalVM compilation server -->
                    <buildArg>--no-server</buildArg>
                    <!-- Improve startup time - Initialize classes at build time rather than at runtime -->
                    <buildArg>--initialize-at-build-time</buildArg>
                    <!-- Include all files under /resources -->
                    <buildArg>-H:IncludeResources=resources/config/.*</buildArg>
                </buildArgs>
            </configuration>
            <executions>
                <execution>
                    <goals>
                        <goal>native-image</goal>
                    </goals>
                    <phase>package</phase>
                </execution>
            </executions>
        </plugin>
    </profiles>`}
                    </code>
                  </pre>
        </div>
    ),
    'benefits-of-nano': (
        <div id="benefits-of-nano">
            <h1 className="text-2xl font-bold mb-4">✨ Benefits of Nano</h1>
            <ul className="list-disc pl-5">
                <li className="mb-2">🧩 Modular Design: Nano's architecture is modular, making it easy to understand,
                    extend, and maintain.
                </li>
                <li className="mb-2">🧵 Concurrency Management: Efficiently handle asynchronous tasks using advanced
                    thread management.
                </li>
                <li className="mb-2">📡 Event-Driven Architecture: Robust event handling that simplifies communication
                    between different parts of your application.
                </li>
                <li className="mb-2">⚙️ Flexible Configuration: Configure your application using environment variables,
                    system properties, or command-line arguments.
                </li>
                <li className="mb-2">📊 Robust Logging and Error Handling: Integrated logging and comprehensive error
                    handling mechanisms for reliable operation.
                </li>
                <li className="mb-2">🚀 Scalable and Performant: Designed with scalability and performance in mind to
                    handle high-concurrency scenarios.
                </li>
                <li className="mb-2">🪶 Lightweight & Fast: Starts in milliseconds, uses ~10MB memory.</li>
                <li className="mb-2">🌿 Pure Java, Pure Simplicity: No reflections, no regex, no unnecessary magic.</li>
                <li className="mb-2">⚡ GraalVM Ready: For ahead-of-time compilation and faster startup.</li>
                <li className="mb-2">🔒 Minimal Dependencies: Reduces CVE risks and simplifies updates.</li>
                <li className="mb-2">🌊 Fluent & Stateless: Intuitive API design for easy readability and maintenance.
                </li>
                <li className="mb-2">🛠️ Rapid Service Development: Build real services in minutes.</li>
            </ul>

        </div>
    ),
    'contributing': (
        <div id="contributing">
            <br/>
            <h1 className="text-2xl font-bold mb-4">🤝 Contributing</h1>
            <p>Contributions to Nano are welcome! Please refer to our <a className="nano-link"
                                                                         href="https://github.com/NanoNative/nano/blob/main/CONTRIBUTING.md"
                                                                         target="_blank" rel="noopener noreferrer">Contribution
                Guidelines</a> for more information.</p>
        </div>
    ),
    'license': (
        <div id="license">
            <br/>
            <h1 className="text-2xl font-bold mb-4">📜 License</h1>
            <p>Nano is open-source software licensed under the <a className="nano-link"
                                                                  href="https://github.com/NanoNative/nano/blob/main/LICENSE"
                                                                  target="_blank" rel="noopener noreferrer">Apache
                license</a>.
            </p>
        </div>
    ),
    'support': (
        <div id="support">
            <br/>
            <h1 className="text-2xl font-bold mb-4">🙋‍ Support</h1>
            <p>If you encounter any issues or have questions, please file an issue <a className="nano-link"
                                                                                      href="https://github.com/nanonative/nano/issues/new/choose"
                                                                                      target="_blank"
                                                                                      rel="noopener noreferrer">here</a>.
            </p>
        </div>
    ),
    'stay-connected': (
        <div id="stay-connected">
            <br/>
            <h1 className="text-2xl font-bold mb-4">🌐 Stay Connected</h1>
            <ul className="list-disc pl-5">
                <li className="mb-2"><a className="nano-link" href="https://github.com/NanoNative" target="_blank"
                                        rel="noopener noreferrer">GitHub</a></li>
                <li className="mb-2"><a className="nano-link"
                                        href="https://x.com/i/flow/login?redirect_after_login=%2FYunaMorgenstern"
                                        target="_blank" rel="noopener noreferrer">X (aka Twitter)</a></li>
                <li className="mb-2"><a className="nano-link" href="https://hachyderm.io/@LunaFreyja" target="_blank"
                                        rel="noopener noreferrer">Mastodon</a></li>
                <li className="mb-2"><a className="nano-link"
                                        href="https://www.linkedin.com/in/yuna-morgenstern-6662a5145/" target="_blank"
                                        rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
        </div>
    ),
};
export default documentation_subtopic_content;
