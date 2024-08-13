"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/assets/css/app.css"; // Import your CSS file
import Image from "next/image";
import ServiceImage from "@/assets/img/service-img.png";
import Link from "next/link";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServiceCarousel = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".wrapper section");
    let maxWidth = 0;

    const getMaxWidth = () => {
      maxWidth = 0;
      sections.forEach((section) => {
        maxWidth += section.offsetWidth;
      });
    };

    getMaxWidth();
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

    gsap.to(sections, {
      x: () => `-${maxWidth - window.innerWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: wrapperRef.current,
        pin: true,
        scrub: true,
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true,
      },
    });

    sections.forEach((sct, i) => {
      ScrollTrigger.create({
        trigger: sct,
        start: () =>
          "top top-=" +
          (sct.offsetLeft - window.innerWidth / 2) *
            (maxWidth / (maxWidth - window.innerWidth)),
        end: () =>
          "+=" + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
        toggleClass: { targets: sct, className: "active" },
      });
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(sections);
    };
  }, []);

  return (
    <div className="wrapper overflow-y-auto pb-32 lg:pb-0" ref={wrapperRef}>
      <section className="pt-5 lg:pt-12">
        <div className="pb-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <h3 className="font-clash-medium text-4xl leading-[3rem] lg:text-5xl text-white">
                  Mobile App Development
                </h3>
              </div>
              <div className="lg:col-span-4">
                <div className="justify-end flex">
                  <Link
                    href="/services/mobile-app-development"
                    className="hidden lg:inline-flex items-center gap-x-3 text-lg xl:text-2xl text-black font-clash-medium px-8 py-3 bg-white hover:bg-[#4b4242] hover:text-white border border-white border-solid rounded-[79px] "
                  >
                    <span>Know more</span>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-5">
              <div className="lg:col-span-12">
                <div className="relative overflow-hidden service-car">
                  <div className="service-div-wrap lg:absolute lg:top-[15%] lg:right-[-68px]">
                    <div className="service-desc lg:bg-white/90 py-6 lg:px-12 rounded-full lg:h-[525px] lg:w-[525px] flex items-center lg:justify-center lg:text-center ">
                      <p className="font-clash-medium text-2xl lg:text-black text-white/80">
                        We make mobile applications run faster than bugs. Our
                        team is in constant motion of turning your words into a
                        language, and language into an application that is
                        easily known by everyone, without any errors or any
                        glitch.
                      </p>
                    </div>
                  </div>
                  <Image
                    src={ServiceImage}
                    alt="Service Image"
                    className="rounded-lg lg:rounded-[50px]"
                  ></Image>
                </div>
                <Link
                  href="/services/web-development"
                  className="lg:hidden inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-black font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]"
                >
                  <span>Know more</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 lg:pt-12">
        <div className="pb-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <h3 className="font-clash-medium text-4xl leading-[3rem] lg:text-5xl text-white">
                  Web Development
                </h3>
              </div>
              <div className="lg:col-span-4">
                <div className="justify-end flex">
                  <Link
                    href="/services/web-development"
                    className="hidden lg:inline-flex items-center gap-x-3 text-lg xl:text-2xl text-black font-clash-medium px-8 py-3 bg-white hover:bg-[#4b4242] hover:text-white border border-white border-solid rounded-[79px] "
                  >
                    <span>Know more</span>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-5">
              <div className="lg:col-span-12">
                <div className="relative overflow-hidden service-car">
                  <div className="service-div-wrap lg:absolute lg:top-[15%] lg:right-[-68px]">
                    <div className="service-desc lg:bg-white/90 py-6 lg:px-12 rounded-full lg:h-[525px] lg:w-[525px] flex items-center lg:justify-center lg:text-center ">
                      <p className="font-clash-medium text-2xl lg:text-black text-white/80">
                        We mark the first impression of your digital business by
                        building a website that can make the visitors go
                        &apos;Oh my my! This is Amazing.&apos;, as our web
                        pacemaker has the ability.
                      </p>
                    </div>
                  </div>
                  <Image
                    src={ServiceImage}
                    alt="Service Image"
                    className="rounded-lg lg:rounded-[50px]"
                  ></Image>
                </div>
                <Link
                  href="/services/web-development"
                  className="lg:hidden inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-black font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]"
                >
                  <span>Know more</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 lg:pt-12">
        <div className="pb-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <h3 className="font-clash-medium text-4xl leading-[3rem] lg:text-5xl text-white">
                  UI/UX Design
                </h3>
              </div>
              <div className="lg:col-span-4">
                <div className="justify-end flex">
                  <Link
                    href="/services/ui-ux-design"
                    className="hidden lg:inline-flex items-center gap-x-3 text-lg xl:text-2xl text-black font-clash-medium px-8 py-3 bg-white hover:bg-[#4b4242] hover:text-white border border-white border-solid rounded-[79px] "
                  >
                    <span>Know more</span>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-5">
              <div className="lg:col-span-12">
                <div className="relative overflow-hidden service-car">
                  <div className="service-div-wrap lg:absolute lg:top-[15%] lg:right-[-68px]">
                    <div className="service-desc lg:bg-white/90 py-6 lg:px-12 rounded-full lg:h-[525px] lg:w-[525px] flex items-center lg:justify-center lg:text-center ">
                      <p className="font-clash-medium text-2xl lg:text-black text-white/80">
                        We provide{" "}
                        <strong>UI/UX Designing services in Pune</strong>,
                        innovating designs that can act as a cherry to your web
                        designing structure. With our sword of creativity and
                        expert knowledge, we create poppy interactive CTA
                        buttons.
                      </p>
                    </div>
                  </div>
                  <Image
                    src={ServiceImage}
                    alt="Service Image"
                    className="rounded-lg lg:rounded-[50px]"
                  ></Image>
                </div>
                <Link
                  href="/services/web-development"
                  className="lg:hidden inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-black font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]"
                >
                  <span>Know more</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 lg:pt-12">
        <div className="pb-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <h3 className="font-clash-medium text-4xl leading-[3rem] lg:text-5xl text-white">
                  Social Media Marketing
                </h3>
              </div>
              <div className="lg:col-span-4">
                <div className="justify-end flex">
                  <Link
                    href="/services/social-media-marketing"
                    className="hidden lg:inline-flex items-center gap-x-3 text-lg xl:text-2xl text-black font-clash-medium px-8 py-3 bg-white hover:bg-[#4b4242] hover:text-white border border-white border-solid rounded-[79px] "
                  >
                    <span>Know more</span>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-5">
              <div className="lg:col-span-12">
                <div className="relative overflow-hidden service-car">
                  <div className="service-div-wrap lg:absolute lg:top-[15%] lg:right-[-68px]">
                    <div className="service-desc lg:bg-white/90 py-6 lg:px-12 rounded-full lg:h-[525px] lg:w-[525px] flex items-center lg:justify-center lg:text-center ">
                      <p className="font-clash-medium text-2xl lg:text-black text-white/80">
                        Our{" "}
                        <strong>
                          social media marketing services for small businesses
                        </strong>{" "}
                        is an ode to become socially desirable and upbeat the
                        competition.
                      </p>
                    </div>
                  </div>
                  <Image
                    src={ServiceImage}
                    alt="Service Image"
                    className="rounded-lg lg:rounded-[50px]"
                  ></Image>
                </div>
                <Link
                  href="/services/web-development"
                  className="lg:hidden inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-black font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]"
                >
                  <span>Know more</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 lg:pt-12">
        <div className="pb-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <h3 className="font-clash-medium text-4xl leading-[3rem] lg:text-5xl text-white">
                  Offline Software Management
                </h3>
              </div>
              <div className="lg:col-span-4">
                <div className="justify-end flex">
                  <Link
                    href="/services/offline-software-management"
                    className="hidden lg:inline-flex items-center gap-x-3 text-lg xl:text-2xl text-black font-clash-medium px-8 py-3 bg-white hover:bg-[#4b4242] hover:text-white border border-white border-solid rounded-[79px] "
                  >
                    <span>Know more</span>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-5">
              <div className="lg:col-span-12">
                <div className="relative overflow-hidden service-car">
                  <div className="service-div-wrap lg:absolute lg:top-[15%] lg:right-[-68px]">
                    <div className="service-desc lg:bg-white/90 py-6 lg:px-12 rounded-full lg:h-[525px] lg:w-[525px] flex items-center lg:justify-center lg:text-center ">
                      <p className="font-clash-medium text-2xl lg:text-black text-white/80">
                        From creating to debugging, our team has mastered all
                        the hats of software development in an unplugged space
                        that can help you to stay in loop without breaking the
                        consistency in work even in remote areas, where there is
                        no internet.
                      </p>
                    </div>
                  </div>
                  <Image
                    src={ServiceImage}
                    alt="Service Image"
                    className="rounded-lg lg:rounded-[50px]"
                  ></Image>
                </div>
                <Link
                  href="/services/web-development"
                  className="lg:hidden inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-black font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]"
                >
                  <span>Know more</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 lg:pt-12">
        <div className="pb-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <h3 className="font-clash-medium text-4xl leading-[3rem] lg:text-5xl text-white">
                  SEO <br className="lg:hidden inline-block" />
                </h3>
              </div>
              <div className="lg:col-span-4">
                <div className="justify-end flex">
                  <Link
                    href="/services/sco"
                    className="hidden lg:inline-flex items-center gap-x-3 text-lg xl:text-2xl text-black font-clash-medium px-8 py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]"
                  >
                    <span>Know more</span>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-5">
              <div className="lg:col-span-12">
                <div className="relative overflow-hidden service-car">
                  <div className="service-div-wrap lg:absolute lg:top-[15%] lg:right-[-68px]">
                    <div className="service-desc lg:bg-white/90 py-6 lg:px-12 rounded-full lg:h-[525px] lg:w-[525px] flex items-center lg:justify-center lg:text-center ">
                      <p className="font-clash-medium text-2xl lg:text-black text-white/80">
                        Our close-knit squad takes SEO on a different land where
                        your website is a king, as search queries would make
                        their way to you, with just a click.
                      </p>
                    </div>
                  </div>
                  <Image
                    src={ServiceImage}
                    alt="Service Image"
                    className="rounded-lg lg:rounded-[50px]"
                  ></Image>
                </div>
                <button className="lg:hidden inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-black font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]">
                  <span>Know more</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 lg:pt-12">
        <div className="pb-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <h3 className="font-clash-medium text-4xl leading-[3rem] lg:text-5xl text-white">
                  DevOps Consulting Service{" "}
                  <br className="lg:hidden inline-block" />
                </h3>
              </div>
              <div className="lg:col-span-4">
                <div className="justify-end flex">
                  <Link
                    href="/services/devops-consulting-service"
                    className="hidden lg:inline-flex items-center gap-x-3 text-lg xl:text-2xl text-black font-clash-medium px-8 py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]"
                  >
                    <span>Know more</span>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-5">
              <div className="lg:col-span-12">
                <div className="relative overflow-hidden service-car">
                  <div className="service-div-wrap lg:absolute lg:top-[15%] lg:right-[-68px]">
                    <div className="service-desc lg:bg-white/90 py-6 lg:px-12 rounded-full lg:h-[525px] lg:w-[525px] flex items-center lg:justify-center lg:text-center ">
                      <p className="font-clash-medium text-2xl lg:text-black text-white/80">
                        Our DevOps consulting services are here to work like a
                        duo-team of Sherlock Holmes and Dr. Waston, but with
                        less-fighting scenes and more code-writing roles, that
                        can make your competitors
                      </p>
                    </div>
                  </div>
                  <Image
                    src={ServiceImage}
                    alt="Service Image"
                    className="rounded-lg lg:rounded-[50px]"
                  ></Image>
                </div>
                <button className="lg:hidden inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-black font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]">
                  <span>Know more</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 lg:pt-12">
        <div className="pb-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <h3 className="font-clash-medium text-4xl leading-[3rem] lg:text-5xl text-white">
                  Cloud Services <br className="lg:hidden inline-block" />
                </h3>
              </div>
              <div className="lg:col-span-4">
                <div className="justify-end flex">
                  <Link
                    href="/services/cloud-services"
                    className="hidden lg:inline-flex items-center gap-x-3 text-lg xl:text-2xl text-black font-clash-medium px-8 py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]"
                  >
                    <span>Know more</span>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-5">
              <div className="lg:col-span-12">
                <div className="relative overflow-hidden service-car">
                  <div className="service-div-wrap lg:absolute lg:top-[15%] lg:right-[-68px]">
                    <div className="service-desc lg:bg-white/90 py-6 lg:px-12 rounded-full lg:h-[525px] lg:w-[525px] flex items-center lg:justify-center lg:text-center ">
                      <p className="font-clash-medium text-2xl lg:text-black text-white/80">
                        Imagine a buffet offering a variety of delicious
                        food-like storage, computing power and software, that
                        can make any business go hungry!
                      </p>
                    </div>
                  </div>
                  <Image
                    src={ServiceImage}
                    alt="Service Image"
                    className="rounded-lg lg:rounded-[50px]"
                  ></Image>
                </div>
                <button className="lg:hidden inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-black font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]">
                  <span>Know more</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 lg:pt-12">
        <div className="pb-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <h3 className="font-clash-medium text-4xl leading-[3rem] lg:text-5xl text-white">
                  Annual Maintenance Contract{" "}
                  <br className="lg:hidden inline-block" />
                </h3>
              </div>
              <div className="lg:col-span-4">
                <div className="justify-end flex">
                  <Link
                    href="/services/annual-maintenance-contract"
                    className="hidden lg:inline-flex items-center gap-x-3 text-lg xl:text-2xl text-black font-clash-medium px-8 py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]"
                  >
                    <span>Know more</span>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-5">
              <div className="lg:col-span-12">
                <div className="relative overflow-hidden service-car">
                  <div className="service-div-wrap lg:absolute lg:top-[15%] lg:right-[-68px]">
                    <div className="service-desc lg:bg-white/90 py-6 lg:px-12 rounded-full lg:h-[525px] lg:w-[525px] flex items-center lg:justify-center lg:text-center ">
                      <p className="font-clash-medium text-2xl lg:text-black text-white/80">
                        No matter how much tantrums like glitch, errors, network
                        issues your tech software shoot, we handle it all from
                        head to toe.
                      </p>
                    </div>
                  </div>
                  <Image
                    src={ServiceImage}
                    alt="Service Image"
                    className="rounded-lg lg:rounded-[50px]"
                  ></Image>
                </div>
                <button className="lg:hidden inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-black font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]">
                  <span>Know more</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 lg:pt-12">
        <div className="pb-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <h3 className="font-clash-medium text-4xl leading-[3rem] lg:text-5xl text-white">
                  API Development <br className="lg:hidden inline-block" />
                </h3>
              </div>
              <div className="lg:col-span-4">
                <div className="justify-end flex">
                  <Link
                    href="/services/api-development"
                    className="hidden lg:inline-flex items-center gap-x-3 text-lg xl:text-2xl text-black font-clash-medium px-8 py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]"
                  >
                    <span>Know more</span>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-5">
              <div className="lg:col-span-12">
                <div className="relative overflow-hidden service-car">
                  <div className="service-div-wrap lg:absolute lg:top-[15%] lg:right-[-68px]">
                    <div className="service-desc lg:bg-white/90 py-6 lg:px-12 rounded-full lg:h-[525px] lg:w-[525px] flex items-center lg:justify-center lg:text-center ">
                      <p className="font-clash-medium text-2xl lg:text-black text-white/80">
                        Think of your software like two friends who are willing
                        to gossip but have no access to each other.
                      </p>
                    </div>
                  </div>
                  <Image
                    src={ServiceImage}
                    alt="Service Image"
                    className="rounded-lg lg:rounded-[50px]"
                  ></Image>
                </div>
                <button className="lg:hidden inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-black font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]">
                  <span>Know more</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 lg:pt-12">
        <div className="pb-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <h3 className="font-clash-medium text-4xl leading-[3rem] lg:text-5xl text-white">
                  Database Designing <br className="lg:hidden inline-block" />
                </h3>
              </div>
              <div className="lg:col-span-4">
                <div className="justify-end flex">
                  <Link
                    href="/services/database-desinging"
                    className="hidden lg:inline-flex items-center gap-x-3 text-lg xl:text-2xl text-black font-clash-medium px-8 py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]"
                  >
                    <span>Know more</span>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-5">
              <div className="lg:col-span-12">
                <div className="relative overflow-hidden service-car">
                  <div className="service-div-wrap lg:absolute lg:top-[15%] lg:right-[-68px]">
                    <div className="service-desc lg:bg-white/90 py-6 lg:px-12 rounded-full lg:h-[525px] lg:w-[525px] flex items-center lg:justify-center lg:text-center ">
                      <p className="font-clash-medium text-2xl lg:text-black text-white/80">
                        Think of us like an interior designer of data, who knows
                        how to systematically arrange data at the right place
                        with the finesse of Sheng Shui.
                      </p>
                    </div>
                  </div>
                  <Image
                    src={ServiceImage}
                    alt="Service Image"
                    className="rounded-lg lg:rounded-[50px]"
                  ></Image>
                </div>
                <button className="lg:hidden inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-black font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]">
                  <span>Know more</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 lg:pt-12">
        <div className="pb-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <h3 className="font-clash-medium text-4xl leading-[3rem] lg:text-5xl text-white">
                  Manual/Automation Testing{" "}
                  <br className="lg:hidden inline-block" />
                </h3>
              </div>
              <div className="lg:col-span-4">
                <div className="justify-end flex">
                  <Link
                    href="/services/manual-automation-testing"
                    className="hidden lg:inline-flex items-center gap-x-3 text-lg xl:text-2xl text-black font-clash-medium px-8 py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]"
                  >
                    <span>Know more</span>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-5">
              <div className="lg:col-span-12">
                <div className="relative overflow-hidden service-car">
                  <div className="service-div-wrap lg:absolute lg:top-[15%] lg:right-[-68px]">
                    <div className="service-desc lg:bg-white/90 py-6 lg:px-12 rounded-full lg:h-[525px] lg:w-[525px] flex items-center lg:justify-center lg:text-center ">
                      <p className="font-clash-medium text-2xl lg:text-black text-white/80">
                        Our team is like a Swiss Army of software testing,
                        enabling them to run at the speed of espresso binge.
                      </p>
                    </div>
                  </div>
                  <Image
                    src={ServiceImage}
                    alt="Service Image"
                    className="rounded-lg lg:rounded-[50px]"
                  ></Image>
                </div>
                <button className="lg:hidden inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-black font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]">
                  <span>Know more</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 lg:pt-12">
        <div className="pb-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <h3 className="font-clash-medium text-4xl leading-[3rem] lg:text-5xl text-white">
                  CRM/ERP Services <br className="lg:hidden inline-block" />
                </h3>
              </div>
              <div className="lg:col-span-4">
                <div className="justify-end flex">
                  <Link
                    href="/services/crm-erp-services"
                    className="hidden lg:inline-flex items-center gap-x-3 text-lg xl:text-2xl text-black font-clash-medium px-8 py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]"
                  >
                    <span>Know more</span>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-5">
              <div className="lg:col-span-12">
                <div className="relative overflow-hidden service-car">
                  <div className="service-div-wrap lg:absolute lg:top-[15%] lg:right-[-68px]">
                    <div className="service-desc lg:bg-white/90 py-6 lg:px-12 rounded-full lg:h-[525px] lg:w-[525px] flex items-center lg:justify-center lg:text-center ">
                      <p className="font-clash-medium text-2xl lg:text-black text-white/80">
                        Picture your sales and business process management as
                        two faces of a coin that can either turn into heads
                        (profit) or tails (chaos).
                      </p>
                    </div>
                  </div>
                  <Image
                    src={ServiceImage}
                    alt="Service Image"
                    className="rounded-lg lg:rounded-[50px]"
                  ></Image>
                </div>
                <button className="lg:hidden inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-black font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]">
                  <span>Know more</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Add more sections as needed */}
    </div>
  );
};

export default ServiceCarousel;
