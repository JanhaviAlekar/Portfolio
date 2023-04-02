import React from "react";
import Fade from "react-reveal/Fade";
import Svg from "./svg";

function Skill() {
  return (
    <Fade left>
      <div
        id="skill"
        className="text-white relative text-center h-auto py-4 lg:h-80"
      >
        {" "}
        <div id="triangle-lefts" className="absolute "></div>
        <div id="triangle-rights" className="absolute "></div>
        <h1 className="pt-5 pb-2 font-medium text-2xl">Skills</h1>
        <p className="pb-4 z-10 pt-2">
          I love to learn new things and expirement with new technologies.
          <br></br>Here are some skills I have
        </p>
        <div className="flex justify-center">
          <Svg />
        </div>
      </div>
    </Fade>
  );
}
export default Skill;
