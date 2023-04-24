import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = () => {
  const [active, setActive] = useState("navbar");
  const showNav = () => {
    setActive("navbar activeNavbar");
  };

  const hideNav = () => {
    setActive("navbar");
  };

  const { user } = useAuthContext();

  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };

  return (
    <section className="navBarSec">
      <header className="header flex">
        <div className="logoDiv">
          <Link to={`/trips/`}>
            <a href="#" className="logo flex">
              <img src={logo} className="resize" alt="" />
              <h1 className="logo">TripHopper</h1>
            </a>
          </Link>
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
            
            {user ? (
              <div>
                <span>Hey, {user.data.username}! </span>
                <button className="logout" onClick={handleClick}>
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <button className="btn">
                  <a href="/auth">LOGIN</a>
                </button>
                <button className="btn">
                  <a href="/auth">SIGN UP</a>
                </button>
              </div>
            )}
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
