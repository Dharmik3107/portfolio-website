import "./Loader.css";
import React from "react";

const Loader = () => {
  return (
    <main className="w-[100vw] h-[100vh] bg-white flex justify-center items-center">
      <div className="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
};

export default Loader;
