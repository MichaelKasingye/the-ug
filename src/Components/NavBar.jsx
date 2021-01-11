import React from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css";
function NavBar() {
  return (
    <nav className="header">
      <Link to="/">
        <h3 className="logo">THEUG</h3>
      </Link>

      <div className="header_nav">
        <Link to="/about" className="header_link">
          <div className="header_option">
            <span className="header_menu">About</span>
          </div>
        </Link>
        <Link to="/developer" className="header_link">
          <div className="header_option">
            <span className="header_menu">Developer</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
