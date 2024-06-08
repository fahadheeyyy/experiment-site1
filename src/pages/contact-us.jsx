import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact-us.css";
import { useNavigate } from "react-router-dom";
import userImg from "../components/assets/user.png";
import nameImg from "../components/assets/@.png";
// import emailjs from "emailjs"

// import {handleLoginChange} from './components/pages/signup'

const ContactUs = () => {
  const form = useRef();
  const navigate = useNavigate();
  const handleLoginChange1 = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9bq4jiz", "template_o26e3xd", form.current, {
        publicKey: "aonkVciKKo3SIltyc",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    

  };

  return (
    // <div><h2></h2></div>
    <div className="contact-us-wrap">
      <div className="contact-us">
        <h2>Contact-Us</h2>
        <div>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            {/* <label>Name</label> */}
            <div className="contact-form-btn">
              <input
                type="text"
                className="contact-input"
                name="from_name"
                placeholder="name"
              />
              <div className="icon-image1">
                <img src={userImg} alt="" height="20px" width="20px" />
              </div>
              {/* <label>Email</label> */}
              <input
                type="email"
                className="contact-input"
                name="from_email"
                placeholder="e-mail"
              />
              <div className="icon-image1">
                <img src={nameImg} alt="" height="20px" width="20px" />
              </div>
              {/* <label>Message</label> */}
              <textarea name="message" placeholder="Message" />
              {/* <input type="submit" value="Send" /> */}
            </div>
            <button className="contact-btn">send</button>
          </form>
        </div>
        <div className="login-wrapper">
          <p>Want to go back?</p>
          <button className="signup1-button" onClick={handleLoginChange1}>
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
