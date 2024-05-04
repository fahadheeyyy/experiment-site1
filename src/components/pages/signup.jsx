import React, { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import userImg from "../assets/user.png";
import passwordImg from "../assets/password.png";
import nameImg from "../assets/@.png";
import "./signup.css"

const signup = () => {
  const [newSignUp, setNewSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });
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
    navigate("/home")
  };

  const handleLoginChange = (e) =>
    {
        e.preventDefault();
        navigate("/")
    } 
  return (
    <div className="signup-wrap">
      <div className="signup-container">
        <h2>Sign Up</h2>
        {/* <form onSubmit={handleNewSignupSubmit}> */}
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

            {/* {isError && isError.passwordError && (
            <p className="error-msg">{isError.passwordError}</p>
          )} */}
            {/* <Link to="/home"> */}
            <button  className="signup-button" onClick={handleNewSignupSubmit}>
              signup
            </button>
            {/* </Link> */}
          </div>
          {/* 2nd div ends */}
        {/* </form> */}
        <div className="login-wrapper">
            <p>already signed in?</p>
<button className="login1-button"onClick={handleLoginChange}>login</button>
        </div>
      </div>
    </div>
  );
};

export default signup;
