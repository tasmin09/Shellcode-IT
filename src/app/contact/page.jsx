import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Icon from "@/assets/img/icon-1.png";
import Icon2 from "@/assets/img/icon-2.png";

const ContactPage = () => {
  return (
    <div className="bg-contact">
      <Header />
      <div className="relative pb-24 pt-24 p-4 lg:px-8">
        {/* <!-- Hero section --> */}
        <div className="relative contact-wrap rounded-[30px] border border-gray-500/50">
          <div className="text-center p-4 lg:p-10">
            <p className="font-clash-semibold uppercase text-white lg:tracking-widest text-2xl lg:text-2xl mb-4 lg:mb-10">
              contact us
            </p>
            <p className="text-white text-base lg:text-[54px] font-sf-medium leading-relaxed">
              <span className="inline-flex">
                Whether it&apos;s a Gupshup about your business,{" "}
              </span>{" "}
              <br className="hidden lg:inline-block" />
              <span className="fraunces-italic border-b border-white inline-flex">
                or simply curious to know{" "}
              </span>{" "}
              <Image
                src={Icon}
                alt="target"
                className="inline-flex me-3 lg:w-auto w-[30px]"
              ></Image>
              <span className="inline-flex">how we ace </span>{" "}
              <br className="hidden lg:inline-block" />{" "}
              <span className="inline-flex">digital game</span>
              <Image
                src={Icon2}
                alt="target"
                className="inline-flex ms-3 lg:w-auto w-[30px]"
              ></Image>
            </p>
          </div>
          <div className="flex items-center py-3 lg:py-10">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <form className="lg:p-10 p-3">
            <div className="space-y-12">
              <div className="">
                <div className="grid grid-cols-1 gap-x-3 lg:gap-x-6 gap-y-3 lg:gap-y-8 sm:grid-cols-12">
                  <div className="sm:col-span-6">
                    <div className="grid grid-cols-1 gap-x-3 gap-y-3 lg:gap-x-6 lg:gap-y-8 sm:grid-cols-6">
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
                      <div className="sm:col-span-6">
                        <fieldset>
                          <legend className="block text-base font-sf leading-6 text-white">
                            Subjects
                          </legend>
                          <div className="mt-6 grid grid-cols-1 lg:gap-x-6 lg:gap-y-8 sm:grid-cols-12">
                            <div className="sm:col-span-4">
                              <div className="flex items-center gap-x-3 mb-3">
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
                              <div className="flex items-center gap-x-3 mb-3">
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
                              <div className="flex items-center gap-x-3 mb-3">
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
                              <div className="flex items-center gap-x-3 mb-3">
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
                              <div className="flex items-center gap-x-3 mb-3">
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
                              <div className="flex items-center gap-x-3 mb-3">
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
                  </div>
                  <div className="sm:col-span-6">
                    <div className="h-full">
                      <label
                        htmlFor="messages"
                        className="block text-base font-sf leading-6 text-white"
                      >
                        Messages
                      </label>
                      <div className="mt-2 h-[90%]">
                        <textarea
                          id="messages"
                          name="messages"
                          className="block w-full rounded-md border bg-[#1C1C1C] border-[#636D79] py-3 text-white shadow-sm ring-0 ring-inset focus:ring-0 sm:leading-6 h-full  px-3 text-base font-sf"
                          placeholder="Write your messages in here"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-x-3 lg:gap-x-6 gap-y-3 lg:gap-y-8 sm:grid-cols-12 mt-4">
                  <div className="sm:col-span-6"></div>
                  <div className="sm:col-span-6 float-end">
                    <button
                      type="submit"
                      className="rounded-md bg-[#5B0000] px-10 py-3 text-sm font-sm-medium text-white shadow-sm hover:bg-[#850000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#850000] w-full"
                    >
                      Send Messages
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ContactPage;
