import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/Contact";
import ProjectSection from "@/components/OurProjects";
import Image from "next/image";
import And from "@/assets/img/and.png";
import About from "@/assets/img/about-element.png";
import Founder from "@/assets/img/user.png";

const AboutPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="relative bg-[#0D0D0D] bg-about">
          {/* <!-- Hero section --> */}
          <div className="relative isolate overflow-hidden pb-10 lg:pb-24 pt-24 lg:space-y-32 space-y-16">
            <section>
              <div className="px-6 lg:px-8 mx-auto w-full max-w-[1480px]">
                <p className="font-clash-medium text-xl sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] md:leading-[84px] text-white text-start mx-auto">
                  <span className="mb-3 inline-block  md:leading-[84px]">
                    We Sung Along{" "}
                  </span>
                  <span className="flex items-center gap-x-3">
                    <span className=" md:leading-[84px] me-6">
                      the Hardships
                    </span>
                    <Image
                      src={About}
                      alt="about"
                      className="w-[70px] sm:w-[95px] md:w-[120px] xl:w-auto about-img"
                    ></Image>
                  </span>
                  <span className="flex items-center gap-x-3">
                    <Image
                      src={And}
                      alt="and"
                      className="w-[70px] sm:w-[95px] md:w-[120px] xl:w-auto about-img"
                    ></Image>
                    <span>While We</span>
                  </span>{" "}
                  <span className=" md:leading-[84px]"> Drove Success</span>
                </p>
              </div>
            </section>
          </div>
          <div className="relative px-4 lg:px-8 max-w-7xl mx-auto">
            <div className="flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/10"></div>
            </div>
          </div>
          {/* <!-- Shellcode section --> */}
          <section className="py-10 lg:py-16">
            <div className="max-w-7xl px-4 lg:px-8 mx-auto">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 pb-0 lg:pb-20 items-center">
                <div className="lg:col-span-6">
                  <p className="text-white font-clash-medium text-2xl lg:text-5xl">
                    Founded in 2018, <br /> That&rsquo;s When We <br /> Started
                    Turning The <br /> Stone Of{" "}
                    <span className="text-[#FFEA28]">
                      Innovative <br /> Ideas Into Actions
                    </span>{" "}
                    With <br /> Crisp & Aesthatic Mobile <br /> Apps & Websites!
                  </p>
                </div>
                <div className="lg:col-span-6">
                  <div className="about-img border lg:border-[3px] border-white border-solid p-2 lg:p-4 lg:w-[500px] lg:h-[500px] w-[180px] h-[180px] rounded-full mx-auto relative top-[-10%] right-[0]">
                    <div className="border lg:border-[3px] border-white border-solid p-4 size-full rounded-full flex items-center justify-center">
                      <p className="text-center text-white font-clash-medium text-xl lg:text-4xl">
                        About us
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <!-- Service section --> */}
        <section className="bg-gray-950 pt-16 flex items-center justify-center w-full">
          <div className="px-6 lg:px-8 w-[85%]">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 pb-10 lg:pb-10 items-start">
              <div className="lg:col-span-6">
                <h2 className="text-white font-clash-medium text-4xl lg:text-[5rem] mb-3 lg:mb-0">
                  Our Core Services
                </h2>
              </div>
              <div className="lg:col-span-6">
                <p className="uppercase text-white font-clash-medium text-lg lg:text-[3.4rem] leading-[3.5rem] ">
                  We are much more then <br /> a ordinary company.
                </p>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-12 lg:gap-y-8 pb-20 items-start">
              <div className="lg:col-span-4 bg-branding h-full">
                <div className="text-white p-8 relative z-10 mb-4 lg:mb-0">
                  <h3 className="font-clash-medium text-3xl lg:text-[42px] mb-16 lg:mb-15 text-center mt-7 leading-[3.3rem]">
                    Mobile App
                    <br />
                    Development{" "}
                  </h3>
                  <p className="font-clash-regular text-xl lg:text-2xl mb-10 lg:mb-28 text-center lg:text-center">
                    We&rsquo;re not the Best Mobile App <br /> Development
                    Company in Pune, <br /> we&apos;re the only One who <br />{" "}
                    understands the requirements <br /> of the client,
                    understands <br /> importance of User Experience <br /> &
                    Design, and most importantly <br /> the budget of our
                    Clients, <br /> without compromising on the <br /> latest
                    technology, Best Mobile <br /> Development Company in Pune{" "}
                    <br /> or not? You decide!
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 bg-website mb-4 h-full">
                <div className="text-white p-8 relative z-10">
                  <h3 className="font-clash-medium text-center text-3xl lg:text-[42px] lg:mt-15 mt-10 leading-[3.3rem]">
                    Website
                    <br />
                    Development
                  </h3>
                  <p className="font-clash-regular text-xl lg:text-2xl mt-8 lg:mt-16 text-center">
                    Not your ordinary Website <br /> Developer, we craft
                    Experience <br />
                    that will STUN your audience <br /> with visual pleasure,
                    <br /> technological brilliance and crisp <br /> user
                    interface, With over 6 <br /> years of experience , we{" "}
                    <br />
                    definitely understand the <br />
                    importance of Mobile <br /> Optimization which is why we{" "}
                    <br /> develop Mobile Optimized <br /> interfaces but best
                    results
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 bg-more h-full">
                <div className="text-white p-8 relative z-10 mt-7">
                  <h3 className="lowercase font-clash-medium text-3xl lg:text-[42px] mb-10 lg:mb-24 text-center">
                    and more..
                  </h3>
                  <p className="font-clash-regular text-xl lg:text-2xl mb-10 lg:mb-28 text-center">
                    This is just a beginning, a full <br /> adventure is yet to
                    be <br />
                    explored, that will make you <br /> head over heels. Dwell
                    into <br />
                    what your business demands,
                    <br />
                    as we provide finest services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Project section --> */}
        <ProjectSection />

        {/* meet founder */}
        <section className="bg-black py-16">
          <div className="px-4 lg:px-8 relative">
            <p className="text-white font-clash-medium text-4xl lg:text-7xl mb-14">
              Meet Our Founder
            </p>
            <div className="mx-auto max-w-6xl">
              <div className="lg:flex relative mb-[250px] lg:mb-0">
                <div className="absolute top-0 left-0 flex text-white justify-center items-center lg:h-[148px] lg:w-[148px] h-[60px] w-[60px] rounded-full bg-[#EB3324] font-clash-medium text-base lg:text-5xl z-30">
                  CEO
                </div>
                <div className="inline-block border lg:border-[3px] border-white rounded-full text-gray-400 w-[270px] h-[270px] lg:w-[550px] lg:h-[550px] p-3 lg:p-5 relative right-[-20px] z-10">
                  <div className="border lg:border-[3px] border-white rounded-full p-3 lg:p-6 text-center size-full flex items-center justify-center text-xs lg:text-xl font-clash-medium">
                    I&apos;m Harshal Adarkar, founder of
                    <br />
                    ShellcodeIT IT Services.With over 5
                    <br />
                    years of experience in the IT
                    <br />
                    industry, I specialized in
                    <br />
                    transforming ideas into captivating
                    <br />
                    digital experiences.from
                    <br />
                    innovative websites to advanced
                    <br />
                    mobile apps and e-commerce
                    <br />
                    solutions, Shellcode delivers the
                    <br />
                    experience and tools to bring your
                    <br />
                    vision to life.
                  </div>
                </div>
                <div className="border lg:border-[3px] border-white rounded-full text-white w-[260px] h-[260px] lg:w-[550px] lg:h-[550px] p-3 lg:p-5 lg:relative lg:left-[-20px] z-20 absolute top-[71%] left-[24%] lg:top-0 about-img">
                  <Image src={Founder} alt="Founder"></Image>
                  <div className="font-clash-medium text-base lg:text-3xl text-black inline-flex px-6 py-2 lg:px-8 lg:py-7 absolute right-0 bottom-0 bg-name">
                    Harshal Adarkar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact*/}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
