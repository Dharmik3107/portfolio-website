import React from "react";

const AboutText = () => {
  return (
    <div className="w-2/3 max-w-[720px] h-[450px] bg-black/[0.4] flex flex-col justify-center items-start px-5 rounded-lg">
      <h1 className="phone:text-xl tablet:text-4xl laptop:text-6xl openSans text-[#00FFC2] font-extrabold leading-[68px] mb-6">
        Only Me and my Self
      </h1>
      <p className="phone:text-xs tablet:text-lg laptop:text-xl text-white font-semibold leading-7 mb-2 text-justify tracking-wide">
        I was born and grew up in India. I love to travel across peaceful places
        like Munnar, Kerala. I love to read books that can help me to grow my
        mindset.
      </p>
      <p className="phone:text-xs tablet:text-lg laptop:text-xl text-white font-semibold leading-7 mt-2 text-justify tracking-wide">
        Technically I am a Mechanical Engineer but by skill, I am a Combo of
        Mechanical and Programmer. I am a Frontend Developer adept at working
        with technologies like React JS, Redux, Tailwind CSS, and building APIs
        in the backend using Node JS.
      </p>
    </div>
  );
};

export default AboutText;
