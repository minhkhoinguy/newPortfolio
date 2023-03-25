import React, { useState } from "react";
import "../../styles/Contact.css";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="contactPage">
      <h1 id='pageTitle'>Contact Page</h1>
      <div className="contactForm">
        <from>
          <div className="formGroup">
            <label htmlFor="name">
              <div className="contactTitle">You Name</div>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="formGroup">
            <label htmlFor="email">
              <div className="contactTitle">You Email</div>
              <input
                type="text"
                id="email"
                email="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="formGroup">
            <label htmlFor="name">
              <div className="contactTitle">You Message</div>
              <textarea
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" id="contactBtn">
          <i className="fa-solid fa-paper-plane"> Send</i>
          </button>
        </from>
      </div>
    </div>
  );
}
