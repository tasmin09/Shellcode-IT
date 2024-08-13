import Image from "next/image";
import EllipseBig from "@/assets/img/ellipse-big.png";
import ContactBg from "@/assets/img/contact-bg.png";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div>
      <section className="bg-gray-950 py-16 relative">
        <Image
          src={EllipseBig}
          alt="img ellipse"
          className="absolute right-0 top-0 -z-0"
        ></Image>
        <Image
          src={ContactBg}
          alt="Blog"
          className="absolute left-0 bottom-0 -z-0 w-full max-w-[350px]"
        ></Image>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="font-sf text-white text-3xl lg:text-[89px] relative mb-4 lg:mb-8">
                <span className=" leading-[5.5rem] relative">
                  Let&apos;s Together Brim Brilliance{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-12 lg:absolute right-[-60px] bottom-[21px] lg:inline-block hidden"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.97 3.97a.75.75 0 0 1 1.06 0l13.72 13.72V8.25a.75.75 0 0 1 1.5 0V19.5a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1 0-1.5h9.44L3.97 5.03a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-white/50 mb-5">
                Come, let&apos;s spin ideas and unleash the collective spirit
                with secret weapons!
              </p>
              <div className="grid grid-cols-12 gap-4 mb-3">
                <label htmlFor="" className="text-white/50 me-5 col-span-4">
                  Phone Number:
                </label>
                <div className="text-white col-span-8">
                  <a href="tel:8010658943">+91 801 065 89 43</a> <br />
                  <a href="tel:8999357648">+91 899 935 76 48</a>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 mb-3">
                <label htmlFor="" className="text-white/50 me-5 col-span-4">
                  Email Address:{" "}
                </label>
                <div className="text-white col-span-8">
                  <p>biz@shellcode.com</p>
                </div>
              </div>
              <div className="grid grid-cols-12 mb-3">
                <label htmlFor="" className="text-white/50 me-5 col-span-4">
                  Office Address:{" "}
                </label>
                <div className="text-white col-span-8">
                  <p>
                    Suratwala Mark Plazzo, Office No 807 A, Eighth Floor,
                    Hinjawadi Village, Hinjawadi, Pune, Maharashtra 411057
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0 relative z-10">
              <form>
                <div className="space-y-6 lg:space-y-12">
                  <div className="">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 lg:gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-base font-sf leading-6 text-white"
                        >
                          First name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border bg-[#1C1C1C] border-[#636D79] py-1.5 text-white shadow-sm ring-0 ring-inset focus:ring-0 sm:leading-6 min-h-14 px-3 text-base font-sf"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-base font-sf leading-6 text-white"
                        >
                          Last name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border bg-[#1C1C1C] border-[#636D79] py-1.5 text-white shadow-sm ring-0 ring-inset focus:ring-0 sm:leading-6 min-h-14 px-3 text-base font-sf"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-6">
                        <label
                          htmlFor="email"
                          className="block text-base font-sf leading-6 text-white"
                        >
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border bg-[#1C1C1C] border-[#636D79] py-1.5 text-white shadow-sm ring-0 ring-inset focus:ring-0 sm:leading-6 min-h-14 px-3 text-base font-sf"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="mt-10 space-y-10">
                      <fieldset>
                        <legend className="block text-base font-sf leading-6 text-white">
                          Subjects
                        </legend>
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 lg:gap-y-8 sm:grid-cols-12">
                          <div className="sm:col-span-4">
                            <div className="flex items-center gap-x-3 lg:mb-3">
                              <input
                                id="push-illustration"
                                name="subjects"
                                type="radio"
                                className="h-5 w-5 border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                              />
                              <label
                                htmlFor="push-illustration"
                                className="block w-full rounded-md py-1.5 text-[#8C949D] shadow-sm  sm:leading-6 text-base font-sf"
                              >
                                Illustration
                              </label>
                            </div>
                            <div className="flex items-center gap-x-3 lg:mb-3">
                              <input
                                id="push-web-design"
                                name="subjects"
                                type="radio"
                                className="h-5 w-5 border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                              />
                              <label
                                htmlFor="push-web-design"
                                className="block w-full rounded-md py-1.5 text-[#8C949D] shadow-sm  sm:leading-6 text-base font-sf"
                              >
                                Web design
                              </label>
                            </div>
                          </div>
                          <div className="sm:col-span-4">
                            <div className="flex items-center gap-x-3 lg:mb-3">
                              <input
                                id="push-mobile-design"
                                name="subjects"
                                type="radio"
                                className="h-5 w-5 border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                              />
                              <label
                                htmlFor="push-mobile-design"
                                className="block w-full rounded-md py-1.5 text-[#8C949D] shadow-sm  sm:leading-6 text-base font-sf"
                              >
                                Mobile Design
                              </label>
                            </div>
                            <div className="flex items-center gap-x-3 lg:mb-3">
                              <input
                                id="push-development"
                                name="subjects"
                                type="radio"
                                className="h-5 w-5 border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                              />
                              <label
                                htmlFor="push-development"
                                className="block w-full rounded-md py-1.5 text-[#8C949D] shadow-sm  sm:leading-6 text-base font-sf"
                              >
                                Development
                              </label>
                            </div>
                          </div>
                          <div className="sm:col-span-4">
                            <div className="flex items-center gap-x-3 lg:mb-3">
                              <input
                                id="push-motion-graphic"
                                name="subjects"
                                type="radio"
                                className="h-5 w-5 border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                              />
                              <label
                                htmlFor="push-motion-graphic"
                                className="block w-full rounded-md py-1.5 text-[#8C949D] shadow-sm  sm:leading-6 text-base font-sf"
                              >
                                Motion Graphic
                              </label>
                            </div>
                            <div className="flex items-center gap-x-3 lg:mb-3">
                              <input
                                id="push-other"
                                name="subjects"
                                type="radio"
                                className="h-5 w-5 border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                              />
                              <label
                                htmlFor="push-other"
                                className="block w-full rounded-md py-1.5 text-[#8C949D] shadow-sm  sm:leading-6 text-base font-sf"
                              >
                                Other
                              </label>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="messages"
                        className="block text-base font-sf leading-6 text-white"
                      >
                        Messages
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="messages"
                          name="messages"
                          className="block w-full rounded-md border bg-[#1C1C1C] border-[#636D79] py-3 text-white shadow-sm ring-0 ring-inset focus:ring-0 sm:leading-6 min-h-[100px] px-3 text-base font-sf"
                          placeholder="Write your messages in here"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 lg:mt-10 flex items-center justify-end gap-x-6">
                  <button
                    type="submit"
                    className="rounded-md bg-[#5B0000] w-full lg:w-auto px-10 py-3 text-sm font-sm-medium text-white shadow-sm hover:bg-[#850000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#850000]"
                  >
                    Send Messages
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
