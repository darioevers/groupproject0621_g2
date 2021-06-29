import React, { useState } from "react";
import "./sass/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Latest2 from "./components/Latest2";
import Lastest from "./components/Latest";
import { Store, StoreContext } from "./context";
import Highlight from "./components/Highlight";
import Editorschoice from "./components/Editorschoice";
import Cta from "./components/Cta";
import latest from "./components/Latest";

function App() {
  // const store = useContext(Store);
  const [store, setStore] = useState(Store);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Router>
      <StoreContext.Provider value={{ store, setStore }}>
        {/* <Route path={process.env.PUBLIC_URL + "/"} exact component={Header} />
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
        {/* <Route path={process.env.PUBLIC_URL + "/"} exact component={Navbar} /> */}

        {/* <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
        {/* <Route path={process.env.PUBLIC_URL + "/"} exact component={Navbar} /> */}

        <Highlight />

        {/* <Editorschoice /> */}
        {/* <Route path={process.env.PUBLIC_URL + "/"} exact component={Navbar} /> */}

        {/* <Cta /> */}
        {/* <Route path={process.env.PUBLIC_URL + "/"} exact component={Navbar} /> */}

        {/* <Latest2 /> */}
        <Lastest />
      </StoreContext.Provider>
    </Router>
  );
}

export default App;
