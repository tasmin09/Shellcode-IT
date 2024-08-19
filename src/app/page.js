import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/Contact";
import AboutStats from "@/components/AboutStats";
import Testimonial from "@/components/Testimonial";
import BlogSlide from "@/components/BlogSlide";
import ProjectSection from "@/components/OurProjects";
import ServiceScroll from "@/components/ServiceScroll";
import Image from "next/image";
import LogoImage from "@/assets/img/logo.svg";
import MinimalCode from "@/assets/img/minimal-element.svg";
import AboutImage from "@/assets/img/about-us-img.png";
import Service1 from "@/assets/img/service-1.png";
import Service2 from "@/assets/img/service-2.png";
import Service3 from "@/assets/img/service-3.png";
import Arr1 from "@/assets/img/arr-l.png";
import Arr2 from "@/assets/img/arr-2.png";

import union from "@/assets/img/Union.png";

import NextLogo from "@/assets/img/react.png";
import AndroidLogo from "@/assets/img/android.png";
import ReactLogo from "@/assets/img/react.png";
import TaiLogo from "@/assets/img/tai.png";
import LaraLogo from "@/assets/img/lara.png";
import CodeLogo from "@/assets/img/code.png";
import NodeLogo from "@/assets/img/node.png";
import MongoLogo from "@/assets/img/mong.png";

import Star from "@/assets/img/star.svg";
import Element1 from "@/assets/img/element-1.png";
import Element2 from "@/assets/img/element-2.png";

