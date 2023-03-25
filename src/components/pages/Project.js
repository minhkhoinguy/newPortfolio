import React from "react";
import '../../styles/Project.css'

export default function Project() {
  return (
    <div id="myProject">
      <h1 className="title">My Project:</h1>
      <div className="project">
        <div className="lineone">
          <div className="myproject">
            <a
              href="https://github.com/minhkhoinguy/project-2-Fantasy-Land"
              target="_blank"
            >
              <h3>Fantasy Land</h3>
            </a>
            <a href="https://calm-fjord-53373.herokuapp.com/" target="_blank">
              <img
                src={require("../../assets/fantasyland.gif")}
                alt="fantasyland-screenshot"
                className="screenshot"
              />
            </a>
          </div>
          <div className="myproject">
            <a
              href="https://github.com/minhkhoinguy/Weather-Dashboard"
              target="_blank"
            >
              <h3>Weather Dashboard</h3>
            </a>
            <a
              href="https://minhkhoinguy.github.io/Weather-Dashboard/"
              target="_blank"
            >
              <img
                src={require("../../assets/weather.gif")}
                alt="Weather-Dashboard-screenshot"
                className="screenshot"
              />
            </a>
          </div>
        </div>
        <div className="linetwo">
          <div className="myproject">
            <a
              href="https://github.com/minhkhoinguy/Project-1-Reel-Meal"
              target="_blank"
            >
              <h3>Reel Meal</h3>
            </a>
            <a
              href="https://njscc.github.io/group_project_one/"
              target="_blank"
            >
              <img
                src={require("../../assets/reelmeal.gif")}
                alt="reel-meal-screenshot"
                className="screenshot"
              />
            </a>
          </div>
          <div className="myproject">
            <a
              href="https://github.com/minhkhoinguy/Work-Day-Scheduler"
              target="_blank"
            >
              <h3>Day Planner</h3>
            </a>
            <a
              href="https://minhkhoinguy.github.io/Work-Day-Scheduler/"
              target="_blank"
            >
              <img
                src={require("../../assets/planner.gif")}
                alt="day-planner-sreenshot"
                className="screenshot"
              />
            </a>
          </div>
        </div>
        <div className="linethree">
          <div className="myproject">
            <a href="https://github.com/minhkhoinguy/Tech-Blog" target="_blank">
              <h3>Tech Blog</h3>
            </a>
            <a href="https://mkn-tech-blog.herokuapp.com/" target="_blank">
              <img
                src={require("../../assets/techblog.gif")}
                alt="tech-blog-screenshot"
                className="screenshot"
              />
            </a>
          </div>
          <div className="myproject">
            <a
              href="https://github.com/minhkhoinguy/Social-Network-API"
              target="_blank"
            >
              <h3>Social Network API</h3>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1qBI0iZQtojud64JIuXN8WZK3vrJGbFlO"
              target="_blank"
            >
              <img
                src={require("../../assets/SocialNetworkAPI.gif")}
                alt="SocialNetworkAPI-sreenshot"
                className="screenshot"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
