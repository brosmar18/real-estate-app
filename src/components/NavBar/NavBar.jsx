import { useState } from "react";
import { navLinks } from "../../constants";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./NavBar.scss";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="logo">
        <a href="/">
          <img src="/logo.svg" alt="logo" />
        </a>
      </div>
      <div className="links">
        {navLinks.map((link) => (
          <NavLink
            to={link.route}
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            key={`navLinks-${link.label}`}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <a href="/" className="register">
        Sign In
      </a>
      <div className="hamburger">
        <FiMenu size={30} onClick={() => setOpen(!open)} />
      </div>
      <div className={open ? "menu active" : "menu"}>
        {navLinks.map((link, index) => (
          <NavLink key={`nav-links-${index}`}>{link.label}</NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
