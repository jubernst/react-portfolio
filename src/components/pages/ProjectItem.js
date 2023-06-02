import React from "react";

const styles = {
  projectItem: {
    fontFamily: "Trebuchet MS",
    marginRight: "25px",
    marginLeft: "25px",
    // display: "flex",
    // flexWrap: "column",
    // justifyContent: "center",
  },
  projectTitle: {
    width: "100%",
    fontSize: "30px",
    color: "#283618",
    textAlign: "center",
  },
  projectDescription: {
    fontSize: "23px",
    textAlign: "center",
    width: "100%",
  },
};
const ProjectItem = ({ project }) => {
  return (
    <div className="project-item" style={styles.projectItem}>
      <a
        className="project-title"
        href={project.git_url}
        style={styles.projectTitle}
      >
        {project.title}
      </a>
      <div className="project-description" styles={styles.projectDescription}>
        {project.description}
      </div>
    </div>
  );
};

export default ProjectItem;
