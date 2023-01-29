import React from "react";
import Logo from "../../Components/Logo/Logo";
import ProjectText from "../../Components/ProjectText/ProjectText";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Socials from "../../Components/Socials/Socials";
const Projects = () => {
  return (
    <main className="w-[100vw] h-[100vh] projectsImage flex justify-center items-center">
      <Logo />
      <Sidebar />
      <ProjectText />
      <Socials />
    </main>
  );
};

export default Projects;
