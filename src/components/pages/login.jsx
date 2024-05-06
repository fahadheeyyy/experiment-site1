import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import userImg from "../assets/user.png";
import passwordImg from "../assets/password.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState({
    emailError: null,
    passwordError: null,
  });

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
  // const handleLogin = () => {
  //   localStorage.setItem("loginTime", new Date().getTime());
  // };

  // const app = () => {
  //   useEffect(() => {
  //     const loginTime = localStorage.getItem("loginTime");
  //     const currentTime = new Date().getTime(); //gets time in milliseconds
  //     const timeLimit = 60 * 1000; //1 minute

  //     console.log('login', loginTime)
  //     console.log('current', currentTime)
  //     if (loginTime && currentTime - parseInt(loginTime) > timeLimit) {
  //       localStorage.removeItem("loginTime");
  //     }
  //   }, []);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.toLowerCase() === "admin" && password === "1234") {
      console.log("correct");
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      navigate("/home");
    } else {
      if (email.toLowerCase() !== "admin" && password !== "1234") {
        setError({
          emailError: "Wrong email",
          passwordError: "wrong password",
        });
      } else if (email.toLowerCase() !== "admin") {
        setError({ emailError: "Wrong email", passwordError: null });
      } else {
        setError({ emailError: null, passwordError: "wrong password" });
      }
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
              placeholder="enter username"
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
              placeholder="enter password"
            />
            <div className="icon-image">
              <img src={passwordImg} alt="" height="20px" width="20px" />
            </div>
          </div>

          {isError && isError.passwordError && (
            <p className="error-msg">{isError.passwordError}</p>
          )}
          {/* <Link to="/home"> */}
          <button className="login-button" onClick={handleSubmit}>
            login
          </button>
          {/* </Link> */}
        </div>
        {/* 2nd div ends */}
        <div className="signup-wrapper">
          <p>
            Not a member?{" "}
            <button className="signup1-button" onClick={handleSignUp}>
              sign up
            </button>
          </p>
          <p>
            Cannot Login?
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
