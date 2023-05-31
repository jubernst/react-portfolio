import React from "react";
import ProjectItem from "./ProjectItem";
// import projects

const Portfolio = ({ projects }) => {
  const renderCards = projects.map((project) => {
    return <ProjectItem key={project.id} project={project} />;
  });
  return <div className="project row">{renderCards}</div>;
};

export default Portfolio;
