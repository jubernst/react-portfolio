import React from "react";

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <div className="project-image" style={project.image}>
        <a className="project-title" href={project.git_url}>
          {project.title}
        </a>
        <div className="project-description">{project.description}</div>
      </div>
    </div>
  );
};

export default ProjectItem;
