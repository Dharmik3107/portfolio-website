import React from "react";
import BlogsText from "../../Components/BlogsText/BlogsText";
import Logo from "../../Components/Logo/Logo";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Socials from "../../Components/Socials/Socials";

const Blogs = () => {
  return (
    <main className="w-[100vw] h-[100vh] blogsImage flex justify-center items-center">
      <Logo />
      <Sidebar />
      <BlogsText />
      <Socials />
    </main>
  );
};

export default Blogs;
