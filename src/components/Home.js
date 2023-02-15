import React from "react";
import Navbar from "./Navbar";
import About from './About';
import Footer from './Footer';
import Features from './Features';
import Cards from './Cards';
import "./Home.css";

import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";

let Home = () => {
  let [active, setActive] = useState(false);
  let [loginI, setLoginI] = useState(false);

  function OnGetStarted() {
    //let [active,setActive] = useState(false);
    //document.getElementById("hero").className += " active";
    document.getElementById("fadeDown").setAttribute("data-aos","fade-down");
    setLoginI(true)
   // document.getElementById("fadeDown").style.display = "none";
    //document.getElementById("fadeIn").style.display = "none";
   // document.getElementById("fadeIn").setAttribute("data-aos","fade-in");
   // setActive(!active);
  }

  return (
    <>
      { !loginI ?  <section id="hero" class={`hero d-flex align-items-center  ${active ? "active" : ""}`}>
        <div class="container" id="fadeDown" >
          <div class="row">
            <div class="col-xl-4">
              <h2 data-aos="fade-up">Be A Part Of Our Community</h2>
              <blockquote data-aos="fade-up" data-aos-delay="100">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perspiciatis cum recusandae eum laboriosam voluptatem
                  repudiandae odio, vel exercitationem officiis provident
                  minima.{" "}
                </p>
              </blockquote>
              <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                <Link to="/register" class="btn-get-started" onClick={OnGetStarted}>
                Join Us
                </Link>
                <a
                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  class="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i class="bi bi-arrow-down-circle"></i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>



          
        </div>


    
 <Login/>
      </section> : <section id="hero" class={`hero d-flex align-items-center  ${active ? "active" : ""}`}>
       

        <div class="container"  >
          <div class="row">
            <div class="col-xl-4">
              <h2 data-aos="fade-up">Be A Part Of Our Community 2</h2>
              <blockquote data-aos="fade-up" data-aos-delay="100">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perspiciatis cum recusandae eum laboriosam voluptatem
                  repudiandae odio, vel exercitationem officiis provident
                  minima.{" "}
                </p>
              </blockquote>
              <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                <a href="#about" class="btn-get-started" onClick={OnGetStarted}>
                  Get Started
                </a>
                <a
                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  class="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i class="bi bi-arrow-down-circle"></i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>



          <Login/>
        </div>
      </section>
}


<Navbar/>
 <About/>
 <Features/>
 
 <br/>
 <Footer/>
    </>
  );
};

export default Home;
