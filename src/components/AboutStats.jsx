"use client";
import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const faqs = [
  {
    stat: "04",
    title: "Years of Experience",
    answer:
      "These years have made us achieve astonishing success results in a platter full of challenges and bonanza for our coolest team.",
  },
  {
    stat: "234",
    title: "Project Completed",
    answer:
      "Our work speaks louder than our words can. We make the projects go easy-peasy with the perfect knot of expertise and confidence.",
  },
  {
    stat: "500+",
    title: "Happy Customers",
    answer:
      "When our clients are happy, we are the happiest. We stir the world for them to deliver ultimate satisfaction and excellence. ",
  },
  {
    stat: "69+",
    title: "Web & App",
    answer:
      "Our team takes pride at delivering what they are specialized in. Web and App Development is where our passion and strength lies.",
  },
  // More questions...
];

const AboutStats = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index, open) => {
    if (index == openIndex) setOpenIndex(null);
    else setOpenIndex(index);
  };

  return (
    <dl className="mt-0 space-y-6 divide-y divide-white/10">
      {faqs.map((faq, index) => (
        <Disclosure
          as="div"
          key={index}
          className="p-4 lg:p-5 xl:p-8 xl:py-6 bg-[#212121] rounded-[34px]"
        >
          {({ open }) => (
            <>
              <dt>
                <DisclosureButton
                  className="flex w-full items-center justify-between text-left text-white"
                  onClick={() => handleToggle(index, open)}
                >
                  <div className="flex items-center ">
                    <span className="font-clash-bold text-3xl lg:text-5xl  2xl:text-[80px] me-3">
                      {faq.stat}
                    </span>
                    <span className="font-clash-medium text-lg lg:text-2xl 2xl:text-3xl">
                      {faq.title}
                    </span>
                  </div>
                  <span className="ml-6 flex h-7 items-center">
                    {index == openIndex ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="lg:w-8 lg:h-8 w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 15.75 7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="lg:w-8 lg:h-8 w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )}
                  </span>
                </DisclosureButton>
              </dt>
              {index == openIndex && (
                <DisclosurePanel as="dd" static={true} className="mt-2 pr-12">
                  <p className="text-lg leading-7 text-white/60 font-clash-regular">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              )}
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  );
};

export default AboutStats;
