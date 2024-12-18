import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false); // To track scroll state

  const handleClick = () => setClick(!click);

  // Scroll effect to add/remove "scrolled" class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <span>PRAGATI 2025</span>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/blog"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Blog
            </NavLink>
          </li>
          {/* Added room allocation page  */}
          <li className="nav-item">
            <NavLink
              exact
              to="/allocation"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Allocation
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        <div
          className="nav-icon"
          onClick={handleClick}
          aria-label="Toggle Menu"
        >
          {click ? <HamburgetMenuClose /> : <HamburgetMenuOpen />}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
