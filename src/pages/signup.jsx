import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import userImg from "../components/assets/user.png";
import passwordImg from "../components/assets/password.png";
import nameImg from "../components/assets/@.png";
import "./signup.css";
import emailjs from "@emailjs/browser";
import { addDoc, collection, getDocs, query, where } from "@firebase/firestore";
import { firestore } from "./firebase";

const Signup = () => {
  const [newSignUp, setNewSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const form1 = useRef();

  const collectionRef = collection(firestore, "signup data");

  const handleNewSignUpChange = (e) => {
    const { name, value } = e.target;
    setNewSignUp({ ...newSignUp, [name]: value });
  };
  const navigate = useNavigate();

  const handleNewSignupSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      // Check if the email already exists
      const q = query(collectionRef, where("keys.email", "==", newSignUp.email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Username already exists
        setError("email already exists. Please choose another one.");
        return;
      }

      // If username does not exist, proceed with signup
      const dataToAdd = {
        id: newSignUp.username,
        keys: {
          username: newSignUp.username,
          email: newSignUp.email,
          password: newSignUp.password,
        },
      };

      const docRef = await addDoc(collectionRef, dataToAdd);
      console.log("Document written with ID:", docRef.id);

      // Clear the form
      setNewSignUp({ username: "", email: "", password: "" });
      navigate("/home");
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

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
        {error && <p className="error">{error}</p>}
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

export default Signup;
