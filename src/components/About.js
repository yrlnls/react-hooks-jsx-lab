import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        I am a front-end developer with a particular interest in making things
        simple and automating daily tasks which can result in saving much time
        and prevent errors.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
