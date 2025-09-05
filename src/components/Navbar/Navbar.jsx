import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  function toggleMenu() {
    setMenuActive((prv) => !prv);
  }

  return (
    <nav className="navbar">
      <h1 className="logo">
        <img
          src="https://lms.infnet.edu.br/moodle/pluginfile.php/1/theme_remui/logomini/1756830095/infnet.png"
          alt="logo"
          className="logo"
        ></img>
      </h1>

      <button 
        onClick={toggleMenu}
        className="menu-button">
          <span className="material-symbols-outlined">
            {menuActive ? "close" : "menu"}
          </span>
      </button>

      <div className={`${"bar"} ${menuActive ? "active" : ""}`}>
        <ul className="menu">
          <li className="item">
            <a href="#">Home</a>
          </li>
          <li className="item">
            <a href="#">About</a>
          </li>
          <li className="item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}