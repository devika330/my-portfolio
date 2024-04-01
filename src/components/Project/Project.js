import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div className="projectContainer" id="projects">
      <h1 className="projectname">Projects</h1>
      <div className="projectDetail">
        <div className="projectItem">
          <h3 className="title">Driver Drowsiness Detection System</h3>
          <p className="description">
            The project “Driver Drowsiness Detection System” is to reduce the
            frequency of accidents caused by drowsy drivers, Thus improving
            transportation safety.This technology detects tiredness by using a
            webcam pointed straight at the driver's face and monitoring the
            driver's eyes. When drowsiness is identified, A warning signal is
            given to the driver to inform them.
          </p>
        </div>
        <div className="projectItem">
          <h3 className="title">Weather App</h3>
          <p className="description">
            The weather app is a web application that allows users to check the
            current weather conditions of a specific location. Users can input
            the name of a city or their current location, and the app will fetch
            and display the corresponding weather information.
          </p>
        </div>
        <div className="projectItem">
          <h3 className="title">DDoS Attack Prediction System</h3>
          <p className="description">
            DDoS attacks are types of cyber attacks that can cause significant
            damage to businesses and organizations. Hence, a system is proposed
            to predict the attacks using machine learning algorithms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
