import React, { useState, useContext } from "react";
import "./sass/main.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Latest2 from "./components/Latest2";
import Lastest from "./components/Latest";
import { Store, storContext } from "./context";
import Highlight from "./components/Highlight";
import Editorschoice from "./components/Editorschoice";
import Cta from "./components/Cta";

function App() {
  const store = useContext(Store);
 
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <storContext.Provider value={store}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Highlight />

      <Editorschoice />

      <Cta />
      <Latest2 />
      {/*  <Lastest /> */}
    </storContext.Provider>
  );
}

export default App;
