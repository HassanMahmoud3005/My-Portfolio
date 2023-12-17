import React, { useEffect } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import "./Navbar.css";
import $ from 'jquery';



const Navbar = () => {

 
  

  useEffect(() => {
    $('.js-scroll-trigger').on('click',function(){
      $('.navbar-collapse').removeClass('show')
    })
  
  }, []);





  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top px-4 bg-black p-0 position-fixed" style={{ zIndex:"100000" }}>
        <div className="container-fluid">
          <Link
            style={{ fontFamily: "Black Ops One" }}
            className="navbar-brand fs-1"
            to='home'
          >
            Hassan
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ transition:"1s"} }
            id="btn-toggle"
          >
            <i className="fa-solid fa-bars-staggered fs-1 fw-bold" style={{ color:"blueviolet" }}></i>
          </button>

          
          <div className="collapse navbar-collapse " id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0 text-center ">
              <li className="nav-item mx-1" id="home" >
                <Link
                  style={{ fontFamily: "Black Ops One ", cursor: "pointer" }}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link js-scroll-trigger  fs-5"
                  to="homePage"
                  aria-current="page"
                  offset={-100}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-1" id="about">
                <Link
                  style={{ fontFamily: "Black Ops One", cursor: "pointer" }}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link js-scroll-trigger fs-5"
                  to="aboutPage"
                  offset={-70}
                >
                  About
                </Link>
              </li>
              <li className="nav-item mx-1" id="about">
                <Link
                  style={{ fontFamily: "Black Ops One", cursor: "pointer" }}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link js-scroll-trigger fs-5"
                  to="skillsPage"
                  offset={-50}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  style={{ fontFamily: "Black Ops One", cursor: "pointer" }}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="nav-link js-scroll-trigger fs-5"
                  to="services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  style={{ fontFamily: "Black Ops One", cursor: "pointer" }}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="nav-link js-scroll-trigger fs-5"
                  to="projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  style={{ fontFamily: "Black Ops One", cursor: "pointer" }}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="nav-link js-scroll-trigger fs-5"
                  to="testimonial"
                >
                  Client
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  style={{ fontFamily: "Black Ops One", cursor: "pointer" }}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="nav-link js-scroll-trigger fs-5"
                  to="blog"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  style={{ fontFamily: "Black Ops One", cursor: "pointer" }}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-30}
                  className="nav-link js-scroll-trigger fs-5"
                  to="contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};


export default Navbar;



