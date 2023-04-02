import React from "react";
import Nav from "./nav";
function First() {
  return (
    <div id="home" className="main-div">
      <Nav />
      <div>
        <div id="triangle-right1"></div>
        <div id="triangle-left1"></div>
      </div>
      <div className="main-title-section">
        <h1 className="main-title-sub">I'M </h1>
        <h1 className="main-title">JANHAVI</h1>
        <h1 className="main-title-sub second">
          Web developer and c++ programmer
        </h1>
      </div>
      <div>
        <div id="triangle-right"></div>
        <div id="triangle-left"></div>
      </div>
    </div>
  );
}
export default First;
