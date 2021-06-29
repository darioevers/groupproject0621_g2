import React, { useContext } from "react";
import { alignPropType } from "react-bootstrap/esm/DropdownMenu";

import { Store } from "../context";

function Editorschoice() {
  const store = useContext(Store);
  console.log(Store.dataNew);

  Store.fetchData();

  const authorInfo = Store.dataNew.map((item, i)=>{
    const {
      
   title,   
author,
urlToImage,
publishedAt,
    } = item;
    return (
      <li key={i}>
      <div className="editor-choice">
        <div className="editor-heading">
          <h2>
            {title} <span></span>
          </h2>
        </div>
        <div className="editor-items-container">
          <div className="editor-items">
            <div className="editor-item">
              <div className="editor-item-image">
                <img src= {urlToImage}alt="pic" />
              </div>
              <div className="editor-item-heading">
                <h3>{title}</h3>
              </div>
              <div className="author-date">
                <span>{author}</span> <span> </span>
                <span>{publishedAt}</span>{" "}
              </div>
            </div>
            </div>
            </div>
          </div>
          </li>
  )});
  return (
   <ul>
     {authorInfo}
   </ul> 
  )

  
}

export default Editorschoice;
  
