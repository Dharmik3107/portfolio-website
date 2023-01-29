import React from "react";
import Button from "../Button/Button";

const ProjectText = () => {
  return (
    <div className="w-2/3 max-w-[720px] h-[450px]">
      <h1 className="text-center phone:text-xl tablet:text-4xl laptop:text-6xl openSans text-[#00FFC2] font-extrabold leading-[68px] mb-2">
        Projects
      </h1>
      <div className="w-full max-w-[720px] h-[450px] bg-black/[0.6] flex flex-col justify-center items-center px-5 rounded-lg">
        <h1 className="text-center phone:text-xl tablet:text-3xl laptop:text-4xl openSans text-[#00FFC2] font-extrabold leading-[68px] mb-5">
          Hazguard
        </h1>
        <p className="tablet:w-2/3 phone:text-sm tablet:text-lg laptop:text-xl text-white text-justify font-semibold leading-7  tracking-wide mb-10">
          We at HazGuard aim to bring together companies across various
          industries on one page to help them share hazards and solutions that
          happen in their workplaces.
        </p>
        <Button btnText={"Watch Live"} />
      </div>
    </div>
  );
};

export default ProjectText;
