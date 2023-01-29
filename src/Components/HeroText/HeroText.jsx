import React from "react";
import Button from "../Button/Button";

const HeroText = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="orbitron phone:text-2xl tablet:text-6xl laptop:text-8xl text-white font-bold tracking-widest">
        <span className="rubberBand">D</span>
        <span className="rubberBand">h</span>
        <span className="rubberBand">a</span>
        <span className="rubberBand">r</span>
        <span className="rubberBand">m</span>
        <span className="rubberBand">i</span>
        <span className="rubberBand">k</span>
        <span className="rubberBand">A</span>
        <span className="rubberBand">b</span>
        <span className="rubberBand">h</span>
        <span className="rubberBand">a</span>
        <span className="rubberBand">n</span>
        <span className="rubberBand">g</span>
        <span className="rubberBand">i</span>
        {/* Dharmik Abhangi */}
      </h1>
      <h2 className="openSans phone:text-[15px] phone:text-center tablet:text-2xl laptop:text-4xl text-white phone:my-2 tablet:my-4 font-semibold tracking-wider spring">
        Mechanical Engineer | Frontend Web Developer
      </h2>
      <Button btnText={"Contact me!"} />
    </section>
  );
};

export default HeroText;
