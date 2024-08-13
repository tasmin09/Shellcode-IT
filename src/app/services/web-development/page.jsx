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
        title: "What type of websites does your web designing company in Pune create?",
        answer:
        "We create a variety of websites, including corporate, e-commerce, blog, portfolio, and custom web applications. Our expertise enables responsive, mobile-friendly designs that are adapted to your specific business requirements and industry standards, resulting in an excellent user experience across all devices, ensuring continuous improvement and quality assurance in a timely manner. ",
    },
    {
        title: "How much does it cost to design a website?",
        answer:
        "The cost is determined by the website's complexity, features, and design needs. Prices for basic websites range from ₹50,000 to ₹1,000,000, while complex sites might cost ₹2,000,000 to ₹10,000,000 or more. We provide detailed quotes tailored to your individual project requirements. To get the quotation, connect with Shellcode Solutions, a web designing company in Pune.",
    },
    {
        title: "What's the significance of a mobile-friendly website?",
        answer:
        "A mobile-friendly website provides a seamless experience for consumers on smartphones and tablets, including easy navigation and readability. This is critical as more people visit webpages using mobile devices. It also improves search engine ranks, as Google prefers mobile-friendly websites. If you want to develop a website, get in touch with Shellcode Solutions, a web designing company in Pune.",
    },
    {
        title: "How does your web development company in Pune manage website backups?",
        answer:
        "We use automated backups on a regular basis to ensure that your website data is secure and recoverable in the event of an incident. These backups can be scheduled daily, weekly, or monthly, depending on your requirements, offering peace of mind and data security.",
    },
    {
        title: "How do you approach website performance optimization?",
        answer:
        "To improve website speed, we reduce HTTP requests, optimize images, enable browser caching, and use content delivery networks (CDNs). These approaches ensure that pages load quickly, which improves user experience and search engine rankings. Additionally, this will benefit the long-term business credibility and performance.",
    },
    {
        title: "Can you make custom web applications?",
        answer:
        "Yes, by being one of the best website designing company in Pune, we specialize in creating custom web applications based on your specific business needs. Our solutions are scalable, secure, and designed to improve operational efficiency, with features and functionalities that typical websites or off-the-shelf solutions may lack.",
    },
    {
        title: "How do you ensure that websites are accessible?",
        answer:
        "Our web developers in Pune follow web accessibility guidelines (WCAG) to ensure that your website is usable by persons with impairments. This involves offering language replacements for images, keyboard navigation, and appropriate color contrast to ensure that your website is inclusive and legally acceptable.",
    },
    {
        title: "How do you handle website migrations?",
        answer:
        "We, at Shellcode, web development company in Pune meticulously plan website migrations to minimize downtime and maintain data integrity. This includes planning, backing up data, transferring files, and testing the new configuration. Before we complete the migration, we handle DNS modifications and confirm that the new website environment is fully working.",
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
                                    <h3 className="font-clash-medium text-4xl lg:text-6xl text-white mb-9">Web Development</h3>
                                    {/* <p className="font-clash-regular text-lg lg:text-3xl text-white mb-5">
                                        Forem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p> */}
                                    <div className="bg-gray-400/20 border border-gray-500 rounded-[32px] p-5 max-w-[400px]">
                                        <p className="font-sf text-xl lg:text-3xl text-white mb-2 lg:mb-0">
                                            <em>“We make your business story live on the internet.”</em>
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
                            <h3 className="font-clash-bold text-white text-3xl lg:mb-8 text-wrap">Uncover the First Impression of your Business </h3>
                            <p className="font-sf text-xl text-white/80">
                            We mark the first impression of your digital business by building a website that can make the visitors go &apos;Oh my my! This is Amazing.&apos;, as  our web pacemaker has the ability and right formula to shoot the shot at the first instance; you as a business no longer need to rely on basic and ineffective websites. 
                            </p>
                            <p className="font-sf text-xl text-white/80">Our Tech Suite Ace the Web Game 
                            </p>
                            <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-8">
                                <ul className="lg:col-span-6 text-white ul-custom space-y-1">
                                    <li>
                                    ReactJS
                                    </li>
                                    <li>
                                    NextJS
                                    </li>
                                    <li>
                                    React Three Fibre
                                    </li>
                                    
                                </ul>
                                <ul className="lg:col-span-6 text-white ul-custom space-y-1">
                                    <li>
                                    AngularJS
                                    </li>
                                    <li>
                                    Angular 16
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
