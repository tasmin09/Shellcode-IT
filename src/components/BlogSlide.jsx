"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import blog1 from "@/assets/img/b1.png";

const BlogSlide = () => {
  const settings = {
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="md:px-0 px-3">
          <div className="bg-[#E3FF42] inline-block max-w-[385px] rounded-3xl">
            <div className="flex align-top justify-end p-5">
              <div>
                <p className="lg:leading-6 font-sf-medium text-black/70 text-base lg:text-2xl mb-1 lg:mb-3">
                  How to make perfect dashboards for your website with right
                  tools
                </p>
                <p className="font-sf-bold text-black/70 text-sm lg:text-xl">
                  12 Jan 2024
                </p>
              </div>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 lg:size-8 fill-black/60"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="overflow-hidden rounded-3xl">
              <Image src={blog1} alt="Blog Image"></Image>
            </div>
          </div>
        </div>
        <div className="md:px-0 px-3">
          <div className="bg-[#141E2A] inline-block max-w-[385px] rounded-3xl">
            <div className="flex align-top justify-end p-5">
              <div>
                <p className="lg:leading-6 font-sf-medium text-white text-base lg:text-2xl mb-1 lg:mb-3">
                  How to make perfect dashboards for your website with right
                  tools
                </p>
                <p className="font-sf-bold text-white text-sm lg:text-xl">
                  12 Jan 2024
                </p>
              </div>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 lg:size-8 fill-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="overflow-hidden rounded-3xl">
              <Image src={blog1} alt="Blog Image"></Image>
            </div>
          </div>
        </div>
        <div className="md:px-0 px-3">
          <div className="bg-[#C0E8E8] inline-block max-w-[385px] rounded-3xl">
            <div className="flex align-top justify-end p-5">
              <div>
                <p className="lg:leading-6 font-sf-medium text-black/70 text-base lg:text-2xl mb-1 lg:mb-3">
                  How to make perfect dashboards for your website with right
                  tools
                </p>
                <p className="font-sf-bold text-black/70 text-sm lg:text-xl">
                  12 Jan 2024
                </p>
              </div>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 lg:size-8 fill-black/60"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="overflow-hidden rounded-3xl">
              <Image src={blog1} alt="Blog Image"></Image>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BlogSlide;
