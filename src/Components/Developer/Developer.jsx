import React from "react";

const Developer = () => {
  return (
    <div className="w-full max-w-[720px] h-[450px] bg-black/[0.6] flex flex-col justify-center items-center px-5 rounded-lg">
      <h2 className="text-center phone:text-lg tablet:text-2xl laptop:text-4xl openSans text-[#00FFC2] font-extrabold leading-[68px] mb-5">
        Frontend Web Development
      </h2>
      <div className="w-4/5 phone:px-0 tablet:px-1 laptop:px-4">
        <div className="w-full h-10 flex phone:flex-col tablet:flex-row  tablet:justify-between items-center mr-5 phone:my-3 tablet:my-0">
          <label
            htmlFor="htmlCSS"
            className="phone:text-xs tablet:text-lg laptop:text-xl text-white font-semibold leading-7 tracking-wide phone:mb-2 tablet:mb-0"
          >
            HTML5 & CSS3
          </label>
          <progress
            id="htmlCSS"
            value="90"
            max="100"
            className="bg-black/[0.4] h-[2px] phone:w-full  tablet:w-52 laptop:w-72 text-[#00FFC2] progressValue"
          />
        </div>
        <div className="w-full h-10 flex phone:flex-col tablet:flex-row  tablet:justify-between items-center mr-5 phone:my-3 tablet:my-0">
          <label
            htmlFor="jsAjax"
            className="phone:text-xs tablet:text-lg laptop:text-xl text-white font-semibold leading-7 tracking-wide phone:mb-2 tablet:mb-0"
          >
            Javascript & Ajax
          </label>
          <progress
            id="jsAjax"
            value="92"
            max="100"
            className="bg-black/[0.4] h-[2px] phone:w-full  tablet:w-52 laptop:w-72 text-[#00FFC2] progressValue"
          />
        </div>
        <div className="w-full h-10 flex phone:flex-col tablet:flex-row  tablet:justify-between items-center mr-5 phone:my-3 tablet:my-0">
          <label
            htmlFor="reactRedux"
            className="phone:text-xs tablet:text-lg laptop:text-xl text-white font-semibold leading-7 tracking-wide phone:mb-2 tablet:mb-0"
          >
            React & Redux
          </label>
          <progress
            id="reactRedux"
            value="80"
            max="100"
            className="bg-black/[0.4] h-[2px] phone:w-full  tablet:w-52 laptop:w-72 text-[#00FFC2] progressValue"
          />
        </div>
        <div className="w-full h-10 flex phone:flex-col tablet:flex-row  tablet:justify-between items-center mr-5 phone:my-3 tablet:my-0">
          <label
            htmlFor="tailboot"
            className="phone:text-xs tablet:text-lg laptop:text-xl text-white font-semibold leading-7 tracking-wide phone:mb-2 tablet:mb-0"
          >
            TailwindCSS
          </label>
          <progress
            id="tailboot"
            value="86"
            max="100"
            className="bg-black/[0.4] h-[2px] phone:w-full  tablet:w-52 laptop:w-72 text-[#00FFC2] progressValue"
          />
        </div>
      </div>
    </div>
  );
};

export default Developer;
