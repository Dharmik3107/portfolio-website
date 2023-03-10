import React from "react";
import AboutText from "../../Components/AboutText/AboutText";
import Logo from "../../Components/Logo/Logo";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Socials from "../../Components/Socials/Socials";

const About = () => {
  return (
    <main className="w-[100vw] h-[100vh] aboutImage flex justify-center items-center">
      <Logo />
      <Sidebar />
      <AboutText />
      <Socials />
    </main>
  );
};

export default About;
