import React from "react";

// COMPONENT IMPORT
import Mainnav from "./components/Mainnav";
import Secnav from "./components/Secnav";
import Highlight from "./components/Highlight";
import Editorschoice from "./components/Editorschoice";
import Cta from "./components/Cta";
import Latest from "./components/Latest";
import Trending from "./components/Trending";
import Social from "./components/Social";
import Spotlight from "./components/Spotlight";
import Webdev from "./components/Webdev";
import Newsletter from "./components/Newsletter";
import Aboutfooter from "./components/Aboutfooter";
import Mainfooter from "./components/Mainfooter";

// APP FUNCTION / ROUTER
function App() {
  return (
      <div>
          <Mainnav />
          <Secnav />
          <Highlight />
          <Editorschoice />
          <Cta />
          <Latest />
          <Trending />
          <Social />
          <Spotlight />
          <Webdev />
          <Newsletter />
          <Aboutfooter />
          <Mainfooter />

      </div>
  );
}
export default App;