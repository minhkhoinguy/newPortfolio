import React from "react";
import "../../styles/Resume.css";

export default function Resume() {
  return (
    <div className="ResumePage">
      <h1 className="title">Resume:</h1>
      <div className="downloadResume">
        <a
          href={require("../../assets/MinhKhoi_Nguyen_Resume.PDF")} target="_blank"
          // download="MinhKhoi_Nguyen_Resume.PDF"
        >
          <button className="ResumeBtn ">View/Download my Resume</button>
        </a>
      </div>
      <div className="mySkills">
        <div className="frontEnd">
          <div className="ResumeRole">Front-end Proficiencies</div>
          <div className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </div>
        </div>
        <div className="backEnd">
          <div className="ResumeRole">Back-end Proficiencies</div>
          <div className="skills">
            <li>API</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MonggoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </div>
        </div>
      </div>
    </div>
  );
}
