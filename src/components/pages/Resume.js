import React from "react";
import PDF from "../resume/cornelius_smith_resume.pdf";

export default function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <div className="resume-points">
        <a href={PDF} target="_blank" rel="noreferrer">
          To download my resume as a PDF.
        </a>
        <h2>Known Technologies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Node.js</li>
          <li>APIs</li>
          <li>Express</li>
          <li>MySQL - Sequelize</li>
          <li>MongoDB - Mongoose</li>
          <li>React</li>
        </ul>
      </div>
    </>
  );
}
