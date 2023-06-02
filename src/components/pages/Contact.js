import React, { useState } from "react";

function ContactForm({ onFormSubmit }) {
  const [senderName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // here is where the message would be stored and sent to me

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>
        Business inquiries?{" "}
        <a href="mailto:julia.bernst@gmail.com"> Email me</a>!
      </p>
      <h2>Contact Form</h2>
      <form className="form" onSubmit="">
        <div className="field contact-name">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={senderName}
            onChange={handleInputChange}
          />
        </div>
        <div className="field contact-email">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="field contact-message">
          <label>Message</label>
          <input
            type="text"
            name="message"
            value={message}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
