import React from "react";

// Issue item accepts a single project as a prop
// This component is solely responsible for displaying the specific information for a given project

//Project items should be displayed in a row as cards
const ProjectItem = ({ project }) => {
  return (
    <div className="project card">
      <i className="large github middle aligned icon"></i>
      <div className="proj-content" style="background-image:">
        <a className="proj-title" href={project.git_url}>
          {project.title}
        </a>
        <div className="description">{project.description}</div>
      </div>
    </div>
  );
};

export default ProjectItem;
