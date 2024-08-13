import Image from "next/image";
import BlogImage from "@/assets/img/blog-img.png";

const BlogPic = () => {
  return (
    <div>
      <div className="bg-blog-image p-4 lg:p-5 rounded-md">
        <Image src={BlogImage} alt="Blog Picture"></Image>
      </div>
    </div>
  );
};
export default BlogPic;
