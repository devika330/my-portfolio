import React from "react";
import { Link } from "react-scroll";
import "./TopContent.css";
function TopContent() {
  return (
    <div className="topcontent">
      <div className="topcontent_container">
        <h1>Devika B</h1>

        <p>
          I'm a passionate FrontEnd enthusiast eager to embark
          <br /> on my journey in the world of FrontEnd Development.
          <br />
          I'm excited to apply my skills and knowledge to
          <br /> real-world projects and make meaningful contributions <br />
          to the industry.
        </p>
        <a href="https://drive.google.com/file/d/1AqXom77PkdfBHW-qxoLQK5kknYQSo-hx/view?usp=drivesdk">
          <button className="downloadbutton"> Download CV</button>
        </a>
        <Link to="project" smooth={true} duration={500}>
          <button className="workbutton">My work</button>
        </Link>
      </div>
    </div>
  );
}

export default TopContent;
