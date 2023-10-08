import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import "../../assets/css/style.css";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="navbar container">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <div className={`nav-items ${isOpen && "open"}`}>
          <ul>
            <li>
              <NavLink to="/order" className={({ isActive }) => (isActive ? "active" : "link")}>
                Order
              </NavLink>
            </li>
            <li>
              <NavLink to="/orderReview" className={({ isActive }) => (isActive ? "active" : "link")}>
                Order Review
              </NavLink>
            </li>
            <li>
              <NavLink to="/manageInventory" className={({ isActive }) => (isActive ? "active" : "link")}>
                Manage Inventory
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "link")}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signUp" className={({ isActive }) => (isActive ? "active" : "link")}>
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
