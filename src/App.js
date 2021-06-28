import React, { useState, useContext } from "react";
import "./sass/main.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Lastest from "./components/Latest";
import { Store, storContext } from "./context";

function App() {
  const store = useContext(Store);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <storContext.Provider value={store}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Lastest />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </storContext.Provider>
  );
}

export default App;
