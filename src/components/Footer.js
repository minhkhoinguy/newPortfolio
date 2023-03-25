import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="contact">
      <a href="https://github.com/minhkhoinguy" target="_blank">
        <i className="fa fa-brands fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/minhkhoi-nguyen-3a8b82237/"
        target="_blank"
      >
        <i className="fa fa-brands fa-linkedin"></i>
      </a>
      <a href="https://stackoverflow.com/users/19234492/minhkhoi-nguyen" target="_blank">
        <i className=" fa fa-brands fa-stack-overflow"></i>
      </a>
      <a href="mailto:minhkhoinguy@gmail.com" target="_blank">
        <i className="fa fa-solid fa-inbox"></i>
      </a>
    </div>
  );
}
