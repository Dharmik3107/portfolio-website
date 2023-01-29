import React from "react";
import HeroText from "../../Components/HeroText/HeroText";
import Logo from "../../Components/Logo/Logo";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Socials from "../../Components/Socials/Socials";

const Hero = () => {
  return (
    <main className="w-[100vw] h-[100vh] heroImage flex justify-center items-center">
      <Logo />
      <Sidebar />
      <HeroText />
      <Socials />
    </main>
  );
};

export default Hero;
