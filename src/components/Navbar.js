import { Theaters } from "@material-ui/icons";
import React, {useState, useEffect, useContext} from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { Link } from "react-router-dom";
import {Store, storContext} from "../context";


function Navbar({ menuOpen, setMenuOpen }) {
  const contextObj = useContext(storContext);
  const [newArr, setNewArr] = useState([]);
  const [state, setstate] = useState(Store);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=456c11b241e8410394c1cf4681c37216"
    )
    .then((response)=> response.json())
    .then((data)=> (Store.dataNew = newArr))
  }, []);
  const newlink = newArr.map((item, i)=>{
    const {
      url,
    } = item
    if (i < 6 ){


  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul key={i}>
        <Link to={url}>
        <li onClick={() => setMenuOpen(false)}>Link1</li>
        </Link>
        <Link to={url}>
        <li onClick={() => setMenuOpen(false)}>Link2</li>
        </Link>
        <Link  to={url}>
        <li onClick={() => setMenuOpen(false)}>Link3</li>
        </Link>
        <Link  to={url}>
        <li onClick={() => setMenuOpen(false)}>Link4</li>
        </Link>
        <Link  to={url}>
        <li onClick={() => setMenuOpen(false)}>Link5</li>
        </Link>
        <Link  to={url}>
        <li onClick={() => setMenuOpen(false)}>Link6</li>
        </Link>
        
        {/*  {console.log()} */}
      </ul>
    </div>
    
    )  }})
  
}

export default Navbar;
