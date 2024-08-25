import React from 'react';

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
                         rel="noopener noreferrer">GraalVM</a>
                to create native executables. To enhance efficiency and performance, Nano utilizes non-blocking virtual
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
