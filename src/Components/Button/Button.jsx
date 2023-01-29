import React from "react";

const Button = ({ btnText }) => {
  return (
    <button className="phone:w-[170px] tablet:w-[230px] phone:h-[35px] tablet:h-[50px] border-solid border-2 border-[#00FFC2] text-[#00FFC2] font-normal openSans phone:text-[17px] tablet:text-[22px] leading-[30px] tracking-widest animateButton m-2">
      {btnText}
    </button>
  );
};

export default Button;
