"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/assets/css/service-detail.css"; // Import your CSS file
import ServiceImage from "@/assets/img/service-img.png";
import iPhoneImage from "@/assets/img/iphone.png";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const ServiceDetail = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 991) {
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
            "+=" +
            sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
          toggleClass: { targets: sct, className: "active" },
        });
      });

      // Cleanup on unmount
      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
        gsap.killTweensOf(sections);
      };
    }
  }, []);

  return (
    <div className="bg-[#0D0D0D]">
      <div className="bg-[#0D0D0D]">
        <Header />
        <section className="pt-48 pb-0 lg:pb-4">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
            <p className="subhead lead tracking-normal lg:tracking-[15px] uppercase text-[#E0E0E0] font-sf-medium lg:text-xl text-left lg:text-start mb-5">
              Our Services
            </p>
          </div>
        </section>
        <div className="wrapper lg:overflow-y-auto lg:pb-0" ref={wrapperRef}>
          <section className="pt-0 bg-[#0D0D0D] relative flex items-center">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-6">
                  <h3 className="font-clash-medium text-4xl lg:text-6xl text-white mb-9">
                    API Development
                  </h3>
                  {/* <p className="font-clash-regular text-lg lg:text-3xl text-white mb-5">
                                        Forem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p> */}
                  <div className="bg-gray-400/20 border border-gray-500 rounded-[32px] p-5 max-w-[400px]">
                    <p className="font-sf text-xl lg:text-3xl text-white mb-2 lg:mb-0">
                      <em>“We are the matchmakers of vivid applications!”</em>
                    </p>
                    <p className="font-sf text-xl lg:text-3xl text-white">
                      - Harshal Adarkar
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-6 lg:absolute bottom-0 right-[-60px] max-w-[650px] lg:max-w-[750px]">
                  <Image
                    src={iPhoneImage}
                    alt="Service Image"
                    className="rounded-[50px]"
                  ></Image>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 bg-[#0D0D0D] ux-research flex items-center">
            <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-8 lg:space-y-16">
              <h3 className="font-clash-bold text-white text-3xl lg:mb-8 text-wrap">
                Making your Apps Chit-Chat like Gossipmonge
              </h3>
              <p className="font-sf text-xl text-white/80">
                Think of your software like two friends who are willing to
                gossip but have no access to each other. With our API
                Development service, we make it possible without a snag,
                enabling them to connect with each other without any hassle, or
                hesitation, as our services are to drive your software
                effortlessly.{" "}
              </p>
              <p className="font-sf text-xl text-white/80">
                Software Stack Taking the Lead
              </p>
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-8">
                <ul className="lg:col-span-6 text-white ul-custom space-y-1">
                  <li>NodeJS</li>
                  <li>Laravel</li>
                  <li>Codeigniter</li>
                </ul>
                <ul className="lg:col-span-6 text-white ul-custom space-y-1">
                  <li>Django</li>
                  <li>Dot Net</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="py-10 lg:py-16 bg-[#0D0D0D] connect-us flex items-center">
            <div className="mx-auto max-w-5xl sm:px-6 lg:px-8 space-y-16 text-center leading-10 lg:leading-[70px]">
              <p className="text-white text-2xl lg:text-6xl font-clash-medium">
                What&apos;s
                <br /> Cooking in your
                <br /> Mind?
              </p>
              <Link
                href="/contact"
                className="relative z-50 inline-flex items-center gap-x-3 text-lg xl:text-2xl text-white font-clash-medium px-8 py-3 bg-transparent hover:bg-[#6F0000] border border-white border-solid rounded-[79px]"
              >
                <span>Connect with Us</span>{" "}
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
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ServiceDetail;
