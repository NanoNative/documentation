import Image from "next/image";
import yunaImg from "@/public/images/yuna.jpeg";
import kazimImg from "@/public/images/kazim.jpeg";
import abhiroopImg from "@/public/images/abhiroop-profile.webp";
import Link from "next/link";
import { externalLinks } from "@/constants/links";

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
                                  href={externalLinks.xYuna}
                                  target="_blank" rel="noopener noreferrer"
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
                                  href={externalLinks.linkedinYuna}
                                  target="_blank" rel="noopener noreferrer"
                                  aria-label="LinkedIn"
                              >
                                  <svg
                                      className="h-6 w-4 fill-current"
                                      viewBox="0 0 24 8"
                                      xmlns="http://www.w3.org/2000/svg"
                                  >
                                      <path
                                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                  </svg>
                              </Link>
                          </li>
                          <li>
                              <Link
                                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                                  href={externalLinks.githubYuna} target="_blank"
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
                        <ul className="flex gap-1">
                            <li>
                                <Link
                                    className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                                    href={externalLinks.xKazim}
                                    target="_blank" rel="noopener noreferrer"
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
                                    href={externalLinks.linkedinKazim}
                                    target="_blank" rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <svg
                                        className="h-6 w-4 fill-current"
                                        viewBox="0 0 24 8"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                                    href={externalLinks.githubKazim} target="_blank"
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
                            src={abhiroopImg}
                            width={48}
                            height={48}
                            alt="Abhiroop Basu"
                        />
                        <span className="text-black">Abhiroop Basu</span>
                    </h3>
                    <div className="text-sm font-medium text-gray-500">
                        <span className="text-gray-700">Systems Engineer</span>{" "}
                        <ul className="flex gap-1">
                            <li>
                                <Link
                                    className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                                    href={externalLinks.websiteAbhiroop}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Website"
                                >
                                    <svg
                                        className="h-8 w-8 fill-current"
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M21.6 18.2v4.2c0 1.8-1.4 3.2-3.2 3.2h-8.8c-1.8 0-3.2-1.4-3.2-3.2v-8.8c0-1.8 1.4-3.2 3.2-3.2h4.2v2h-4.2c-.7 0-1.2.5-1.2 1.2v8.8c0 .7.5 1.2 1.2 1.2h8.8c.7 0 1.2-.5 1.2-1.2v-4.2h2Zm-5.8-11.8h9.8v9.8h-2v-6.4l-8.9 8.9-1.4-1.4 8.9-8.9h-6.4v-2Z"/>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                                    href={externalLinks.linkedinAbhiroop}
                                    target="_blank" rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <svg
                                        className="h-6 w-4 fill-current"
                                        viewBox="0 0 24 8"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                                    href={externalLinks.githubAbhiroop}
                                    target="_blank"
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
                <br/><br/><br/>
            </div>
          </div>
        </div>

      </section>
  );
}
