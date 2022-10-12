import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./contact.styles.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    console.log("Submitted");
  };

  const firstNameChange = (e) => {
    setFirstName(e.target.value);
    console.log("First name: ", firstName);
  };

  const lastNameChange = (e) => {
    setLastName(e.target.value);
    console.log("Last name: ", lastName);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
    console.log("Email: ", email);
  };

  const phoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    console.log("Phone number: ", phoneNumber);
  };

  const messageChange = (e) => {
    setMessage(e.target.value);
    console.log("Message: ", message);
  };
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [number, setNumber] = useState("");

  // const onSubmit = () => {
  //   console.log("Submitted");
  // };

  // const nameChange = (e) => {
  //   setName(e.target.value);
  //   console.log("NAME", name);
  // };

  // const emailChange = (e) => {
  //   setEmail(e.target.value);
  //   console.log("EMAIL", email);
  // };

  // const numberChange = (e) => {
  //   setNumber(e.target.value);
  //   console.log("NUMBER", number);
  // };

  return (
    // <>
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <div className="body">
    //     <h1 style={{ color: "black", marginTop: "75px", fontSize: "60px" }}>
    //       Feel free to contact me!
    //     </h1>
    //     <div className="contact-form">
    //       <form onSubmit={onSubmit}>
    //         <div className="input">
    //           <label htmlFor="name">Name:</label>
    //           <br />
    //           <input
    //             type="text"
    //             id="name"
    //             name="name"
    //             value={name}
    //             onChange={nameChange}
    //             placeholder="Enter your full name"
    //             required
    //           />
    //         </div>
    //         <br />
    //         <div className="input">
    //           <label htmlFor="email">Email:</label>
    //           <br />
    //           <input
    //             type="email"
    //             id="email"
    //             name="email"
    //             value={email}
    //             onChange={emailChange}
    //             placeholder="Enter your email"
    //             required
    //           />
    //         </div>
    //         <br />
    //         <div className="input">
    //           <label htmlFor="number">Phone Number:</label>
    //           <br />
    //           <input
    //             type="text"
    //             id="phone_number"
    //             name="phone_number"
    //             value={number}
    //             onChange={numberChange}
    //             placeholder="XXX-XXX-XXXX"
    //             required
    //           />
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    //   <footer>
    //     <Footer />
    //   </footer>
    // </>
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="contact-page">
        <div className="words">
          <h6 className="feel-free">Contact Us</h6>
          <h2 className="talk">
            Let's talk about <br />
            your project!
          </h2>
          <p className="comment">
            Drop us a line through the form below. Or start a chat in <br />
            the bottom right corner of the screen
          </p>
        </div>
        <div className="contact-form">
          <form onsubmit={onSubmit}>
            <div className="names">
              {/* <label htmlFor="firstName">First Name</label> */}
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                id="firstName"
                onChange={firstNameChange}
              />
              {/* <label htmlFor="lastName">Last Name</label> */}
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={lastName}
                id="lastName"
                onChange={lastNameChange}
              />
            </div>
            <br />
            <br />
            <div className="contact-info">
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                id="email"
                onChange={emailChange}
              />
              {/* <label htmlFor="phoneNumber">Phone Number</label> */}
              <input
                type="phone"
                name="phoneNumber"
                placeholder="Phone Number"
                value={phoneNumber}
                id="phoneNumber"
                onChange={phoneNumberChange}
              />
            </div>
            <br />
            <br />
            <div className="contact-message">
              {/* <label htmlFor="message">Your Message</label> */}
              <input
                type="textbox"
                name="message"
                placeholder="Your message"
                value={message}
                id="message"
                onChange={messageChange}
              />
            </div>
          </form>
          <div className="submit-button">
            <button className="btn">Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
