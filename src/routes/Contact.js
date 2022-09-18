import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./contact.styles.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const onSubmit = () => {
    console.log("Submitted");
  };

  const nameChange = (e) => {
    setName(e.target.value);
    console.log("NAME", name);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
    console.log("EMAIL", email);
  };

  const numberChange = (e) => {
    setNumber(e.target.value);
    console.log("NUMBER", number);
  };

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="body">
        <h1 style={{ color: "black", marginTop: "75px", fontSize: "60px" }}>
          Feel free to contact me!
        </h1>
        <div className="contact-form">
          <form onSubmit={onSubmit}>
            <div className="input">
              <label htmlFor="name">Name:</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={nameChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <br />
            <div className="input">
              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={emailChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <br />
            <div className="input">
              <label htmlFor="number">Phone Number:</label>
              <br />
              <input
                type="text"
                id="phone_number"
                name="phone_number"
                value={number}
                onChange={numberChange}
                placeholder="XXX-XXX-XXXX"
                required
              />
            </div>
          </form>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
