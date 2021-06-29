import React from "react";
import { Link } from "react-router-dom";
function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <Link to="/trending">
          <li onClick={() => setMenuOpen(false)}>trending</li>
        </Link>
        <Link to="">
          <li onClick={() => setMenuOpen(false)}></li>
        </Link>
        <Link to="">
          <li onClick={() => setMenuOpen(false)}>Link1</li>
        </Link>
        <Link to="">
          <li onClick={() => setMenuOpen(false)}>Link1</li>
        </Link>
        <Link to="">
          <li onClick={() => setMenuOpen(false)}>Link1</li>
        </Link>
        <Link to="">
          <li onClick={() => setMenuOpen(false)}>Link1</li>
        </Link>
        <Link to="/Aboutfooter">
          <li onClick={() => setMenuOpen(false)}>about Us</li>
        </Link>
        {/*  {console.log()} */}
      </ul>
    </div>
  );
}

export default Navbar;
