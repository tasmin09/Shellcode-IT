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
        title: "What types of mobile applications do you create?",
        answer:
        "At Shellcode,  a mobile app development company in Pune, we create native apps for iOS and Android, and cross-platform apps with frameworks like React Native and Flutter. Our expertise spans a wide range of applications, including e-commerce, social networking, healthcare, finance, and others, providing great performance and a consistent user experience.",
    },
    {
        title: "What is the cost of developing a mobile application?",
        answer:
        "The cost of designing a mobile app in India varies greatly depending on the complexity, features, and platforms. A basic app can cost from ₹5 lakh to ₹10 lakh, while more complicated apps with extensive functionality can vary from ₹15 lakh to ₹50 lakh or higher. For detailed cost estimates, connect with Shellcode,  app development agency in Pune. ",
    },
    {
        title: "What's the distinction between native and cross-platform development?",
        answer:
        "Native development uses platform-specific languages (Swift for iOS, Kotlin for Android) to ensure optimal performance and access to native capabilities. Cross-platform development employs frameworks such as React Native and Flutter to create apps that run on both platforms from a single codebase, decreasing development time and cost.",
    },
    {
        title: "What steps does your app development agency in Pune take to ensure the app's quality? ",
        answer:
        "We ensure app quality through rigorous testing, which includes unit, integration, and user acceptability tests. We also undertake performance, usability, and security audits to detect and resolve any concerns. Our iterative development approach enables continual improvement and modification based on feedback.",
    },
    {
        title: "How do you manage updates and new features?",
        answer:
        "At Shellcode, app development agency in Pune, we employs an agile strategy to update and add new features, prioritizing them based on user feedback and business objectives. Regular maintenance ensures that your app is compatible with new operating system versions, that performance is optimized, and that new functions are added on time to keep it relevant and interesting.",
    },
    {
        title: "Do you provide post-launch support and maintenance?",
        answer:
        "Yes, at Shellcode - a mobile app development company in Pune we offer complete post-launch support and maintenance, which includes bug repairs, OS compatibility upgrades, performance optimization, and new feature development. Our goal is to keep your app functioning, safe, and up to date with the relevant information and consistent speed. ",
    },
    {
        title: "Can your app development agency in Pune handle app scaling and performance optimization? ",
        answer:
        "Yes, we develop programs with scalability in mind, guaranteeing that they can handle increased user traffic and data. We improve performance using efficient code, database management, and load testing. Regular upgrades and monitoring help to maintain optimal performance to enrich the experience of the end users and improve its overall efficiency and reliability.",
    },
    {
        title: "What kind of testing does your app development agency in Pune provide?",
        answer:
        "We at Shellcode Solutions conduct a variety of tests, including unit testing, integration testing, functional testing, usability testing, and performance testing. In addition, we perform security testing to uncover and prevent vulnerabilities, resulting in resilient and reliable software that can add value to the user experience and help them gain confidence in your business.",
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
                                    <h3 className="font-clash-medium text-4xl lg:text-6xl text-white mb-9">Mobile App Development</h3>
                                    {/* <p className="font-clash-regular text-lg lg:text-3xl text-white mb-5">
                                        Forem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p> */}
                                    <div className="bg-gray-400/20 border border-gray-500 rounded-[32px] p-5 max-w-[400px]">
                                        <p className="font-sf text-xl lg:text-3xl text-white mb-2 lg:mb-0">
                                            <em>“You think of a sleek mobile app, we make it a &apos;smoothie process.”</em>
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
                            <h3 className="font-clash-bold text-white text-3xl lg:mb-8 text-wrap">An App Running Flawlessly Like a Cheetah</h3>
                            <p className="font-sf text-xl text-white/80">
                            We make mobile applications run faster than bugs. Our team is in constant motion of turning your words into a language, and language into an application that is easily known by everyone, without any errors or any glitch. While we do so, we ensure that you are well-aware about how we smoothly take the plight.
                            </p>
                            <p className="font-sf text-xl text-white/80">Fueling Apps with our Tech Stack</p>   
                            <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-8">
                                <ul className="lg:col-span-6 text-white ul-custom space-y-1">
                                    <li>
                                    Flutter
                                    </li>
                                    <li>
                                    React Native
                                    </li>
                                    <li>
                                    Java
                                    </li>
                                </ul>
                                <ul className="lg:col-span-6 text-white ul-custom space-y-1">
                                    <li>
                                    Kotlin
                                    </li>
                                    <li>
                                    Swift
                                    </li>
                                    <li>
                                    Unity 3D
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
