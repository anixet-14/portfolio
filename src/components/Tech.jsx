import React from "react";
import { SectionWrapper } from "../hoc";
import TechCanvas from "./canvas/balls"; // Updated import path to new balls.jsx

const Tech = () => {
  return (
    <div className="w-full h-[500px]">
      <TechCanvas />
    </div>
  );
};

export default SectionWrapper(Tech, "");
