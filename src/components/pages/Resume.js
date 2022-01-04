import react from "react";

export default function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <div className="resume-points">
        <a
          href="./assets/resume/cornelius_smith_resume.docx.pdf"
          target="_blank"
        >
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
