
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import userImg from "../components/assets/user.png";
import passwordImg from "../components/assets/password.png";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { firestore } from "./firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState({
    emailError: null,
    passwordError: null,
  });
  const [error, setError] = useState("");
  const loginRef = collection(firestore, "signup data");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const handleContactUs = (e) => {
    e.preventDefault();
    navigate("/contactus");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsError({ emailError: null, passwordError: null });

    try {
      // Check if the email exists
      const q = query(loginRef, where("keys.email", "==", email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // Email does not exist
        setIsError({ emailError: "Email does not exist. Please Signup" });
        return;
      }

      // Check if the password matches
      let passwordMatch = false;
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.keys.password === password) {
          passwordMatch = true;
        }
      });

      if (passwordMatch) {
        // Password matches, proceed with login
        console.log("Login successful");
        navigate("/home");
      } else {
        // Password does not match
        setIsError({ passwordError: "Incorrect password." });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-wrap">
      <div className="login-container">
        <h2>Login</h2>
        <div>
          <div className="input-container">
            <input
              className="input"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              placeholder="Enter email"
            />
            <div className="icon-image">
              <img src={userImg} alt="" height="20px" width="20px" />
            </div>
          </div>
          {isError && isError.emailError && (
            <p className="error-msg">{isError.emailError}</p>
          )}

          <div className="input-container">
            <input
              className="input"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
              placeholder="Enter password"
            />
            <div className="icon-image">
              <img src={passwordImg} alt="" height="20px" width="20px" />
            </div>
          </div>

          {isError && isError.passwordError && (
            <p className="error-msg">{isError.passwordError}</p>
          )}
          {error && <p className="error-msg">{error}</p>}

          <button className="login-button" onClick={handleSubmit}>
            Login
          </button>
        </div>
        <div className="signup-wrapper">
          <p>
            Not a member?{" "}
            <button className="signup1-button" onClick={handleSignUp}>
              Sign up
            </button>
          </p>
          <p>
            Cannot Login?{" "}
            <button className="signup1-button" onClick={handleContactUs}>
              Contact Us
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;











