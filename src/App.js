import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./sass/main.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Latest2 from "./components/Latest2";
import Lastest from "./components/Latest";
import { Store, storContext } from "./context";
import Highlight from "./components/Highlight";
import Editorschoice from "./components/Editorschoice";
import Cta from "./components/Cta";
import Secondblock from "./components/Secondblock";
import Aboutfooter from "./components/Aboutfooter";
import Mainfooter from "./components/Mainfooter";
import Spotlight from "./components/Spotlight";
function App() {
  const store = useContext(Store);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <storContext.Provider value={store}>
    <Router>
      <Route path="./header" exact component={Header} />
      <Route path="./navbar" exact component ={()=><
        Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> }/>
      
      <Highlight />
      <Editorschoice />
      <Cta />
      <Latest2 />
      <Spotlight />
      {/*  <Lastest /> */}
      <Spotlight />
      <Secondblock />
      <Aboutfooter />
      <Route path="./mainfooter" exact component ={()=><
        Mainfooter menuOpen={menuOpen} setMenuOpen={setMenuOpen}  /> }/>
      </Router> 
    </storContext.Provider>
  );
}
export default App;
