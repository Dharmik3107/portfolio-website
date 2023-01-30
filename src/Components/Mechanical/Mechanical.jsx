import React from "react";

const Mechanical = () => {
  return (
    <div className="w-full max-w-[720px] h-[450px] bg-black/[0.6] flex flex-col justify-center items-center px-5 rounded-lg">
      <h2 className="text-center phone:text-xl tablet:text-2xl laptop:text-4xl openSans text-[#00FFC2] font-extrabold leading-[68px] mb-5">
        Mechanical Design Engineer
      </h2>
      <div className="w-full phone:px-0 tablet:px-4">
        <div className="w-full h-10 flex phone:flex-col tablet:flex-row  tablet:justify-between items-center mr-5 phone:my-3 tablet:my-0">
          <label
            htmlFor="cadcam"
            className="phone:text-sm tablet:text-lg laptop:text-xl text-white font-semibold leading-7 text-justify tracking-wide phone:mb-2 tablet:mb-0"
          >
            CAD & CAM
          </label>
          <progress
            id="cadcam"
            value="90"
            max="100"
            className="bg-black/[0.4] h-[2px] phone:w-full  tablet:w-56 laptop:w-72 text-[#00FFC2] progressValue"
          />
        </div>
        <div className="w-full h-10 flex phone:flex-col tablet:flex-row tablet:justify-between items-center mr-5 phone:my-3 tablet:my-0">
          <label
            htmlFor="fea"
            className="phone:text-sm tablet:text-lg laptop:text-xl text-white font-semibold leading-7 text-justify tracking-wide phone:mb-2 tablet:mb-0"
          >
            FEA (Ansys)
          </label>
          <progress
            id="fea"
            value="92"
            max="100"
            className="bg-black/[0.4] h-[2px] phone:w-full  tablet:w-56 laptop:w-72 text-[#00FFC2] progressValue"
          />
        </div>
        <div className="w-full h-10 flex phone:flex-col tablet:flex-row tablet:justify-between items-center mr-5 phone:my-3 tablet:my-0">
          <label
            htmlFor="additive"
            className="phone:text-sm tablet:text-lg laptop:text-xl text-white font-semibold leading-7 text-justify tracking-wide phone:mb-2 tablet:mb-0"
          >
            Additive Mfg.
          </label>
          <progress
            id="additive"
            value="80"
            max="100"
            className="bg-black/[0.4] h-[2px] phone:w-full  tablet:w-56 laptop:w-72 text-[#00FFC2] progressValue"
          />
        </div>
        <div className="w-full h-10 flex phone:flex-col tablet:flex-row tablet:justify-between items-center mr-5 phone:my-3 tablet:my-0">
          <label
            htmlFor="manufacturing"
            className="phone:text-sm tablet:text-lg laptop:text-xl text-white font-semibold leading-7 text-justify tracking-wide phone:mb-2 tablet:mb-0"
          >
            Manufacturing
          </label>
          <progress
            id="manufacturing"
            value="86"
            max="100"
            className="bg-black/[0.4] h-[2px] phone:w-full  tablet:w-56 laptop:w-72 text-[#00FFC2] progressValue"
          />
        </div>
      </div>
    </div>
  );
};

export default Mechanical;
