"use client";
import BlogImage from "@/components/Blog/BlogImage";
import BlogDetail from "@/components/Blog/BlogDetail";
import React, { useEffect, useRef, useState } from "react";

import "@/assets/css/blog.css";

const BlogContainer = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const [stickyDiv, setStickyDiv] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const section1 = section1Ref.current;
      const section2 = section2Ref.current;
      const stickyDiv1 = section1.querySelector(".sticky");
      const stickyDiv2 = section2.querySelector(".sticky");

      const section1Rect = section1.getBoundingClientRect();
      const section2Rect = section2.getBoundingClientRect();

      if (section1Rect.top <= 0 && section2Rect.top > 0) {
        setStickyDiv("section1");
      } else if (section2Rect.top <= 0) {
        setStickyDiv("section2");
      } else {
        setStickyDiv(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="space-y-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 px-3 lg:ps-8 lg:pe-0 pe-3">
        <div className="lg:col-span-5 lg:space-y-8 space-y-6">
          <div ref={section1Ref} className="section">
            <BlogImage />
            <BlogDetail
              className={`child ${stickyDiv === "section1" ? "sticky" : ""}`}
            />
          </div>
          <div ref={section2Ref} className="section">
            <BlogImage />
            <BlogDetail
              className={`child ${stickyDiv === "section2" ? "sticky" : ""}`}
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="bg-description p-4 lg:p-14 rounded-xl sticky lg:mt-0 lg-4 hidden lg:block">
            <div className="bg-inner p-4 lg:p-10 rounded-xl">
              <p className="font-clash-semibold text-white text-2xl lg:text-5xl">
                Web Development
              </p>
              <p className="bg- font-clash-regular text-white text-lg lg:text-2xl">
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 ps-3 lg:ps-0 lg:pe-8 pe-3">
        <div className="lg:col-span-7">
          <div className="bg-description p-3 lg:p-14 rounded-xl sticky lg:block hidden">
            <div className="bg-inner p-4 lg:p-10 rounded-xl">
              <p className="font-clash-semibold text-white text-2xl lg:text-5xl">
                App Development
              </p>
              <p className="bg- font-clash-regular text-white lg:text-2xl text-sm">
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 space-y-12">
          <div>
            <BlogImage />
            <BlogDetail />
          </div>
          <div>
            <BlogImage />
            <BlogDetail />
          </div>
          <div>
            <BlogImage />
            <BlogDetail />
          </div>
          <div>
            <BlogImage />
            <BlogDetail />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogContainer;
