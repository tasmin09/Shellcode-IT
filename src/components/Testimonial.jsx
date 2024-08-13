"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import userImage from "@/assets/img/user_testimonial.png";
import Ellipse from "@/assets/img/ellipse.png";
import TestimonialElement from "@/assets/img/testimonial-element.png";

const Testimonial = () => {
  const settings = {
    className: "center",
    centerMode: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    infinite: true,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerPadding: "24px",
        },
      },
    ],
    slidesToShow: 1,
    arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="px-3 lg:px-6">
          <div className="relative overflow-hidden bg-[#050507] px-6 py-5 lg:py-14 shadow-xl rounded-lg sm:rounded-3xl lg:px-14 border border-white/30">
            <Image
              src={Ellipse}
              alt="blur"
              className="absolute left-0 top-0"
            ></Image>
            <Image
              src={TestimonialElement}
              alt="element"
              className="absolute right-0 bottom-0"
            ></Image>

            <div className="relative mx-auto lg:mx-0">
              <figure>
                <blockquote className="lg:mt-5">
                  <p className="text-white text-xl sm:leading-8 clip-text-title font-sf-medium lg:text-4xl xl:text-5xl mb-3 lg:mb-6">
                    “This platform helped me increase my sales and revenue.
                    They&apos;re really awesome.
                  </p>
                  <p className="font-sf text-white text-sm lg:text-xl">
                    “This platform helped me increase my sales and revenue.
                    They&apos;re really awesome.“This platform helped me
                    increase my sales and revenue. They&apos;re really awesome.
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-3">
                  <div>
                    <Image
                      className="inline-block h-14 w-14 lg:h-16 lg:w-16 rounded-full"
                      src={userImage}
                      alt=""
                    />
                  </div>
                  <div className="text-white">
                    <div className="font-sf-bold text-lg lg:text-2xl">
                      Judith Black
                    </div>
                    <div className="lg:mt-1 font-sf-regular text-base lg:text-xl">
                      CEO of Workcation
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="px-6">
          <div className="relative overflow-hidden bg-[#050507] px-6 py-5 lg:py-14 shadow-xl rounded-lg sm:rounded-3xl lg:px-14 border border-white/30">
            <Image
              src={Ellipse}
              alt="blur"
              className="absolute left-0 top-0"
            ></Image>
            <Image
              src={TestimonialElement}
              alt="element"
              className="absolute right-0 bottom-0"
            ></Image>

            <div className="relative mx-auto lg:mx-0">
              <figure>
                <blockquote className="lg:mt-5">
                  <p className="text-white text-xl sm:leading-8 clip-text-title font-sf-medium lg:text-4xl xl:text-5xl mb-3 lg:mb-6">
                    “This platform helped me increase my sales and revenue.
                    They&apos;re really awesome.
                  </p>
                  <p className="font-sf text-white text-sm lg:text-xl">
                    “This platform helped me increase my sales and revenue.
                    They&apos;re really awesome.“This platform helped me
                    increase my sales and revenue. They&apos;re really awesome.
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-3">
                  <div>
                    <Image
                      className="inline-block h-14 w-14 lg:h-16 lg:w-16 rounded-full"
                      src={userImage}
                      alt=""
                    />
                  </div>
                  <div className="text-white">
                    <div className="font-sf-bold text-lg lg:text-2xl">
                      Judith Black
                    </div>
                    <div className="lg:mt-1 font-sf-regular text-base lg:text-xl">
                      CEO of Workcation
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="px-6">
          <div className="relative overflow-hidden bg-[#050507] px-6 py-5 lg:py-14 shadow-xl rounded-lg sm:rounded-3xl lg:px-14 border border-white/30">
            <Image
              src={Ellipse}
              alt="blur"
              className="absolute left-0 top-0"
            ></Image>
            <Image
              src={TestimonialElement}
              alt="element"
              className="absolute right-0 bottom-0"
            ></Image>

            <div className="relative mx-auto lg:mx-0">
              <figure>
                <blockquote className="lg:mt-5">
                  <p className="text-white text-xl sm:leading-8 clip-text-title font-sf-medium lg:text-4xl xl:text-5xl mb-3 lg:mb-6">
                    “This platform helped me increase my sales and revenue.
                    They&apos;re really awesome.
                  </p>
                  <p className="font-sf text-white text-sm lg:text-xl">
                    “This platform helped me increase my sales and revenue.
                    They&apos;re really awesome.“This platform helped me
                    increase my sales and revenue. They&apos;re really awesome.
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-3">
                  <div>
                    <Image
                      className="inline-block h-14 w-14 lg:h-16 lg:w-16 rounded-full"
                      src={userImage}
                      alt=""
                    />
                  </div>
                  <div className="text-white">
                    <div className="font-sf-bold text-lg lg:text-2xl">
                      Judith Black
                    </div>
                    <div className="lg:mt-1 font-sf-regular text-base lg:text-xl">
                      CEO of Workcation
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="px-6">
          <div className="relative overflow-hidden bg-[#050507] px-6 py-5 lg:py-14 shadow-xl rounded-lg sm:rounded-3xl lg:px-14 border border-white/30">
            <Image
              src={Ellipse}
              alt="blur"
              className="absolute left-0 top-0"
            ></Image>
            <Image
              src={TestimonialElement}
              alt="element"
              className="absolute right-0 bottom-0"
            ></Image>

            <div className="relative mx-auto lg:mx-0">
              <figure>
                <blockquote className="lg:mt-5">
                  <p className="text-white text-xl sm:leading-8 clip-text-title font-sf-medium lg:text-4xl xl:text-5xl mb-3 lg:mb-6">
                    “This platform helped me increase my sales and revenue.
                    They&apos;re really awesome.
                  </p>
                  <p className="font-sf text-white text-sm lg:text-xl">
                    “This platform helped me increase my sales and revenue.
                    They&apos;re really awesome.“This platform helped me
                    increase my sales and revenue. They&apos;re really awesome.
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-3">
                  <div>
                    <Image
                      className="inline-block h-14 w-14 lg:h-16 lg:w-16 rounded-full"
                      src={userImage}
                      alt=""
                    />
                  </div>
                  <div className="text-white">
                    <div className="font-sf-bold text-lg lg:text-2xl">
                      Judith Black
                    </div>
                    <div className="lg:mt-1 font-sf-regular text-base lg:text-xl">
                      CEO of Workcation
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="px-6">
          <div
            className="relative overflow-hidden bg-[#050507] px-6 py-5 lg:py-14 shadow-xl rounded-lg sm:rounded-3xl 
          lg:px-14 border border-white/30"
          >
            <Image
              src={Ellipse}
              alt="blur"
              className="absolute left-0 top-0"
            ></Image>
            <Image
              src={TestimonialElement}
              alt="element"
              className="absolute right-0 bottom-0"
            ></Image>

            <div className="relative mx-auto lg:mx-0">
              <figure>
                <blockquote className="lg:mt-5">
                  <p className="text-white text-xl sm:leading-8 clip-text-title font-sf-medium lg:text-4xl xl:text-5xl mb-3 lg:mb-6">
                    “This platform helped me increase my sales and revenue.
                    They&apos;re really awesome.
                  </p>
                  <p className="font-sf text-white text-sm lg:text-xl">
                    “This platform helped me increase my sales and revenue.
                    They&apos;re really awesome.“This platform helped me
                    increase my sales and revenue. They&apos;re really awesome.
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-3">
                  <div>
                    <Image
                      className="inline-block h-14 w-14 lg:h-16 lg:w-16 rounded-full"
                      src={userImage}
                      alt=""
                    />
                  </div>
                  <div className="text-white">
                    <div className="font-sf-bold text-lg lg:text-2xl">
                      Judith Black
                    </div>
                    <div className="lg:mt-1 font-sf-regular text-base lg:text-xl">
                      CEO of Workcation
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="px-6">
          <div className="relative overflow-hidden bg-[#050507] px-6 py-5 lg:py-14 shadow-xl rounded-lg sm:rounded-3xl lg:px-14 border border-white/30">
            <Image
              src={Ellipse}
              alt="blur"
              className="absolute left-0 top-0"
            ></Image>
            <Image
              src={TestimonialElement}
              alt="element"
              className="absolute right-0 bottom-0"
            ></Image>

            <div className="relative mx-auto lg:mx-0">
              <figure>
                <blockquote className="lg:mt-5">
                  <p className="text-white text-xl sm:leading-8 clip-text-title font-sf-medium lg:text-4xl xl:text-5xl mb-3 lg:mb-6">
                    “This platform helped me increase my sales and revenue.
                    They&apos;re really awesome.
                  </p>
                  <p className="font-sf text-white text-sm lg:text-xl">
                    “This platform helped me increase my sales and revenue.
                    They&apos;re really awesome.“This platform helped me
                    increase my sales and revenue. They&apos;re really awesome.
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-3">
                  <div>
                    <Image
                      className="inline-block h-14 w-14 lg:h-16 lg:w-16 rounded-full"
                      src={userImage}
                      alt=""
                    />
                  </div>
                  <div className="text-white">
                    <div className="font-sf-bold text-lg lg:text-2xl">
                      Judith Black
                    </div>
                    <div className="lg:mt-1 font-sf-regular text-base lg:text-xl">
                      CEO of Workcation
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonial;
