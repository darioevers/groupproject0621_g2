import React, { useState, useEffect, useContext } from "react";
import "./sass/main.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Latest2 from "./components/Latest2";
import { Store, StoreContext } from "./context";
import Highlight from "./components/Highlight";
import Editorschoice from "./components/Editorschoice";
import Cta from "./components/Cta";
import Secondblock from "./components/Secondblock";
import Aboutfooter from "./components/Aboutfooter";
import Mainfooter from "./components/Mainfooter";
import Spotlight from "./components/Spotlight";
function App() {
  const [store, setStore] = useState(Store);
  const contextObj = useContext(StoreContext);
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(contextObj.dataNew);
  useEffect(() => {
    setStore((prevState) => {
      return { ...prevState, fetchData: Store.dataNew };
    });
  }, [contextObj.fetchData()]);
  return (
    <StoreContext.Provider value={{ store, setStore }}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Highlight />
      <Editorschoice />
      <Cta />
      <Latest2 />
      <Spotlight />
      {/*  <Lastest /> */}
      <Spotlight />
      <Secondblock />
      <Aboutfooter />
      <Mainfooter />
    </StoreContext.Provider>
  );
}
export default App;
