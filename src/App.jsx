import "./App.css";
import { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import Loader from "./Components/Loader/Loader";

const Hero = lazy(() => import("./Pages/Hero/Hero"));
const Skills = lazy(() => import("./Pages/Skills/Skills"));
const Projects = lazy(() => import("./Pages/Projects/Projects"));
const Blogs = lazy(() => import("./Pages/Blogs/Blogs"));
const About = lazy(() => import("./Pages/About/About"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route exact path="/" element={<Hero />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/skills" element={<Skills />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/blogs" element={<Blogs />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
