import React from "react";
import { Link } from "react-router-dom";
function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#link1">more in tech</a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="#link2">spotlight</a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="#link3">latest in tech</a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="#link4">trending</a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="#link5">quick news</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
