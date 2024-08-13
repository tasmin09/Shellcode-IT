'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/assets/css/service-detail.css'; // Import your CSS file
import FaqIcon from "@/assets/img/faq-icon.png";
import iPhoneImage from "@/assets/img/iphone.png";
import Link from 'next/link';
import { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
gsap.registerPlugin(ScrollTrigger);

const faqs = [
    {
        title: "Why is SEO important for businesses?",
        answer:
        "SEO is important since it improves your website's visibility on search engines, which leads to more organic traffic. Higher exposure means that more potential buyers will find your website, increasing brand awareness and reputation. Effective SEO also enhances user experience, which can lead to increased conversion rates and business growth.",
    },
    {
        title: "What are SEO keywords and its importance?",
        answer:
        "Keywords are precise words or phrases that people enter into search engines to find information. In SEO, improving your website content with relevant keywords helps search engines comprehend it and match it to user requests. Effective keyword research and usage are critical for boosting search ranks. To know more, contact us,SEO agency in Pune.",
    },
    {
        title: "What is on-page SEO and how can it help my business gain visibility?",
        answer:
        "On-page SEO is the process of optimizing individual web pages to increase their search engine ranking. This includes employing relevant keywords, optimizing meta tags (title and description), producing high-quality content, increasing internal linking, and guaranteeing mobile compatibility. These features help search engines understand and rank your content more efficiently.",
    },
    {
        title: "How does your SEO company in Pune conduct keyword research? ",
        answer:
        "Keyword research is the process of determining the terms and phrases that potential buyers use while searching for items or services in your business. Google Keyword Planner, Ahrefs, and SEMrush are all useful tools that we use to analyze search volume, competitiveness, and relevance. Effective keyword research ensures that your content matches what users are searching for.",
    },
    {
        title: "What is technical SEO and how does your professional SEO company approach it?",
        answer:
        "Technical SEO is the process of improving a website's search engine rankings by optimizing its technical characteristics. Our SEO experts do it in a way that increases site speed, ensures mobile compatibility, using suitable URL architectures, applying structured data, and resolving crawl issues. We well-optimized site improves the user experience.",
    },
    {
        title: "How do search engines rank websites?",
        answer:
        "Search engines rank websites based on a variety of criteria, including as relevancy, content quality, user experience, mobile friendliness, page speed, and the amount of high-quality backlinks. Algorithms use these variables to evaluate which sites are the most relevant and authoritative for specific search queries, and therefore rank them higher in search results.",
    },
    {
        title: "What is a meta description, and why does it matter?",
        answer:
        "A meta description is a concise overview of a webpage's content that appears in search engine results beneath the title. It's significant since it helps users understand the page's information and motivates them to visit your website. Well-written meta descriptions that include relevant keywords can boost click-through rates and SEO performance.",
    },
    {
        title: "How does your SEO agency in Pune monitor SEO performance?",
        answer:
        "Our SEO experts monitor SEO performance using Google Analytics, Google Search Console, and third-party platforms such as Ahrefs and SEMrush. Key indicators include organic traffic, keyword rankings, bounce rates, and conversion rates. We continuously keep on monitoring that helps us to find areas for development and evaluate the efficacy.",
    },
    // More questions...
];

const ServiceDetail = () => {
    const wrapperRef = useRef(null);
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index, open) => {
        if(index == openIndex)
            setOpenIndex(null);
        else
            setOpenIndex(index);
    };
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
                    invalidateOnRefresh: true
                }
            });

            sections.forEach((sct, i) => {
                ScrollTrigger.create({
                    trigger: sct,
                    start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth)),
                    end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
                    toggleClass: { targets: sct, className: "active" }
                });
            });

            // Cleanup on unmount
            return () => {
                ScrollTrigger.getAll().forEach(t => t.kill());
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
                        <p className="subhead lead tracking-normal lg:tracking-[15px] uppercase text-[#E0E0E0] font-sf-medium lg:text-xl text-left lg:text-start mb-5">Our Services</p>
                    </div>
                </section>
                <div className="wrapper lg:overflow-y-auto lg:pb-0" ref={wrapperRef}>
                    <section className="pt-0 bg-[#0D0D0D] relative flex items-center">
                        <div className="mx-auto max-w-7xl px-4 lg:px-8">
                            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                                <div className="lg:col-span-6">
                                    <h3 className="font-clash-medium text-4xl lg:text-6xl text-white mb-9">Search Engine Optimization</h3>
                                    {/* <p className="font-clash-regular text-lg lg:text-3xl text-white mb-5">
                                        Forem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p> */}
                                    <div className="bg-gray-400/20 border border-gray-500 rounded-[32px] p-5 max-w-[400px]">
                                        <p className="font-sf text-xl lg:text-3xl text-white mb-2 lg:mb-0">
                                            <em>“We make your business a smash hit on SERPs.”</em>
                                        </p>
                                        <p className="font-sf text-xl lg:text-3xl text-white">
                                            - Harshal Adarkar
                                        </p>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 lg:absolute bottom-0 right-[-60px] max-w-[650px] lg:max-w-[750px]">
                                    <Image src={iPhoneImage} alt="Service Image" className="rounded-[50px]"></Image>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-16 bg-[#0D0D0D] ux-research flex items-center">
                        <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-8 lg:space-y-16">
                            <h3 className="font-clash-bold text-white text-3xl lg:mb-8 text-wrap">Professional SEO Services are All Set Here!</h3>
                            <p className="font-sf text-xl text-white/80">
                            Our close-knit squad takes SEO on a different land where your website is a king, as search queries would make their way to you, with just a click. Our <strong>SEO experts</strong>  go above the traditional methods to make your website rank exceptionally and take a global stance.
                            </p>
                            <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-8">
                                <ul className="lg:col-span-6 text-white ul-custom space-y-1">
                                    <li>
                                    Keyword Research
                                    </li>
                                    <li>
                                    Competitors Analysis 
                                    </li>
                                    <li>
                                    On and off-page SEO
                                    </li>
                                    
                                </ul>
                                <ul className="lg:col-span-6 text-white ul-custom space-y-1">
                                    <li>
                                    SEO Audits 
                                    </li>
                                    <li>
                                    Local SEO
                                    </li>
                                    <li>
                                    Technical SEO
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="py-10 lg:py-16 bg-[#0D0D0D] connect-us flex items-center">
                        <div className="mx-auto max-w-5xl sm:px-6 lg:px-8 space-y-16 text-center leading-10 lg:leading-[70px]">
                            <p className="text-white text-2xl lg:text-6xl font-clash-medium">What&apos;s<br /> Cooking in your<br /> Mind?</p>
                            <Link href="/contact" className="relative z-50 inline-flex items-center gap-x-3 text-lg xl:text-2xl text-white font-clash-medium px-8 py-3 bg-transparent hover:bg-[#6F0000] border border-white border-solid rounded-[79px]"><span>Connect with Us</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
            <section className="py-16 bg-[#0D0D0D] ux-research flex items-center overflow-hidden">
                <div className="mx-auto max-w-[600px] lg:max-w-[700px] px-4 lg:px-8 space-y-8 lg:space-y-8">
                    <div>
                        <div className="bg-[#272727] py-2 px-4 rounded-[8px] inline-flex items-center gap-x-3 mb-3">
                            <Image src={FaqIcon} alt="Service Image" className="rounded-[50px]"></Image>
                            <span className="text-[#8F8F8F] font-medium font-base">FAQS</span>
                        </div>
                        <h2 className="text-white text-2xl lg:text-4xl xl:text-5xl">Frequently Asked Questions</h2>
                    </div>
                    <dl className="mt-0 space-y-6 divide-y divide-white/10">
                        {faqs.map((faq, index) => (
                        <Disclosure as="div" key={index} className="p-3 xl:px-5 xl:py-3 bg-[#212121] rounded-[14px]">
                            {({ open }) => (
                            <>
                                <dt>
                                <DisclosureButton className="flex w-full items-center justify-between text-left text-white" onClick={() => handleToggle(index, open)}>
                                    <div className="flex items-center ">
                                        <span className="font-clash-medium text-base">{faq.title}</span>
                                    </div>
                                    <span className="ml-6 flex h-7 items-center">
                                    {index == openIndex ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lg:w-5 lg:h-5 w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lg:w-5 lg:h-5 w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    )}
                                    </span>
                                </DisclosureButton>
                                </dt>
                                {
                                    index == openIndex
                                    &&
                                    <DisclosurePanel as="dd" static={true} className="mt-2 pr-12">
                                        <p className="text-base text-white/60 font-clash-regular">{faq.answer}</p>
                                    </DisclosurePanel>
                                }
                            </>
                            )}
                        </Disclosure>
                        ))}
                    </dl>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default ServiceDetail
