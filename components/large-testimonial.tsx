import Image from "next/image";
import yunaImg from "@/public/images/yuna.jpeg";
import kazimImg from "@/public/images/kazim.jpeg";
import Link from "next/link";

export default function LargeTestimonial() {
  return (
      <section id="team-details">

        <div className="mx-auto max-w-6xl px-4 sm:px-6">

          <div className="md:py-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-black-200 md:text-4xl">
                Our Team
              </h2>
            </div>
            <br/><br/><br/>
            <div
                className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-2 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
              <article>
                <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                  <Image
                      className="rounded-full"
                      src={yunaImg}
                      width={48}
                      height={48}
                      alt="Large testimonial"
                  />
                  <span className="text-black">Yuna Braska</span>

                </h3>
                <div className="text-sm font-medium text-gray-500">
                  <span className="text-gray-700">Creator/Technical Lead</span>{" "}
                  <ul className="flex gap-1">
                    <li>
                      <Link
                          className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                          href="#0"
                          aria-label="Twitter"
                      >
                        <svg
                            className="h-8 w-8 fill-current"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                          className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                          href="#0"
                          aria-label="Medium"
                      >
                        <svg
                            className="h-8 w-8 fill-current"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                          className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                          href="https://github.com/NanoNative/nano" target="_blank"
                          rel="noreferrer"
                          aria-label="Github"
                      >
                        <svg
                            className="h-8 w-8 fill-current"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </article>
              <article>
                <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                  <Image
                      className="rounded-full"
                      src={kazimImg}
                      width={48}
                      height={48}
                      alt="Large testimonial"
                  />
                  <span className="text-black">Kazim Ali</span>
                </h3>
                <div className="text-sm font-medium text-gray-500">
                  <span className="text-gray-700">Software Developer</span>{" "}
                  <span className="text-gray-400">/</span>{" "}
                  <a className="text-blue-500" href="#0">
                    Title
                  </a>
                </div>
              </article>
              <br/><br/><br/>
            </div>
          </div>
        </div>

      </section>
  );
}
