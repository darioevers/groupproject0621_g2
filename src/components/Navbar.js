import React from "react";
import { Link } from "react-router-dom";
function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a className="link" href="#link1">
            MORE IN TECH
          </a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a className="link" href="#link2">
            SPOTLIGHT
          </a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a className="link" href="#link3">
            LATEST IN TECH
          </a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a className="link" href="#link4">
            TRENDING
          </a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a className="link" href="#link5">
            QUICK NEWS
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
