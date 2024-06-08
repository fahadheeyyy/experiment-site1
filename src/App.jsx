import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Aboutus from "./pages/aboutus";
import Works from "./pages/works";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ContactUs from "./pages/contact-us";

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
