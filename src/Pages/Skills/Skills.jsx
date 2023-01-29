import React from "react";
import Logo from "../../Components/Logo/Logo";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SkillsText from "../../Components/SkillsText/SkillsText";
import Socials from "../../Components/Socials/Socials";
const Skills = () => {
  return (
    <main className="w-[100vw] h-[100vh] skillsImage flex justify-center items-center">
      <Logo />
      <Sidebar />
      <SkillsText />
      <Socials />
    </main>
  );
};

export default Skills;
