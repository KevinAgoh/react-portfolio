import "./contact.scss";
import { useState } from "react";

export default function Contact() {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
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
