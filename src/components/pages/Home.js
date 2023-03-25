import React from "react";
import Typical from "react-typical";
import '../../styles/HomePage.css'

export default function Home() {
  return (
    <div className="HomePage">
      <div>
        <div className="profileName">
          <span className="profile-name">
            {""}
            Hello, I'm <span className="highlighted-text">MinhKhoi</span>
          </span>
        </div>
        <div className="avatar">
          <img id='avatar' src={require("../../assets/avatar.jpg")} />
        </div>
        <div className="profileRole">
          <span className="profile-role">
            {""}
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Full Stack Developer",
                  1000,
                  "React/React Native Dev",
                  1000,
                  "Font-end Dev",
                  1000,
                  "JavaScript Dev",
                  1000,
                  "Ethusiastic Dev",
                  1000,
                ]}
              />
            </h1>
            <span className="profile-role-tagline">
              Potential developers with a knack for building applications with
              frontend looking for new opportunities
            </span>
          </span>
        </div>
        <div className="Resume">
          <a
            href={require("../../assets/MinhKhoi_Nguyen_Resume.PDF")}
            download="MinhKhoi_Nguyen_Resume.PDF"
          >
            <button className="btn highlighted-btn" id='resumeBtn'>Get Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}
