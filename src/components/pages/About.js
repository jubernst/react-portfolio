import React from "react";

const styles = {
  aboutContainer: {
    background: "#fefae0",
    color: "#bc6c25",
    display: "flex",
    justifyContent: "center",
  },
  aboutText: {
    width: "75%",
    height: "90%",
    fontSize: "30px",
    textAlign: "center",
    fontFamily: "Trebuchet MS",
    marginTop: "50px",
    marginBottom: "50px",
  },
};

export default function About() {
  return (
    <div className="about" style={styles.aboutContainer}>
      <p style={styles.aboutText}>
        I'm a 22 year old full-stack developer who uses Node.JS, HTML/CSS/JS,
        and React. Check out my portfolio to see some of my work!
      </p>
    </div>
  );
}
