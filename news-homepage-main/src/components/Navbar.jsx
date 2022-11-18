import React from "react";
import logo from "../assets/images/logo.svg";
function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={logo}></img>
      <ul className="nav-items">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </div>
  );
}
export default Navbar;
