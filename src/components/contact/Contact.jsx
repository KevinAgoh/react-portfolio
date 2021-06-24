import "./contact.scss";
import { useState } from "react";
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillSlackCircle } from 'react-icons/ai';
import { FaFigma } from 'react-icons/fa';

export default function Contact() {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <div class="parent">
          <div class="div1">
            <a href="https://github.com/KevinAgoh"><AiFillGithub className="stack-icon" /></a>
          </div>
          <div class="div2">
            <a href="https://www.linkedin.com/in/kevin-agoh/"><AiFillLinkedin className="stack-icon" /></a>
          </div>
        </div>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit} action="mailto:kevinagoh@hotmail.fr" method="POST" encType="text/plain">
          <input type="email" id="email" name="email" placeholder="Your email" required="required" />
          <textarea placeholder="Your message" id="message" name="message" required="required" data-minlength="20"></textarea>
          <button type="submit" name="submit" value="Send">Send</button>
          {message && <span>Thanks, I'll reply ASAP 😁</span>}
        </form>
      </div>
    </div>
  )
}
