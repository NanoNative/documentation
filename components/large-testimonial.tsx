import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";

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
                      src={TestimonialImg}
                      width={48}
                      height={48}
                      alt="Large testimonial"
                  />
                  <span className="text-black">Yuna Braska</span>

                </h3>
                <div className="text-sm font-medium text-gray-500">
                  <span className="text-gray-700">Nano Team Detail</span>{" "}
                  <span className="text-gray-400">/</span>{" "}
                  <a className="text-blue-500" href="#0">
                    Title
                  </a>
                </div>
              </article>
              <article>
                <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                  <Image
                      className="rounded-full"
                      src={TestimonialImg}
                      width={48}
                      height={48}
                      alt="Large testimonial"
                  />
                  <span className="text-black">K7</span>
                </h3>
                <div className="text-sm font-medium text-gray-500">
                  <span className="text-gray-700">Nano Team Detail</span>{" "}
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
