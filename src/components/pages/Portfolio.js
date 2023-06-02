import React from "react";
import ProjectItem from "./ProjectItem";

const styles = {
  projectStyle: {
    background: "#fefae0",
    display: "flex",
    justifyContent: "space-between",
    height: "",
  },
};

// Display projects
const Portfolio = ({ projects }) => {
  const renderProjects = projects.map((project) => {
    return <ProjectItem key={project.id} project={project} />;
  });
  return (
    <div className="project" style={styles.projectStyle}>
      {renderProjects}
    </div>
  );
};

export default Portfolio;
