import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { NavLink, useLocation } from "react-router-dom";

const SidebarComponent = () => {
  const [isOpen, setOpen] = useState(false);
  const path = useLocation().pathname;
  return (
    <>
      <div className="absolute top-5 right-5 z-30">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color={`${isOpen ? "#00FFC2" : "#FFFFFF"}`}
          label="Show menu"
        />
      </div>
      <nav
        className={`absolute top-0 right-0 w-48 h-[100vh] bg-white flex flex-col justify-center items-center gap-8 text-xl font-semibold z-20 ${
          isOpen ? "slideIn" : "slideOut"
        }`}
        role="navigation"
      >
        <NavLink
          to="/"
          className={`navLink ${path === "/" ? "active" : ""}`}
          tabIndex={isOpen ? "0" : "-1"}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={`navLink ${path === "/about" ? "active" : ""}`}
          tabIndex={isOpen ? "0" : "-1"}
        >
          About
        </NavLink>
        <NavLink
          to="/skills"
          className={`navLink ${path === "/skills" ? "active" : ""}`}
          tabIndex={isOpen ? "0" : "-1"}
        >
          Skills
        </NavLink>
        <NavLink
          to="/projects"
          className={`navLink ${path === "/projects" ? "active" : ""}`}
          tabIndex={isOpen ? "0" : "-1"}
        >
          Projects
        </NavLink>
        <NavLink
          to="/blogs"
          className={`navLink ${path === "/blogs" ? "active" : ""}`}
          tabIndex={isOpen ? "0" : "-1"}
        >
          Blogs
        </NavLink>
        <NavLink
          to="/contact"
          className={`navLink ${path === "/contact" ? "active" : ""}`}
          tabIndex={isOpen ? "0" : "-1"}
        >
          Contact
        </NavLink>
      </nav>
    </>
  );
};

export default SidebarComponent;
