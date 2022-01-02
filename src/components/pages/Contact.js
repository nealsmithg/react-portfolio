import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "Name") {
      setName(inputValue);
    } else if (inputType === "Email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid Email");
      return;
    }
    if (!name || !message) {
      setErrorMessage(`Please enter your name and a message`);
      return;
    }

    setName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
  };

  return (
    <div className="contactForm">
      <form className="form">
        <input
          value={name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="Email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <textarea
          className="message"
          value={message}
          name="Message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="submit" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
