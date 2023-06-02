import React from "react";

// Fix contact form
function ContactForm({ onFormSubmit }) {
  const [info, setInfo] = useState("");

  const sendInfo = (e) => {
    e.preventDefault();

    onFormSubmit(info);
  };
}

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>
        Business inquiries?
        <a href="mailto:julia.bernst@gmail.com">Email me</a>!
      </p>
      <h2>Contact Form</h2>
      <form className="form" onSubmit={sendInfo}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Message</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}
