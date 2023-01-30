import React, { useState } from "react";
import Developer from "../Developer/Developer";
import Mechanical from "../Mechanical/Mechanical";
import Toggle from "../Toggle/Toggle";

const SkillsText = () => {
  const [toggleSwitch, setToggleSwitch] = useState(false);
  return (
    <>
      <Toggle setToggleSwitch={setToggleSwitch} />
      <div className="phone:w-5/6 tablet:w-2/3 max-w-[720px] h-[450px]">
        <h1 className="text-center phone:text-3xl tablet:text-4xl laptop:text-6xl openSans text-[#00FFC2] font-extrabold leading-[68px] mb-1">
          Skills
        </h1>
        {toggleSwitch ? <Mechanical /> : <Developer />}
        {/* <Developer /> */}
        {/* <Mechanical /> */}
      </div>
    </>
  );
};

export default SkillsText;
