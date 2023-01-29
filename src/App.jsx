import { useState } from "react";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import { Routes, Route } from "react-router-dom";
import Hero from "./Pages/Hero/Hero";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Hero />}></Route>
    </Routes>
  );
}

export default App;
