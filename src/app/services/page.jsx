import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCarousel from "@/components/ServiceCarousel"

const ServicePage = () => {
    return (
        <div className="bg-service bg-[#0D0D0D]">
            <Header />
            <section className="pt-48 pb-0 lg:pb-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    <p className="subhead lead tracking-normal lg:tracking-[15px] uppercase text-[#E0E0E0] font-sf-medium lg:text-xl text-left lg:text-center mb-5">Our Services</p>
                    <div className="h-8 hidden lg:flex items-center justify-start w-full">
                        <div className="bg-white shadow-sm h-1 w-full">
                            <div className="relative h-2 flex items-center justify-end w-[60%] top-[-2px]">
                                <div className="absolute top-0 bottom-0 left-0 w-full bg-progress-custom"></div>
                                <div className="relative bg-white font-medium text-sm size-6 rounded-full right-[-3px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ServiceCarousel />
            <Footer />
        </div>
    )
}
export default ServicePage