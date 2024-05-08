import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import userImg from "../assets/user.png";
import passwordImg from "../assets/password.png";
import nameImg from "../assets/@.png";
import "./signup.css";
import emailjs from "@emailjs/browser";

const signup = () => {
  const [newSignUp, setNewSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });
  const form1 = useRef();

  //   const [newPassword, setnewPassword] = useState("");
  //   const [newName, setNewName] = useState("");

  //   const handleNewEmailChange = (e) => {
  //     setNewEmail(e.target.value);
  //   };
  //   const handleNewPasswordChange = (e) => {
  //     setnewPassword(e.target.value);
  //   };

  const handleNewSignUpChange = (e) => {
    const { name, value } = e.target;
    setNewSignUp({ ...newSignUp, [name]: value });
  };
  const navigate = useNavigate();

  const handleNewSignupSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", newSignUp);
    setNewSignUp({ username: "", email: "", password: "" });
    navigate("/home");
  };

  // const sendSignUpEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("service_9bq4jiz", "template_6voxyou", form1.current, {
  //       publicKey: "aonkVciKKo3SIltyc",
  //     })
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  // };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9bq4jiz", "template_6voxyou", form1.current, {
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

  const handleLoginChange = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const performMultipleFunctions = (e) => {
    e.preventDefault();
    handleNewSignupSubmit(e);
    sendEmail(e);
  };
  return (
    <div className="signup-wrap">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form ref={form1}>
          <div>
            <div className="input-container">
              <input
                className="input"
                type="text"
                id="name"
                name="username"
                value={newSignUp.username}
                onChange={handleNewSignUpChange}
                required
                placeholder="enter username"
              />
              <div className="icon-image">
                <img src={userImg} alt="" height="20px" width="20px" />
              </div>
            </div>

            <div className="input-container">
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                value={newSignUp.email}
                onChange={handleNewSignUpChange}
                required
                placeholder="enter email"
              />
              <div className="icon-image">
                <img src={nameImg} alt="" height="20px" width="20px" />
              </div>
            </div>

            <div className="input-container">
              <input
                className="input"
                type="password"
                id="password"
                name="password"
                value={newSignUp.password}
                onChange={handleNewSignUpChange}
                required
                placeholder="enter password"
              />
              <div className="icon-image">
                <img src={passwordImg} alt="" height="20px" width="20px" />
              </div>
            </div>

            <button
              className="signup-button"
              onClick={performMultipleFunctions}
            >
              signup
            </button>
          </div>
        </form>
        <div className="login-wrapper">
          <p>already signed in?</p>
          <button className="login1-button" onClick={handleLoginChange}>
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default signup;
