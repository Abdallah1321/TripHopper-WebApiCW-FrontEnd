import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [active, setActive] = useState("navbar");
  const showNav = () => {
    setActive("navbar activeNavbar");
  };

  const hideNav = () => {
    setActive("navbar");
  };

  return (
    <section className="navBarSec">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <img src={logo} className="resize" alt="" />
            <h1 className="logo">TripHopper</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <li className="navWelcome">
              Welcome, <span>Guest</span>
            </li>
            <button className="btn">
              <a href="/auth">LOGIN</a>
            </button>
            <button className="btn">
              <a href="/auth">SIGN UP</a>
            </button>
          </ul>

          <div onClick={hideNav} className="closeNavbar">
            <AiOutlineCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <GiHamburgerMenu className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
