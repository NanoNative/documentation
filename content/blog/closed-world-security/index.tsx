import coverImage from "./assets/cover.svg";
import type { BlogPost } from "../types";

const post: BlogPost = {
    slug: "closed-world-security",
    title: "Closed World Security: From Vulnerable Dependencies To Runtime Evidence",
    description:
        "Closed world builds make vulnerability triage concrete: start with a CVE alert, identify the affected code and verify whether that code exists in the shipped artifact.",
    date: "2026-10-06",
    author: "NanoNative Team",
    tags: ["Security", "Reachability", "Closed World"],
    readingTime: "6 min read",
    coverImage,
    coverAlt: "CVE alert narrowed to an affected method and checked against the shipped artifact",
    content: (
        <>
            <p>
                Dependency scanners do important first-line work. They tell us when a project brings in a component version with a
                known vulnerability. That is the right first alarm.
            </p>

            <p>
                It is not the full answer.
            </p>

            <p>
                A library is often larger than the part an application actually uses. Many libraries contain parsers,
                protocols, serializers, adapters, old utilities and optional integrations. When a CVE affects one of those
                paths and the application uses another, the component alert is correct while the runtime risk is different.
            </p>

            <p>
                The security question is therefore not only whether a dependency is risky. It is also whether the
                vulnerable code is present, reachable and relevant to the artifact that runs in production.
            </p>

            <h2>A CVE Alert Is Evidence</h2>
            <p>
                Software Composition Analysis primarily works at the component and version level. Tools such as OWASP
                Dependency-Check identify project dependencies and check them against known publicly disclosed
                vulnerabilities.
            </p>

            <p>
                Conservative alerting is correct at this layer. If a project depends on a vulnerable component version,
                the scanner reports it. Dependencies change over time. A later feature, configuration change, framework
                upgrade or integration is enough to make unused code reachable.
            </p>

            <p>
                The mistake is treating the alert as the whole security story. "This component version has a CVE" is not
                the same claim as "this application has an executable path to the vulnerable code." Both claims matter. They
                answer different questions.
            </p>

            <h2>The Evidence Ladder</h2>
            <p>
                A cleaner way to triage dependency risk is to ask which level of evidence we actually have.
            </p>

            <ul>
                <li>The dependency is declared in the project.</li>
                <li>The vulnerable component is resolved into the build.</li>
                <li>The vulnerable component is present in the deployed artifact.</li>
                <li>The affected class, method, function or resource is present.</li>
                <li>Application code has a call path to that affected code.</li>
                <li>Attacker-controlled input reaches that call path.</li>
                <li>The exploit preconditions hold in the deployed environment.</li>
            </ul>

            <p>
                These are related claims but they are not interchangeable. A dependency scanner is correct about the first
                two levels when a vulnerable component version is declared and resolved. A reachability finding establishes
                a call path without establishing exploitability. When artifact inspection or class-level SBOM metadata shows
                the affected code is missing, it establishes absence from the shipped artifact without proving that every
                source dependency is safe.
            </p>

            <p>
                No single signal carries the whole decision. The goal is to collect specific evidence before deciding how
                urgent a finding is.
            </p>

            <h2>Where Traditional SCA Stops</h2>
            <p>
                Traditional SCA gives teams inventory, compliance visibility, early warning and upgrade pressure. It is
                good at saying, "this project includes a component version associated with known vulnerabilities."
            </p>

            <p>
                By itself, it does not answer deeper application questions. Is the vulnerable method called? Does a
                framework discover it? Does deserialization load it? Does runtime configuration activate it? Is the
                affected class even in the artifact that production runs?
            </p>

            <p>
                That is not a failure of SCA. It is the boundary of what component and version analysis is designed to
                prove.
            </p>

            <h2>Reachability Is A Different Signal</h2>
            <p>
                Reachability-aware tools move the conversation from component presence to code use. They ask whether
                application code has a path to the vulnerable function, method or code element.
            </p>

            <p>
                The details vary by tool and ecosystem.
            </p>

            <ul>
                <li>
                    Snyk marks findings such as <code>REACHABLE</code>, <code>NO PATH FOUND</code> and{" "}
                    <code>NOT APPLICABLE</code>. Its own documentation is careful about the important caveat: no path
                    found is not proof that no path exists.
                </li>
                <li>
                    Endor Labs, Mend and Veracode expose call paths or traces from application code to vulnerable methods
                    or reachable components where their ecosystem and package-manager support applies.
                </li>
                <li>
                    Semgrep Supply Chain describes this as codebase-aware reachability. It combines dependency analysis
                    with first-party code analysis so teams prioritize reachable findings.
                </li>
            </ul>

            <p>
                That is a more specific starting point. A finding with a concrete call path deserves different attention
                from a component-level alert with no known path from the application.
            </p>

            <p>
                Still, reachability is not exploitability. Static analysis has to make tradeoffs. Reflection, generated
                code, dynamic loading, native calls, framework callbacks, broad configuration and incomplete advisory
                metadata change the answer. In the other direction, a reachable method is not automatically
                attacker-controllable.
            </p>

            <h2>Closed World Design Asks A Different Question</h2>
            <p>
                Reachability-aware SCA asks whether application code has a path to vulnerable code.
            </p>

            <p>
                That question matters after the affected code is present. A closed world build asks the artifact question:
                did the vulnerable code survive into the deployed artifact?
            </p>

            <p>
                GraalVM Native Image is the clearest example for JVM applications. It builds under a closed world assumption. The{" "}
                <code>native-image</code> tool performs static analysis to determine which classes, methods and fields are
                reachable when the application runs. It then compiles the reachable application elements and required
                resources into a native executable.
            </p>

            <p>
                This changes the shape of the security question. A dependency available during development or on the build
                classpath does not prove that an affected method from that dependency exists in the binary that production
                runs. In that case the team has artifact-level evidence instead of only "we do not think we call it."
            </p>

            <p>
                Presence in a Native Image executable is already reachability in the builder's static-analysis sense. The
                Native Image docs define reachable code as classes, methods and fields used by the application and state
                that only reachable elements are included in the final image. That is a build-time reachability claim, not
                an exploitability claim.
            </p>

            <h2>What The Evidence Looks Like</h2>
            <p>
                The evidence is concrete. Native Image produces analysis-level data when requested. Oracle GraalVM Native
                Image embeds SBOM data in the executable when SBOM support is enabled.
            </p>

            <pre>
                <code>{`native-image --enable-sbom=embed,class-level,export -jar app.jar app
$JAVA_HOME/bin/native-image-utils extract-sbom --image-path=app | grype

native-image -H:+PrintAnalysisCallTree -H:PrintAnalysisCallTreeType=CSV -jar app.jar app
native-image -H:AbortOnTypeReachable=java.io.File -jar app.jar app`}</code>
            </pre>

            <p>
                With the class-level option, the SBOM includes modules, classes, constructors, fields and methods that are
                part of the native executable. The feature is documented for Oracle GraalVM. That matters when an advisory
                identifies affected classes or methods. A scanner or review script that consumes this metadata checks
                whether the affected code element exists in the native executable metadata.
            </p>

            <p>
                Current GraalVM documentation uses <code>$JAVA_HOME/bin/native-image-utils extract-sbom</code> for embedded
                SBOM extraction. On a GraalVM installation where that binary is absent and{" "}
                <code>$JAVA_HOME/bin/native-image-inspect</code> is present, the extraction command is{" "}
                <code>$JAVA_HOME/bin/native-image-inspect --sbom app | grype</code>. The current docs mark the inspect tool
                as deprecated and direct users to class-level SBOMs for class, field and method metadata.
            </p>

            <p>
                There is also a tooling boundary here. Class-level metadata supports this claim only when the advisory
                names affected classes or methods and the tool reading the SBOM preserves that metadata. The GraalVM docs
                note that Syft does not preserve the nested class-level metadata when it extracts an SBOM.
            </p>

            <p>
                The points-to reports answer another question: why is this code reachable? The analysis call tree shows
                the static view of calls discovered by Native Image. Reachability report options stop the build and dump a
                trace when a matching type, method or field is reachable. The <code>java.io.File</code> line above is the
                documented type-reachability example. In a CVE review, replace that pattern with the affected type, method
                or field named by the advisory.
            </p>

            <p>
                That gives security review a specific workflow.
            </p>

            <ul>
                <li>SCA says which dependency version is associated with a CVE.</li>
                <li>The advisory says which class, method, function or resource is affected.</li>
                <li>Class-level artifact metadata says whether the affected code is present in the shipped executable.</li>
                <li>Native Image reachability reports show why a present type, method or field was included.</li>
                <li>Reachability analysis says whether static analysis found a path from application code to affected code.</li>
                <li>Exploitability review says whether that path reaches attacker-controlled input under the CVE preconditions.</li>
            </ul>

            <p>
                Those signals will not always agree. That is exactly why the distinction matters.
            </p>

            <h2>Presence Is Not Exploitability</h2>
            <p>
                If the affected method is absent from the executable metadata, the strongest claim is simple: the shipped
                artifact does not contain that affected code. If the affected method is present, the review changes. The
                question is no longer "did we ship it?" The question becomes "does a production path expose it under the
                conditions required by the CVE?"
            </p>

            <p>
                That is where the final evidence lives: which entry point reaches the method, whether attacker-controlled
                input reaches that entry point and whether the exploit preconditions hold in the deployed configuration.
            </p>

            <p>
                The VEX labels line up with those distinctions. Absent affected code maps to{" "}
                <code>vulnerable_code_not_present</code>. Present code with evidence that the product does not call or use
                it maps to <code>vulnerable_code_not_in_execute_path</code>. Present code with evidence that an attacker
                does not control the required input maps to <code>vulnerable_code_cannot_be_controlled_by_adversary</code>.
            </p>

            <h2>VEX Needs Precise Claims</h2>
            <p>
                Closed world artifacts also fit naturally with VEX, the Vulnerability Exploitability eXchange format. VEX
                lets a software producer say whether a product is affected, fixed, under investigation or not affected by a
                vulnerability.
            </p>

            <p>
                For <code>not_affected</code> statements, OpenVEX defines machine-readable justifications. These
                justifications map neatly to the evidence ladder.
            </p>

            <ul>
                <li>
                    <code>component_not_present</code>: the component is not included in the product.
                </li>
                <li>
                    <code>vulnerable_code_not_present</code>: the component is included but the vulnerable code is not
                    present.
                </li>
                <li>
                    <code>vulnerable_code_not_in_execute_path</code>: the vulnerable code is present but the product does
                    not call or use it.
                </li>
                <li>
                    <code>vulnerable_code_cannot_be_controlled_by_adversary</code>: the vulnerable code exists but an
                    attacker cannot control it in the required way.
                </li>
            </ul>

            <p>
                Those are different statements. A closed world build maps most directly to the first two. Reachability
                analysis maps to the third. Threat modeling and application context are needed for the fourth.
            </p>

            <h2>From Alert Noise To Runtime Evidence</h2>
            <p>
                The progression is simple.
            </p>

            <ul>
                <li>Traditional SCA says: this dependency version is risky.</li>
                <li>Closed world artifact evidence says: this risky code path is absent from the artifact we shipped.</li>
                <li>When the code is present, exploitability evidence says whether production input reaches it under the CVE preconditions.</li>
            </ul>

            <p>
                That progression does not make security automatic. It makes the evidence specific. Specific evidence helps
                teams spend their time on vulnerabilities with a production path.
            </p>

            <p>
                Railix is being built in that direction. The goal is to move most application shape out of runtime
                discovery into a model the build reasons about. Railix plans to support third party steps in the future.
                Those steps can bring in third party code with vulnerabilities, while artifact evidence tells whether 
                affected code from a CVE is present in the shipped binary. If that code is present, exploitability still
                needs a closer review of the production path, attacker-controlled input and the CVE preconditions.
            </p>

            <p>
                <a
                    href="https://railix.mitbauen.space/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-nanoLinkBlue underline underline-offset-4 hover:text-blue-700"
                >
                    Learn more about Railix.
                </a>
            </p>

            <h2>Further Reading</h2>
            <ul>
                <li>
                    <a
                        href="https://owasp.org/projects/dependency-check"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-nanoLinkBlue hover:text-blue-700"
                    >
                        OWASP Dependency-Check
                    </a>{" "}
                    on component-level software composition analysis.
                </li>
                <li>
                    <a
                        href="https://github.com/snyk/user-docs/blob/main/scan-fix-and-prevent/manage-risk/prioritize-issues-for-fixing/reachability-analysis.md"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-nanoLinkBlue hover:text-blue-700"
                    >
                        Snyk reachability analysis
                    </a>{" "}
                    on reachable, no-path-found and not-applicable vulnerability states.
                </li>
                <li>
                    <a
                        href="https://docs.endorlabs.com/scan/sca/call-graphs"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-nanoLinkBlue hover:text-blue-700"
                    >
                        Endor Labs call graphs
                    </a>{" "}
                    on call paths from application code to vulnerable methods.
                </li>
                <li>
                    <a
                        href="https://docs.veracode.com/r/Finding_and_Fixing_Vulnerabilities"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-nanoLinkBlue hover:text-blue-700"
                    >
                        Veracode vulnerable methods
                    </a>{" "}
                    on filtering findings where the vulnerable method is in use.
                </li>
                <li>
                    <a
                        href="https://docs.mend.io/platform/latest/view-your-sca-reachability-results"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-nanoLinkBlue hover:text-blue-700"
                    >
                        Mend reachability results
                    </a>{" "}
                    on reachable, potentially reachable and unreachable findings.
                </li>
                <li>
                    <a
                        href="https://semgrep.dev/products/semgrep-supply-chain/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-nanoLinkBlue hover:text-blue-700"
                    >
                        Semgrep Supply Chain
                    </a>{" "}
                    on codebase-aware reachability analysis.
                </li>
                <li>
                    <a
                        href="https://www.graalvm.org/latest/reference-manual/native-image/basics/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-nanoLinkBlue hover:text-blue-700"
                    >
                        GraalVM Native Image basics
                    </a>{" "}
                    on static analysis and the closed world assumption.
                </li>
                <li>
                    <a
                        href="https://www.graalvm.org/latest/security-guide/native-image/sbom/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-nanoLinkBlue hover:text-blue-700"
                    >
                        GraalVM Native Image SBOM support
                    </a>{" "}
                    on class-level metadata and vulnerability scanning.
                </li>
                <li>
                    <a
                        href="https://www.graalvm.org/latest/reference-manual/native-image/debugging-and-diagnostics/StaticAnalysisReports/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-nanoLinkBlue hover:text-blue-700"
                    >
                        GraalVM points-to analysis reports
                    </a>{" "}
                    on reachability traces for included code.
                </li>
                <li>
                    <a
                        href="https://github.com/openvex/spec/blob/main/OPENVEX-SPEC.md"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-nanoLinkBlue hover:text-blue-700"
                    >
                        OpenVEX
                    </a>{" "}
                    on machine-readable not-affected justifications.
                </li>
            </ul>
        </>
    ),
};

export default post;
