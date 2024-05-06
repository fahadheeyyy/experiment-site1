import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Aboutus from "./components/pages/aboutus";
import Works from "./components/pages/works";
import Contact from "./components/pages/contact";
import Login from "./components/pages/login";
import Signup from "./components/pages/signup";
import ContactUs from "./contact-us";

// import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
