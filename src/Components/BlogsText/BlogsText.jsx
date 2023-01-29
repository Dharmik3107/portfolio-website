import React from "react";
import Blog from "../Blog/Blog";

const BlogsText = () => {
  return (
    <div className="w-full max-w-[720px] h-[450px] flex flex-col justify-start items-center">
      <h1 className="text-center phone:text-xl tablet:text-4xl laptop:text-6xl openSans text-[#00FFC2] font-extrabold leading-[68px] mb-5">
        Blogs
      </h1>
      <div className="w-full max-w-[720px] h-[450px] bg-black/[0.6] flex flex-col p-5 justify-start items-center rounded-lg overflow-y-scroll scrollBar">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};

export default BlogsText;
