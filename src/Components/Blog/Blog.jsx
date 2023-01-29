import React from "react";
import Button from "../Button/Button";

const Blog = () => {
  return (
    <div className="w-[260px] tablet:w-[620px] phone:h-fit tablet:h-[100px] bg-[#000000]/[0.7] flex phone:flex-col tablet:flex-row justify-center items-center">
      <div className="flex flex-col justify-center phone:items-center phone:text-justify tablet:text-left tablet:items-start pl-2 inter text-white p-2">
        <h5 className="font-extrabold text-lg">Title</h5>
        <p className="font-normal text-xs ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          hic quaerat possimus quisquam at. Aspernatur.
        </p>
      </div>
      <div>
        <Button btnText={"Read More"} />
      </div>
    </div>
  );
};

export default Blog;
