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
        title: "What is social media marketing? ",
        answer:
        "Social media marketing is the process of promoting products or services through platforms such as Facebook, Instagram, Twitter, LinkedIn, and others. It includes providing content, running advertisements, and interacting with people in order to raise brand awareness, drive traffic, and boost sales. To get this service, contact Shellcode Solutions, one of the best social media marketing agency in Pune.",
    },
    {
        title: "What forms of content work best for social media?",
        answer:
        "The most effective sorts of social media content are photographs, videos, infographics, blogs, user-generated content, and interactive postings such as polls and quizzes. To increase reach and engagement, content should be entertaining, relevant, and platform-specific. To gain a profound understanding of this, get in touch with Shellcode Solutions, social media marketing agency in Pune.",
    },
    {
        title: "What is the purpose of hashtags in social media marketing?",
        answer:
        "Hashtags help to organize material and boost visibility by making posts discoverable to those who search for or follow the tags. Use relevant, popular, and branded hashtags to increase engagement, reach, and attract new followers. Shellcode Solutions, a social media marketing agency in Pune ace at using relevant hashtags and keywords, get assistance today.",
    },
    {
        title: "What are social media advertisements?",
        answer:
        "Social media advertising are sponsored adverts that appear on networks such as Facebook, Instagram, and LinkedIn. They cater to certain audiences based on demographics, hobbies, and habits. Ads might incorporate photos, videos, carousels, and other elements designed to improve visibility, traffic, and conversions. To gain results from paid ads, connect with Shellcode Solutions - a social media marketing agency in Pune.",
    },
    {
        title: "How do you deal with unfavorable remarks or feedback?",
        answer:
        "We handle unfavorable comments or feedback by replying quickly and professionally, addressing the issue, and providing solutions. This strategy demonstrates that we value customer input and are committed to resolving concerns, thereby changing a poor experience into a positive one. To know more, contact us as we are one of the best social media marketing agencies in Pune.",
    },
    {
        title: "How can your social media marketing services in Pune can help me get more followers?",
        answer:
        "To increase followers, we create high-quality, interesting content, use relevant hashtags, organize competitions and giveaways, collaborate with influencers, and engage with your audience on a regular basis. Paid advertising and targeted ads can also help increase following numbers. Our experts know how to ace this game and they take it smoothly.",
    },
    {
        title: "How do you generate compelling social media content?",
        answer:
        "To develop engaging content, we at Shellcode Solutions, social media marketing agency in Pune  first analyze your audience, use captivating imagery, write catchy headlines, and use interactive components such as polls and quizzes. Posting frequently and employing a variety of content kinds, such as videos, infographics, and user-generated content, increases engagement.",
    },
    {
        title: "What is social media analytics and how is it useful?",
        answer:
        "Social media analytics entails gathering and analyzing data from social media sites to assess performance and effectiveness. Key analytics include likes, shares, comments, follower growth, click-through rates, and conversion rates. These insights contribute to strategy optimization and ROI improvement. At shellcode, social media marketing agency in Pune we are specialize in choosing the right metrics to improve the performance. To get a quotation, connect with us.",
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
                                    <h3 className="font-clash-medium text-4xl lg:text-6xl text-white mb-9">Social Media Marketing</h3>
                                    {/* <p className="font-clash-regular text-lg lg:text-3xl text-white mb-5">
                                        Forem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p> */}
                                    <div className="bg-gray-400/20 border border-gray-500 rounded-[32px] p-5 max-w-[400px]">
                                        <p className="font-sf text-xl lg:text-3xl text-white mb-2 lg:mb-0">
                                            <em>“We make your business ‘socially attractive.”</em>
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
                            <h3 className="font-clash-bold text-white text-3xl lg:mb-8 text-wrap">Make your Business Socially Extrovert</h3>
                            <p className="font-sf text-xl text-white/80">
                            Our <strong>social media marketing services for small businesses</strong> is an ode to become socially desirable and upbeat the competition. Our folks make the best plans that can make people think &apos;Oh, this is a cool brand&apos; and make them hooked over your &apos;cool stuff&apos; on social media. So, are you ready to turn your business into a cool brand, gaining social traction? 

                            </p>
                            <p className="font-sf text-xl text-white/80">Fueling Apps with our Tech Stack</p>   
                            <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-8">
                                <ul className="lg:col-span-6 text-white ul-custom space-y-1">
                                    <li>
                                    Account Management
                                    </li>
                                    <li>
                                    Brand Building
                                    </li>
                                    <li>
                                    Growth Strategies
                                    </li>
                                </ul>
                                <ul className="lg:col-span-6 text-white ul-custom space-y-1">
                                    <li>
                                    Marketing Campaigns
                                    </li>
                                    <li>
                                    Engagement Activities
                                    </li>
                                    <li>
                                    Content Creation
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
