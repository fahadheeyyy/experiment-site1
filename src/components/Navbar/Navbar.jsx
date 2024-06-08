import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import accountImg from "../assets/img/accountweb.png";
import cartImg from "../assets/img/cartweb.svg";
import categoriesImg from "../assets/img/categoriesweb.png";
import homeImg from "../assets/img/homeweb.png";



const Navbar = ({ page }) => {
  return (
    <div className="Navbar">
      {/* <h1>{page}</h1> */}
      <div></div>
<div>
      <ul>
        <div className="subIcons">
        {/* <li>
          <Link to="/">Login</Link>
        </li> */}
        {/* Routing-State-map-filter-find */}
        {/* State-Props-childComponent */}
        {/* Api */}
        {/* Data-entry */}
        <li>
          <Link to="/home"><img src={homeImg} height="30px" /></Link>
        </li>
        <li>
          <Link to="/aboutus"><img src={categoriesImg} height="30px" /></Link>
        </li>
        <li>
          <Link to="/works"><img src={accountImg} height="30px" /></Link>
        </li>
        </div>
        <div>
        <li>
          <Link to="/contact"><img src={cartImg} height="30px" /></Link>
        </li>
        </div>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
