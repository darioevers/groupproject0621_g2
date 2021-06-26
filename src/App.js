import React, { useState } from "react";
import "./sass/main.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Highlight from "./components/Highlight";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Highlight />
    </div>
  );
}

export default App;
