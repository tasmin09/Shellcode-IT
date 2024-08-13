import Image from "next/image";
import ReadMore from "@/assets/img/read-more.svg";
import Link from "next/link";
const BlogDetail = () => {
  return (
    <div>
      <div className="text-white lg:space-y-5 space-y-3 mt-5 w-full">
        <p className="date font-sf-bold text-white/50 text-base lg:text-2xl">
          12 Jan 2024
        </p>
        <p className="title font-sf-bold text-white text-2xl lg:text-4xl">
          Dare to Stand Out: Navigating Differentiation in the age of “Blending”
        </p>
        <p className="title font-sf text-white text-base lg:text-lg mb-4">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus.
        </p>
        <Link
          href="/blog/blog-detail"
          className="text-[#FF0000] font-sf-bold uppercase inline-flex items-center gap-x-3"
        >
          <span>Read More</span>{" "}
          <span>
            <Image src={ReadMore} alt="Read More" />
          </span>
        </Link>
      </div>
    </div>
  );
};
export default BlogDetail;
