import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css"
import Logo from "../img/Logo.png";

let Navbar = () => {
    return <>
      <header id="header" className=" py-2 d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between" style={{background:"#eeeded",borderRadius:"40px", "boxShadow": " 2px 5px 10px -2px #2a2a2a"}}>
          <a href="index.html" className="logo d-flex align-items-center">
        
            <img className="d-flex align-items-center logo" src={Logo}/>
          </a>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
          <nav id="navbar" className="navbar">
            <ul>
              <li><a href="index.html" className="active">Home</a></li>
              <li><a href="about.html">About</a></li>
          
              <li><a href="team.html">Team</a></li>
<<<<<<< HEAD
         
         
=======
              <li><a href="blog.html">Blog</a></li>
>>>>>>> 4d53b0413339c14bc34da12637720fead14234ae
              <li><a href="contact.html">Contact</a></li>
              <li ><Link to="/reg" >Register</Link></li>
            </ul>
          </nav>{/* .navbar */}
        </div>
      </header></>;
}

export default Navbar;