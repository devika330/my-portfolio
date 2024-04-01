import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <Link to="about" smooth={true} duration={500}>
        <h4>About me</h4>
      </Link>
      <Link to="skills" smooth={true} duration={500}>
        <h4>Skills</h4>
      </Link>
      <Link to="project" smooth={true} duration={500}>
        <h4>Project</h4>
      </Link>
      <Link to="contact" smooth={true} duration={500}>
        <h4>Contact</h4>
      </Link>
    </div>
  );
};

export default Header;
