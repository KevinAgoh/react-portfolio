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
        <img src="assets/photo-1577563908411-5077b6dc7624.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit} action="mailto:kevin.agoh@outlook.com" method="POST">
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP 😁</span>}
        </form>
      </div>
    </div>
  )
}
