"use client";
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/assets/img/logo.svg";
import LogoModalImage from "@/assets/img/shellcode.svg";
import Blog from "@/assets/img/blogs.png";
import BlogMobile from "@/assets/img/blog-m.png";
import About from "@/assets/img/about-n.png";
import AboutMobile from "@/assets/img/about-m.png";
import Contact from "@/assets/img/contact.png";
import ContactMobile from "@/assets/img/contact-m.png";
import Service from "@/assets/img/services.png";
import ServiceMobile from "@/assets/img/service-m.png";
import Project from "@/assets/img/projects.png";
import ProjectMobile from "@/assets/img/project-m.png";
import ShellCode from "@/assets/img/Shellcode-Logo.png";

const HomeComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Transition show={open}>
        <Dialog className="relative z-[55]" onClose={setOpen}>
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden bg-white p-0 text-left shadow-xl transition-all sm:w-full">
                  <div className="h-100 bg-black inset-0 z-[52] bg-nav">
                    <div className="w-full">
                      <header className="inset-x-0 top-0 z-[51]">
                        <nav
                          className="flex items-center justify-between p-6 lg:px-8"
                          aria-label="Global"
                        >
                          <div className="flex lg:flex-1 ">
                            <Link href="/" className="-m-1.5 p-1.5">
                              {/* <span className="sr-only">Shell Code</span> */}
                              <Image
                                className="h-6 xl:h-10 w-auto"
                                src={LogoModalImage}
                                alt="Shell-Code"
                              />
                            </Link>
                          </div>
                          <div className="flex">
                            <button
                              onClick={() => setOpen(false)}
                              type="button"
                              className="-m-2.5 inline-flex items-center justify-center rounded-3xl py-3 px-3 text-white font-clash-medium bg-white/20"
                            >
                              <span className="sr-only">Open main menu</span>
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
                                  d="M6 18 18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <div className="gradient-stroke rounded-3xl shadow">
                              <Link
                                href="/contact"
                                className="inline-flex rounded-3xl py-2 px-3 text-lg font-sf leading-6 text-white bg-custom-gradient"
                              >
                                Contact us
                              </Link>
                            </div>
                          </div>
                        </nav>
                      </header>
                      <div className="relative pb-24 pt-10 p-4 lg:px-8">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                          <div className="lg:col-span-4 flex lg:inline-block">
                            <Link
                              href="/blog"
                              onClick={() => setOpen(false)}
                              className="relative p-2 lg:p-5"
                            >
                              <Image
                                src={Blog}
                                alt="blog"
                                className="hidden lg:inline-block"
                              ></Image>
                              <Image
                                src={BlogMobile}
                                alt="blog"
                                className="inline-block lg:hidden"
                              ></Image>
                            </Link>
                            <div className="relative p-3 lg:p-5">
                              <Link
                                href="/services"
                                onClick={() => setOpen(false)}
                                className="hidden lg:inline-block"
                              >
                                <Image src={Service} alt="service"></Image>
                              </Link>
                              <Link
                                href="/about"
                                className="inline-block lg:hidden"
                              >
                                <Image src={AboutMobile} alt="About"></Image>
                              </Link>
                            </div>
                          </div>
                          <div className="lg:col-span-4 items-center flex">
                            <div className="relative p-2 lg:p-5 w-full">
                              <Link
                                href="/about"
                                onClick={() => setOpen(false)}
                                className="w-full hidden lg:inline-block"
                              >
                                <Image
                                  src={About}
                                  alt="about"
                                  className="w-full"
                                ></Image>
                              </Link>
                              <Link
                                href="#ProjectSection"
                                onClick={() => setOpen(false)}
                                className="inline-block lg:hidden"
                              >
                                <Image
                                  src={ProjectMobile}
                                  alt="project"
                                ></Image>
                              </Link>
                            </div>
                          </div>
                          <div className="lg:col-span-4 flex lg:inline-block">
                            <div className="relative p-2 lg:p-5">
                              <Link href="/contact">
                                <Image
                                  src={Contact}
                                  alt="contact"
                                  className="hidden lg:inline-block"
                                ></Image>
                                <Image
                                  src={ContactMobile}
                                  alt="contact"
                                  className="inline-block lg:hidden"
                                ></Image>
                              </Link>
                            </div>
                            <div className="relative p-2 lg:p-5">
                              <Link
                                href="#ProjectSection"
                                onClick={() => setOpen(false)}
                              >
                                <Image
                                  src={Project}
                                  alt="project"
                                  className="hidden lg:inline-block"
                                ></Image>
                              </Link>
                              <Link href="/services">
                                <Image
                                  src={ServiceMobile}
                                  alt="service"
                                  className="inline-block lg:hidden"
                                ></Image>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              {/* <span className="sr-only">Shell Code</span> */}
              <Image
                className="h-6 w-[80px] sm:h-8 sm:w-[100px] lg:h-10 lg:w-[120px] xl:h-12 xl:w-auto"
                src={ShellCode}
                alt="Shell-Code"
              />
            </Link>
          </div>
          <div className="flex">
            <button
              onClick={() => setOpen(true)}
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-3xl py-3 px-3 text-white font-clash-medium bg-white/20"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5 lg:me-2"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <span className="hidden lg:inline-block">Menu</span>
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="gradient-stroke rounded-3xl shadow">
              <Link
                href="/contact"
                className="inline-flex rounded-3xl py-2 px-3 text-lg font-sf leading-6 text-white bg-custom-gradient"
              >
                Contact us
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HomeComponent;
