"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogContainer from "@/components/Blog/BlogContainer";
import ContactSection from "@/components/Contact";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="relative pb-0 pt-24 bg-[#0D0D0D]">
      <Header />
      <div className="relative py-16 blog-banner px-8">
        <p className="font-sf-medium text-[#D90C0C] text-2xl lg:text-5xl mb-6 lg:mb-16">
          Blogs
        </p>
        <p className="text-white font-clash-regular text-3xl lg:text-8xl lg:max-w-5xl">
          Game-changing{" "}
          <span className="text-[#ff0000]">real-time insights</span> are on the
          mark
        </p>
      </div>
      <div className="relative px-4 lg:px-8 py-3 lg:py-16 lg:space-y-16 space-y-2">
        <div className="flex flex-wrap gap-x-3">
          <Link
            href="/services"
            className="mt-5 text-xs lg:text-lg xl:text-2xl text-white font-clash-medium px-3 lg:px-8 py-3 bg-[#6F0000] border border-white rounded-[79px]"
          >
            All Categories
          </Link>
          <Link
            href="/services/web-development"
            className="mt-5 text-xs lg:text-lg xl:text-2xl text-white font-clash-medium px-3 lg:px-8 py-3 bg-transparent hover:bg-[#6F0000] border border-white border-solid rounded-[79px]"
          >
            Website Development
          </Link>
          <Link
            href="/services/mobile-app-development"
            className="mt-5 text-xs lg:text-lg xl:text-2xl text-white font-clash-medium px-3 lg:px-8 py-3 bg-transparent hover:bg-[#6F0000] border border-white border-solid rounded-[79px]"
          >
            Application Development
          </Link>
          <Link
            href="/services/cloud-services"
            className="mt-5 text-xs lg:text-lg xl:text-2xl text-white font-clash-medium px-3 lg:px-8 py-3 bg-transparent hover:bg-[#6F0000] border border-white border-solid rounded-[79px]"
          >
            Cloud Services
          </Link>
        </div>
      </div>
      <div className="relative px-0 py-6 lg:py-16 lg:space-y-16 space-y-2">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-12">
            <BlogContainer />
          </div>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Blog;
