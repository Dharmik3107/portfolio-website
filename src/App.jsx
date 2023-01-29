import { useState } from "react";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import { Routes, Route } from "react-router-dom";
import Hero from "./Pages/Hero/Hero";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Hero />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/skills" element={<Skills />}></Route>
      <Route exact path="/projects" element={<Projects />}></Route>
      <Route exact path="/blogs" element={<Blogs />}></Route>
    </Routes>
  );
}

export default App;