import EllipseBig from "@/assets/img/ellipse-big.png";
import ElementBlog from "@/assets/img/element-blog.png";
import about from "@/assets/img/about.png";
import web from "@/assets/img/web.svg";
import app from "@/assets/img/app-development.svg";
import product from "@/assets/img/product-design.svg";
import Link from "next/link";
import ShellcodeLogo from "@/assets/img/Shellcode-Logo-Circular.png";
const HomePage = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="relative bg-[#0D0D0D] top-bg">
          {/* <!-- Hero section --> */}
          <div className="relative isolate overflow-hidden pb-0 pt-24 space-y-32">
            <section>
              <Image
                src={Element1}
                alt="background"
                className="absolute inset-0 -z-10 lg:top-[14%] lg:left-[10%] top-[4%] left-[-6%] lg:w-auto w-[60px]"
              ></Image>
              <Image
                src={Element2}
                alt="background"
                className="absolute inset-0 -z-10 lg:top-[35%] lg:left-[10%] top-[20%] left-[-5%] lg:w-auto w-[60px]"
              ></Image>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto pt-16 lg:pt-32">
                  <div className="mb-8 flex justify-center">
                    <div className="relative w-[90px] h-[90px]">
                      <Image
                        className="w-full h-full"
                        src={ShellcodeLogo}
                        alt="Shell-Code"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white md:text-7xl font-clash-semibold uppercase clip-text">
                      We Turn Your Business <br />
                      Into Digital Maverick{" "}
                    </h1>
                    <p className="mt-6 text-base lg:text-lg leading-6 lg:leading-8 text-white/60 font-ibm-regular mx-auto max-w-2xl">
                      Shellcode solutions is a supreme app development company,
                      nailing growth adventures.{" "}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                      <div className="lg:flex gap-x-8 space-y-3 lg:space-y-0">
                        <a
                          href=""
                          className="text-white font-ibm-regular text-base lg:text-lg flex gap-x-2 items-center"
                        >
                          <Image
                            src={web}
                            alt="Website development"
                            className="size-5"
                          ></Image>
                          <span>Website development</span>
                        </a>
                        <a
                          href=""
                          className="text-white font-ibm-regular text-base lg:text-lg flex gap-x-2 items-center"
                        >
                          <Image
                            src={app}
                            alt="App development"
                            className="size-5"
                          ></Image>
                          <span>App development</span>
                        </a>
                        <a
                          href=""
                          className="text-white font-ibm-regular text-base lg:text-lg flex gap-x-2 items-center"
                        >
                          <Image
                            src={product}
                            alt="Product Design"
                            className="size-5"
                          ></Image>
                          <span>Product Design</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-x-0 top-[calc(100%-13rem)] z-10 overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                  aria-hidden="true"
                >
                  <Image src={MinimalCode} alt="code box"></Image>
                </div>
              </div>
            </section>
            <section className="overflow-hidden">
              <div className="relative marq-wrap marq-wrap-ribbon mt-12 lg:mt-36">
                <div className="bg-white  border border-black py-2 sm:py-5 px-5 marquee relative overflow-hidden marq-1">
                  <div className="marquee__group">
                    <ul className="flex gap-x-5 lg:gap-x-14 text-black font-clash-bold text-2xl lg:text-5xl justify-center marq">
                      <li>Web Development</li>
                      <li>
                        <Image
                          src={Star}
                          alt="star"
                          className="size-8 lg:size-12 "
                        ></Image>
                      </li>
                      <li>App Development</li>
                      <li>
                        <Image
                          src={Star}
                          alt="star"
                          className="size-8 lg:size-12 "
                        ></Image>
                      </li>
                      <li>SEO</li>
                      <li>
                        <Image
                          src={Star}
                          alt="star"
                          className="size-8 lg:size-12 "
                        ></Image>
                      </li>
                    </ul>
                  </div>
                  <div aria-hidden="true" className="marquee__group">
                    <ul className="flex gap-x-5 lg:gap-x-14 text-black font-clash-bold text-2xl lg:text-5xl justify-center marq">
                      <li>Web Development</li>
                      <li>
                        <Image
                          src={Star}
                          alt="star"
                          className="size-8 lg:size-12"
                        ></Image>
                      </li>
                      <li>App Development</li>
                      <li>
                        <Image
                          src={Star}
                          alt="star"
                          className="size-8 lg:size-12"
                        ></Image>
                      </li>
                      <li>SEO</li>
                      <li>
                        <Image
                          src={Star}
                          alt="star"
                          className="size-8 lg:size-12"
                        ></Image>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white border border-black py-2 sm:py-5 px-5 marq-2 marquee marquee--reverse relative overflow-hidden">
                  <div className="marquee__group">
                    <ul className="flex gap-x-5 text-black font-clash-bold text-2xl lg:text-5xl justify-center marq">
                      <li>Web Development</li>
                      <li>
                        <Image
                          src={Star}
                          alt="star"
                          className="size-8 lg:size-12"
                        ></Image>
                      </li>
                      <li>App Development</li>
                      <li>
                        <Image
                          src={Star}
                          alt="star"
                          className="size-8 lg:size-12"
                        ></Image>
                      </li>
                      <li>SEO</li>
                      <li>
                        <Image
                          src={Star}
                          alt="star"
                          className="size-8 lg:size-12"
                        ></Image>
                      </li>
                    </ul>
                  </div>
                  <div aria-hidden="true" className="marquee__group">
                    <ul className="flex gap-x-5 lg:gap-x-14 text-black font-clash-bold text-2xl lg:text-5xl justify-center marq">
                      <li>Web Development</li>
                      <li>
                        <Image
                          src={Star}
                          alt="star"
                          className="size-8 lg:size-12"
                        ></Image>
                      </li>
                      <li>App Development</li>
                      <li>
                        <Image
                          src={Star}
                          alt="star"
                          className="size-8 lg:size-12"
                        ></Image>
                      </li>
                      <li>SEO</li>
                      <li>
                        <Image
                          src={Star}
                          alt="star"
                          className="size-8 lg:size-12"
                        ></Image>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- About section --> */}
              <section className="py-16 relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
                  <div className="lg:grid lg:grid-cols-12 lg:gap-8 mb-6">
                    <div className="lg:col-span-7 pb-5 lg:pb-20">
                      <Link
                        href="/about"
                        className="h2 font-clash-bold text-white/60 text-[38px] lg:text-4xl xl:text-7xl section-title relative pr-3 lg:pr-52 lg:w-auto inline-block w-full uppercase"
                      >
                        Know us
                      </Link>
                    </div>
                    <div className="mt-2 lg:mb-0 mb-6 lg:col-span-5 lg:mt-0">
                      <p className="text-white/60">
                        We are the leading <b>Software Development Experts</b>{" "}
                        in Pune as Shellcode Solutions, serving creative and
                        result-oriented business solutions across India, that
                        can help you crunch success numbers without a second
                        thought! So, sail through the journey of discovery and
                        innovation, as we weave it.
                      </p>
                    </div>
                  </div>
                  <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="mt-0 lg:col-span-6 lg:mt-0 mb-3 lg:mb-0">
                      <Image
                        src={AboutImage}
                        alt="About image"
                        className="rounded-[34px] lg:rounded-[48px]"
                      ></Image>
                    </div>
                    <div className="mt-0 lg:col-span-6 lg:mt-0">
                      <AboutStats />
                    </div>
                  </div>
                </div>
                <Image
                  src={about}
                  alt="about"
                  className="absolute right-0 -bottom-72 w-[50%]"
                ></Image>
              </section>
            </section>
          </div>
        </div>
        {/* <!-- Service section --> */}
        <section className="bg-gray-950 py-16 service-bg">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex justify-end pb-20">
              <Link
                href="/services"
                className="h2 font-clash-bold text-white/60 text-[38px] lg:text-4xl xl:text-8xl section-title relative pr-3 lg:pr-56 lg:w-auto inline-block w-full uppercase"
              >
                Our <br className="inline-block lg:hidden" /> Service
              </Link>
            </div>
            <div className="service-gallery md:flex gap-x-4 space-y-3">
              <div className="relative rounded-[30px] border-2 border-transparent hover:border-white overflow-hidden service-div">
                <Image src={Service1} alt="service 1" />
                <p className="absolute text-white p-4 font-clash-regular text-xs lg:text-lg">
                  We at Shellcode Solutions, a{" "}
                  <strong>Software Development agency in Pune</strong> have the
                  swag of experts when it comes to crafting the first look of
                  your digital business - website.{" "}
                </p>
              </div>
              <div className="relative rounded-[30px] border-2 border-transparent hover:border-white overflow-hidden service-div service-div-center">
                {/* <Image src={Service2} alt="service 2" /> */}
                <Image
                  src={Arr1}
                  alt="arrw"
                  className="absolute left-0 arrow-scroll arrow-1"
                />
                <Image
                  src={Arr2}
                  alt="arrw"
                  className="absolute right-0 arrow-scroll arrow-2"
                />
                <ServiceScroll />
              </div>
              <div className="relative rounded-[30px] border-2 border-transparent hover:border-white overflow-hidden service-div">
                <Image src={Service3} alt="service 3" />
              </div>
            </div>
            <p className="text-white/60 pt-10 font-clash-regular text-base lg:text-lg max-w-[750px]">
              By attaching the strings of user-friendly elements, we provide
              services that will make you sit back and switch to different
              channels depicting various streamlined business functions, without
              any doubt!
            </p>
          </div>
        </section>
        {/* <!-- Project section --> */}
        
        <ProjectSection />
        {/* technological stack */}
        <section className="bg-black py-16 relative">
          <Image
            src={union}
            alt="union bg"
            className="absolute bottom-0 left-0 w-full lg:max-w-[460px] max-w-[160px]"
          ></Image>
          <div className="stack-wrap overflow-hidden relative">
            <div className="mx-auto max-w-5xl px-6 lg:px-8 relative lg:space-y-10 space-y-2 marquee__projects__wrap">
              <div className="marquee">
                <div className="marquee__group">
                  <div className="logo-main">
                    <Image src={NextLogo} alt="next" />
                  </div>
                  <div className="logo-main">
                    <Image src={AndroidLogo} alt="android" />
                  </div>
                  <div className="logo-main">
                    <Image src={ReactLogo} alt="react" />
                  </div>
                  <div className="logo-main">
                    <Image src={TaiLogo} alt="tai" />
                  </div>
                  <div className="logo-main">
                    <Image src={LaraLogo} alt="laraval" />
                  </div>
                  <div className="logo-main">
                    <Image src={CodeLogo} alt="cpde" />
                  </div>
                  <div className="logo-main">
                    <Image src={NodeLogo} alt="node" />
                  </div>
                  <div className="logo-main">
                    <Image src={MongoLogo} alt="mongo" />
                  </div>
                </div>
                <div aria-hidden="true" className="marquee__group">
                  <div className="logo-main">
                    <Image src={NextLogo} alt="next" />
                  </div>
                  <div className="logo-main">
                    <Image src={AndroidLogo} alt="android" />
                  </div>
                  <div className="logo-main">
                    <Image src={ReactLogo} alt="react" />
                  </div>
                  <div className="logo-main">
                    <Image src={TaiLogo} alt="tai" />
                  </div>
                  <div className="logo-main">
                    <Image src={LaraLogo} alt="laraval" />
                  </div>
                  <div className="logo-main">
                    <Image src={CodeLogo} alt="cpde" />
                  </div>
                  <div className="logo-main">
                    <Image src={NodeLogo} alt="node" />
                  </div>
                  <div className="logo-main">
                    <Image src={MongoLogo} alt="mongo" />
                  </div>
                </div>
              </div>
              <div className="marquee marquee--reverse">
                <div className="marquee__group">
                  <div className="logo-main">
                    <Image src={NextLogo} alt="next" />
                  </div>
                  <div className="logo-main">
                    <Image src={AndroidLogo} alt="android" />
                  </div>
                  <div className="logo-main">
                    <Image src={ReactLogo} alt="react" />
                  </div>
                  <div className="logo-main">
                    <Image src={TaiLogo} alt="tai" />
                  </div>
                  <div className="logo-main">
                    <Image src={LaraLogo} alt="laraval" />
                  </div>
                  <div className="logo-main">
                    <Image src={CodeLogo} alt="cpde" />
                  </div>
                  <div className="logo-main">
                    <Image src={NodeLogo} alt="node" />
                  </div>
                  <div className="logo-main">
                    <Image src={MongoLogo} alt="mongo" />
                  </div>
                </div>
                <div aria-hidden="true" className="marquee__group">
                  <div className="logo-main">
                    <Image src={NextLogo} alt="next" />
                  </div>
                  <div className="logo-main">
                    <Image src={AndroidLogo} alt="android" />
                  </div>
                  <div className="logo-main">
                    <Image src={ReactLogo} alt="react" />
                  </div>
                  <div className="logo-main">
                    <Image src={TaiLogo} alt="tai" />
                  </div>
                  <div className="logo-main">
                    <Image src={LaraLogo} alt="laraval" />
                  </div>
                  <div className="logo-main">
                    <Image src={CodeLogo} alt="cpde" />
                  </div>
                  <div className="logo-main">
                    <Image src={NodeLogo} alt="node" />
                  </div>
                  <div className="logo-main">
                    <Image src={MongoLogo} alt="mongo" />
                  </div>
                </div>
              </div>
              <div className="marquee">
                <div className="marquee__group">
                  <div className="logo-main">
                    <Image src={NextLogo} alt="next" />
                  </div>
                  <div className="logo-main">
                    <Image src={AndroidLogo} alt="android" />
                  </div>
                  <div className="logo-main">
                    <Image src={ReactLogo} alt="react" />
                  </div>
                  <div className="logo-main">
                    <Image src={TaiLogo} alt="tai" />
                  </div>
                  <div className="logo-main">
                    <Image src={LaraLogo} alt="laraval" />
                  </div>
                  <div className="logo-main">
                    <Image src={CodeLogo} alt="cpde" />
                  </div>
                  <div className="logo-main">
                    <Image src={NodeLogo} alt="node" />
                  </div>
                  <div className="logo-main">
                    <Image src={MongoLogo} alt="mongo" />
                  </div>
                </div>
                <div aria-hidden="true" className="marquee__group">
                  <div className="logo-main">
                    <Image src={NextLogo} alt="next" />
                  </div>
                  <div className="logo-main">
                    <Image src={AndroidLogo} alt="android" />
                  </div>
                  <div className="logo-main">
                    <Image src={ReactLogo} alt="react" />
                  </div>
                  <div className="logo-main">
                    <Image src={TaiLogo} alt="tai" />
                  </div>
                  <div className="logo-main">
                    <Image src={LaraLogo} alt="laraval" />
                  </div>
                  <div className="logo-main">
                    <Image src={CodeLogo} alt="cpde" />
                  </div>
                  <div className="logo-main">
                    <Image src={NodeLogo} alt="node" />
                  </div>
                  <div className="logo-main">
                    <Image src={MongoLogo} alt="mongo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-4xl px-6 lg:px-8 relative text-center pt-10 lg:pt-20">
            <button className="text-[#EA1C1C] border border-[#EA1C1C] border-solid font-sf text-base lg:text-2xl bg-white rounded-full py-2 px-4 lg:px-6 lg:py-3 inline-flex items-center gap-x-2 custom-shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Our Tech Stake Looks Like this </span>
            </button>
            <h2 className="h2 font-sf-medium leading:1 lg:leading-[3.5rem] xl:leading-[4.5rem] text-2xl xl:text-5xl clip-text-title pt-10 lg:pt-20 ">
              Our Tech Stack looks like this{" "}
            </h2>
          </div>
        </section>
        {/* Testimonials */}
        <section className="bg-gray-950 pt-16 pb-10 lg:pb-0 testimonial-bg">
          <div className="mx-auto max-w-7xl px-0 lg:px-0 relative">
            <p className="subhead lead tracking-wider lg:tracking-[15px] uppercase text-[#E0E0E0] font-sf-medium text-base lg:text-xl text-center">
              Testimonials
            </p>
            <h2 className="text-xl lg:text-3xl xl:text-6xl font-clash-medium clip-text-title text-center pt-5 lg:pt-10">
              Here are the Companies that have trusted us, & What they&apos;ve
              got to say about us!
            </h2>
            <div className="py-10 lg:pt-32 pb-20 relative">
              <Testimonial />
            </div>
          </div>
        </section>
        {/* our blogs */}
        <section className="bg-gray-950 py-16 relative">
          <Image
            src={EllipseBig}
            alt="img ellipse"
            className="absolute right-0 top-0"
          ></Image>
          <Image
            src={ElementBlog}
            alt="Blog"
            className="absolute left-0 bottom-0 -z-0 w-full max-w-[550px]"
          ></Image>
          <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center mb-10">
              <div className="lg:col-span-7 pb-6 lg:pb-0">
                <Link
                  href="/blog"
                  className="h2 font-clash-bold text-white/60 text-[38px] lg:text-4xl xl:text-8xl section-title relative pr-3 lg:pr-56 lg:w-auto inline-block w-full uppercase"
                >
                  Insight-witty Blogs
                </Link>
              </div>
              <div className="b-10 lg:mb-0 lg:col-span-5 lg:mt-0">
                <p className="text-white/60">
                  Glance through our insightful and witty blogs that can help
                  you stay updated without a quirk, as these include real-time
                  knowledge that are relevant in today’s dynamic world.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl ps-4 lg:ps-8 relative z-10">
            <BlogSlide />
          </div>
        </section>
        {/* contact*/}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
