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
  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=976c618d659c44fd825f99e88a65267e"
    )
      .then((response) => response.json())
      .then((data) => setNewArr(data.articles));
  }, []);
  console.log(newArr);
  return (
    <StoreContext.Provider value={{ newArr, setStore }}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Highlight />
      <Editorschoice />
      <Cta />
      <Latest2 />
      <Spotlight />
      {/* <Lastest /> */}
      <Secondblock />
      <Aboutfooter />
      <Mainfooter />
    </StoreContext.Provider>
  );
}
export default App;
