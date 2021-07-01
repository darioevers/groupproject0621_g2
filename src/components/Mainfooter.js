import React, {useState, useEffect, useContext} from "react";
import {Store, StoreContext} from "../context";
import { Link } from "react-router-dom";



import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaVimeoV,
  FaRegUserCircle,
} from "react-icons/fa";
export default function Aboutfooter({ menuOpen, setMenuOpen }) {
  const contextObj = useContext(StoreContext);
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
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebook />
              </a>
            </li>
            <li className="listItem">
              <a href="https://www.twitter.com/" target="_blank">
                <FaTwitter />
              </a>
            </li>
            <li className="listItem">
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram />
              </a>
            </li>
            <li className="listItem">
              <a href="https://www.vimeo.com/" target="_blank">
                <FaVimeoV />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mainFooter-mid">
        <div className={"menuFooter " + (menuOpen && "active")}>
          <ul>
            <li>
              <a className="link" href="#link1">
                MORE IN TECH
              </a>
            </li>

            <li>
              <a className="link" href="#link2">
                SPOTLIGHT
              </a>
            </li>

            <li>
              <a className="link" href="#link3">
                LATEST IN TECH
              </a>
            </li>

            <li>
              <a className="link" href="#link4">
                TRENDING
              </a>
            </li>

            <li>
              <a className="link" href="#link5">
                QUICK NEWS
              </a>
            </li>
            {/*  {console.log()} */}
          </ul>
        </div>
      </div>
      <div class="mainFooter-bot">
        <p>© 2021 dci project</p>
      </div>
    </div>
)
  }
