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
        title: "Why is UI/UX design important for any business?",
        answer:
        "UI/UX design is critical because it directly affects user pleasure, engagement, and retention. A well-designed interface increases usability and accessibility, resulting in a favorable user experience. This can lead to increased client loyalty, improved conversion rates, and overall product/service success. To get a better UI/UX design, contact Shellcode, UX/UI designing company in Pune.",
    },
    {
        title: "Which tools do you use for UI/UX design?",
        answer:
        "Our UI/UX developers in Pune employ a range of UI/UX design tools, such as Sketch, Figma, Adobe XD, InVision, and Axure. These tools enable us to produce wireframes, prototypes, and high-fidelity designs, allowing for successful collaboration and iteration throughout the design process, resulting in better navigation and performance. ",
    },
    {
        title: "How does your UI/UX developer in Pune conduct user research?",
        answer:
        "We conduct user research using various approaches such as surveys, interviews, usability testing, and analytics. This allows us to better understand user demands, behaviors, and pain spots, ensuring that the design is user-centered and satisfies the target audience's expectations and requirements, resulting in business trustworthiness and enhanced credibility.",
    },
    {
        title: "What is a wireframe and what is its importance?",
        answer:
        "A wireframe is a low-fidelity visual guide that depicts the basic structure of a digital project. It outlines the layout, structure, and important aspects without going into design specifics. Wireframes assist visualize the basic flow and functioning of the product, and serve as a template for the design process.",
    },
    {
        title: "What are user personas and how is it useful?",
        answer:
        "User personas are fictional representations of target users based on research and data. They include demographics, goals, behaviors, and pain points to guide design decisions and ensure the product meets their needs and preferences. Our UI/UX developers in Pune make use of such personas to create a better user-friendly design.",
    },
    {
        title: "What is usability testing and how is it beneficial?",
        answer:
        "Usability testing is the process of analyzing a product with real users. Participants complete activities while observers record any problems or difficulties encountered. This assists in identifying usability issues, gathering user feedback, and improving the overall user experience prior to the product's final release.",
    },
    {
        title: "What is a prototype and its importance?",
        answer:
        "A prototype is an interactive, high-fidelity replica of a finished product that simulates its functionality and interface. It enables designers and stakeholders to test and assess the design, usability, and user experience before development begins, ensuring that any flaws are resolved early on. To learn more about how we use prototypes, connect with Shellcode’s UI/UX developers in Pune.",
    },
    {
        title: "How does your UI/UX developer in Pune approach accessibility in design?",
        answer:
        "They prioritize accessibility by adhering to rules such as WCAG, which ensure designs are usable by individuals with impairments. This involves offering text replacements for images, maintaining adequate color contrast, allowing keyboard navigation, and making interactive aspects accessible to screen readers.",
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
                                    <h3 className="font-clash-medium text-4xl lg:text-6xl text-white mb-9">UI/UX Design</h3>
                                    {/* <p className="font-clash-regular text-lg lg:text-3xl text-white mb-5">
                                        Forem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p> */}
                                    <div className="bg-gray-400/20 border border-gray-500 rounded-[32px] p-5 max-w-[400px]">
                                        <p className="font-sf text-xl lg:text-3xl text-white mb-2 lg:mb-0">
                                            <em>“We are the architects of poppy interactive clicks.”</em>
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
                            <h3 className="font-clash-bold text-white text-3xl lg:mb-8 text-wrap">Make Your Website Super Engaging</h3>
                            <p className="font-sf text-xl text-white/80">
                            We provide <strong>UI/UX Designing services in Pune</strong>, innovating designs that can act as a cherry to your web designing structure. With our sword of creativity and expert knowledge, we create poppy interactive CTA buttons, just like poppy graphic tees that instantly capture the eye. So, let us drive your website crazy with creative and business-relevant aesthetic design elements.
                            </p>
                            <p className="font-sf text-xl text-white/80">Fueling Apps with our Tech Stack</p>   
                            <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-8">
                                <ul className="lg:col-span-6 text-white ul-custom space-y-1">
                                    <li>
                                    Create Whitespace Efficiency
                                    </li>
                                    <li>
                                    Use of Engaging Elements
                                    </li>
                                    <li>
                                    Best Color Scheme
                                    </li>
                                </ul>
                                <ul className="lg:col-span-6 text-white ul-custom space-y-1">
                                    <li>
                                    Clean Typography
                                    </li>
                                    <li>
                                    Interactive CTA Buttons 
                                    </li>
                                    <li>
                                    User-Friendly Navigation
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
