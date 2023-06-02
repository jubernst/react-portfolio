import React from "react";
import ProjectItem from "./ProjectItem";

// Display projects
const Portfolio = ({ projects }) => {
  const renderProjects = projects.map((project) => {
    return <ProjectItem key={project.id} project={project} />;
  });
  return <div className="project row">{renderProjects}</div>;
};

export default Portfolio;
