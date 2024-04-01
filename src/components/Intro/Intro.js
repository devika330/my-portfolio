import React from "react";
import { Element } from "react-scroll";
import TopContent from "../TopContent/TopContent";
import "./Intro.css";
function Intro() {
  return (
    <Element name="about" className="intro">
      <TopContent />
    </Element>
  );
}

export default Intro;
