import React,{useState} from "react";

// COMPONENT IMPORT
import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import Highlight from "./components/Highlight";
// import Editorschoice from "./components/Editorschoice";
// import Cta from "./components/Cta";
// import Latest from "./components/Latest";
// import Trending from "./components/Trending";
// import Social from "./components/Social";
// import Spotlight from "./components/Spotlight";
// import Webdev from "./components/Webdev";
// import Newsletter from "./components/Newsletter";
// import Aboutfooter from "./components/Aboutfooter";
// import Mainfooter from "./components/Mainfooter";

// APP FUNCTION / ROUTER
function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
      <div>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    );
  }
  
  export default App;