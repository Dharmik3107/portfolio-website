import React from "react";
import AboutText from "../../Components/AboutText/AboutText";
import HeroText from "../../Components/HeroText/HeroText";
import Logo from "../../Components/Logo/Logo";
import Sidebar from "../../Components/Sidebar/Sidebar";

const About = () => {
  return (
    <main className="w-[100vw] h-[100vh] aboutImage flex justify-center items-center">
      <Logo />
      <Sidebar />
      <AboutText />
    </main>
  );
};

export default About;
