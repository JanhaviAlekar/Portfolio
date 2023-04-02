import React from "react";
import Fade from "react-reveal/Fade";
function About() {
  return (
    <Fade left>
      <div className="relative">
        <div
          id="About"
          className=" ml-14 lg:ml-32 lg:mr-32 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2"
        >
          <div className="pl-8 sm:pl-12">
            <img src="../images/images_low.png" alt="img" />
          </div>

          <div className="text-white  h-full bg-black text-center pl-8 sm:pl-12 pt-14 md:pt-12 sm:pt-4">
            <div id="triangle-rights1" className="absolute "></div>
            <div id="triangle-lefts1" className="absolute "></div>
            <h1 className="text-white text-2xl font-medium text-center pb-2 ">
              About Me
            </h1>
            <p>
              I am a self taught developer. Pursuing a degree in computer
              science and engineering.
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
export default About;
