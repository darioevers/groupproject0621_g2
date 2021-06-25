import React from "react";

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>Link1</li>
        <li onClick={() => setMenuOpen(false)}>Link2</li>
        <li onClick={() => setMenuOpen(false)}>Link3</li>
        <li onClick={() => setMenuOpen(false)}>Link4</li>
        <li onClick={() => setMenuOpen(false)}>Link5</li>
        <li onClick={() => setMenuOpen(false)}>Link6</li>
        {/*  {console.log()} */}
      </ul>
    </div>
  );
}

export default Navbar;
