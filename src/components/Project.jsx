import React from "react";
import ReactDom from "react-dom";
import MediaCard from "./Card";
import projects from "./projectInfo";

function createCard(info) {
  return (
    <MediaCard
      imgSrc={info.imgSrc}
      name={info.name}
      title={info.title}
      description={info.description}
      git={info.git}
      showMore={info.showMore}
    />
  );
}
function Project() {
  return (
    <div id="Project">
      <div className="define  h-full">
        <h1 className="py-5 font-medium text-3xl text-center">Projects</h1>
        <div className="box-border-solids gap-2 shadow-xl grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
          {projects.map(createCard)}
        </div>
      </div>
      <hr className="invisible" />
    </div>
  );
}
export default Project;
