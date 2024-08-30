import Image from "next/image";
import NanoBanner from "@/public/images/NanoBanner.svg";


export default function NanoHome() {
  return (
    <section className="relative">
      {/*below component is for the background vertical bars of banner*/}
      {/*<PageIllustration />*/}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content : pb-12 pt-32 md:pb-20 md:pt-40*/}
        <div className="">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
            </div>
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit]">
                <Image
                    className="rounded-lg bg-gray-900"
                    src={NanoBanner}
                    width={1200}
                    height={500}
                    alt="Nano Banner"
                />
              </div>

            </div>
            <div className="mx-auto max-w-3xl">
              <p
                  className="mb-8 text-lg text-nanoBlack"
                  data-aos="zoom-y-out"
                  data-aos-delay={300}
              >
                <br/>
                Nano is a lightweight concept which makes it easier for developer to write microservices in functional,
                fluent, chaining, plain, modern java with a nano footprint. Nano is also designed to be fully compilable
                with GraalVM to create native executables. To enhance efficiency and performance, Nano utilizes
                non-blocking virtual threads from Project Loom.

              </p>
              <div
                  className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                      className="btn group mb-4 w-full bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto  bg-gradient-to-r from-nanoPink to-nanoBlue"
                      href="https://github.com/NanoNative/nano/blob/main/README.md"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <span className="relative inline-flex items-center text-nanoBlack">
                      Learn more{" "}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  nanonative.org
                </span>
              </div>
              <div className="font-mono text-500">
                <div className="text-nanoWhite">
                  Start your journey with
                </div>

                  <div className="text-7xl font-extrabold ...">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-nanoPink to-nanoBlue">
                    <a href="https://github.com/NanoNative/nano" target="_blank"
                       rel="noopener noreferrer">
                    <br/> &#123; Nano... &#125;
                      </a>
                  </span>
                  </div>

              <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
