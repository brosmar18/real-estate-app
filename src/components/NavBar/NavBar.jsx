import { navLinks } from "../../constants";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
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
    </nav>
  );
};

export default NavBar;
