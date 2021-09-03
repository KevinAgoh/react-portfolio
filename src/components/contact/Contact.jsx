import "./contact.scss";
import { useState } from "react";
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

export default function Contact() {

  const [status, setStatus] = useState("Submit");
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" id="name" placeholder="Name" required />
          </div>
          <div>
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div>
            <textarea id="message" placeholder="Message" required />
          </div>
          <button type="submit">{status}</button>
        </form>
      </div>
      <div className="right">
        <div class="parent">
          <div class="div1">
            <a href="https://github.com/KevinAgoh" target="_blank" rel="noreferrer"><AiFillGithub className="stack-icon" /></a>
          </div>
          <div class="div2">
            <a href="https://www.linkedin.com/in/kevin-agoh/" target="_blank" rel="noreferrer"><AiFillLinkedin className="stack-icon" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
