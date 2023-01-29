import React from "react";
import HeroText from "../../Components/HeroText/HeroText";
import Logo from "../../Components/Logo/Logo";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Hero = () => {
  return (
    <div className="w-[100vw] h-[100vh] heroImage flex justify-center items-center">
      <Logo />
      <Sidebar />
      <HeroText />
    </div>
  );
};

export default Hero;
