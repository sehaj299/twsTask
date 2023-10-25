import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-items">
        <Link to="/">Home</Link>
        <Link to="/checkout">Cart</Link>
      </div>
    </nav>
  );
}

export default Header;
