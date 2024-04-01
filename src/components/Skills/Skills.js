import React from "react";
import "./Skills.css";
import javascript from "../../assets/javascript-logo.webp";
import sql from "../../assets/sql-logo.jpeg";
import css from "../../assets/css-logo.png";
import html from "../../assets/html-logo.jpg";
import python from "../../assets/python-logo.png";
import java from "../../assets/Java.jpg";
const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1 className="Abouttitle">About Me</h1>

      <p className="me">
        I have Completed my bachelor's degree in Computer Science and
        Engineering at GCE,Thanjavur. With a solid foundation in Computer
        Science and Engineering, I possess a diverse skill set encompassing
        various programming languages and technologies.
      </p>

      <h2 className="myskill">My Skills</h2>
      <div className="tech-stack">
        <div className="skillset">
          <span>
            Java
            <img src={java} alt="java" />
          </span>
          <span>
            Python <img src={python} alt="python" />
          </span>
          <span>
            Javascript
            <img src={javascript} alt="javascript" />
          </span>
          <span>
            HTML
            <img src={html} alt="html" />
          </span>
          <span>
            CSS
            <img src={css} alt="css" />
          </span>
          <span>
            MySQL <img src={sql} alt="sql" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Skills;
