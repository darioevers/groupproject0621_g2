import React, {useState, useEffect, useContext} from "react";
import {Store, storContext} from "../context";
import { Link } from "react-router-dom";



import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaVimeoV,
    FaRegUserCircle,
  } from "react-icons/fa";
export default function Aboutfooter({ menuOpen, setMenuOpen }) {
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
  const footerlink = newArr.map((item, i)=>{
    const {
      url,
    } = item;
    if (i < 6 ){
  
  return (
    <ul>
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
        
        
      </ul>
    )}});
   
return (
    <div class="mainFooter">
        <div class="mainFooter-top">
        <div className="iconsWrapper">
        <ul className="iconsList">
          <li className="listItem">
            <Link to="#" target="blank">
              <FaFacebook />
            </Link>
          </li>
          <li className="listItem">
            <Link to="#" target="blank">
              <FaTwitter />
            </Link>
          </li>
          <li className="listItem">
            <Link to="#" target="blank">
              <FaInstagram />
            </Link>
          </li>
          <li className="listItem">
            <Link to="#" target="blank">
              <FaVimeoV />
            </Link>
          </li>
        </ul>
      </div>
        </div>
        <div class="mainFooter-mid">
        <div className={"menuFooter " + (menuOpen && "active")}>
          {footerlink}
      
    </div>
        </div>
        <div class="mainFooter-bot">
            <p>© 2021  dci project</p>
        </div>
    </div>
)
  }
