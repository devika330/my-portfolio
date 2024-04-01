import React from "react";
import { Element } from "react-scroll";
import instagram from "../../assets/Instagram_logo_2016.svg.webp";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedIn_PNG29.png";
import "./Contact.css";
function Contact() {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact_container">
        <p>
          Email : <span>devikabalu368@gmail.com</span>
        </p>
        <p>
          Github Username : <span>devika330</span>
        </p>
        <div classname="links">
          <a
            href="https://www.linkedin.com/in/devika-b-a2597724b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin" className="link"></img>
          </a>
          <a
            href=" https://github.com/devika330/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" className="link" />
          </a>

          <img src={instagram} alt="instagram" className="link" />
        </div>
      </div>
    </Element>
  );
}

export default Contact;
