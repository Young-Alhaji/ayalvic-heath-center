import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Modules/navbar.css";
const Navbar = () => {

  return (
    <>
<div class="container">
<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">
  <img src="logo.png" width="50" height="50" style={{borderRadius:'1000px'}} alt=""/>Ayalvic
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item active px-2">
        <a  className="nav-link navhove" href="#">Home</a>
      </li>
      <li class="nav-item active px-2">
        <a class="nav-link navhove" href="#about">About Us</a>
      </li>
      <li class="nav-item active px-2">
        <a class="nav-link navhove" href="#">Contact Us</a>
      </li>
      <li class="nav-item active px-2">
        <a class="nav-link navhove" href="#">Create Account</a>
      </li>
      <li class="nav-item active px-2">
        <a class="nav-link navhove" href="#">Sign In</a>
      </li>
      
      
    </ul>
  </div>
</nav>
</div>

    </>
  );
};

export default Navbar;
