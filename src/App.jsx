import { useState } from "react";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import { Routes, Route } from "react-router-dom";
import Hero from "./Pages/Hero/Hero";
import About from "./Pages/About/About";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Hero />}></Route>
      <Route exact path="/about" element={<About />}></Route>
    </Routes>
  );
}

export default App;
