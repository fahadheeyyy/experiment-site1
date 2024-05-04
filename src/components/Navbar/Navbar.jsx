import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ page }) => {
  return (
    <div className="Navbar">
      {/* <h1>{page}</h1> */}

      <ul>
        {/* <li>
          <Link to="/">Login</Link>
        </li> */}
        <li>
          <Link to="/home">Routing-State-map-filter-find</Link>
        </li>
        <li>
          <Link to="/aboutus">State-Props-childComponent</Link>
        </li>
        <li>
          <Link to="/works">Api</Link>
        </li>
        <li>
          <Link to="/contact">Data-entry</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
