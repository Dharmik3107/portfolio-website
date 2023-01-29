import React from "react";
import Button from "../Button/Button";

const Blog = () => {
  return (
    <div className="w-full phone:h-fit tablet:h-[100px] laptop:h-[100px] mb-5 flex phone:flex-col px-2 tablet:flex-row justify-center items-center border-2 border-solid border-[#00FFc2]">
      <div className="flex flex-col justify-center phone:items-center phone:text-justify tablet:text-left tablet:items-start inter text-white p-2">
        <h5 className="font-extrabold text-lg">Title</h5>
        <p className="font-normal text-xs ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div>
        <Button btnText={"Read More"} />
      </div>
    </div>
  );
};

export default Blog;
