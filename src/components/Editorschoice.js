import React, { useContext } from "react";
// import { alignPropType } from "react-bootstrap/esm/DropdownMenu";

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
                <img src={urlToImage}alt="pic" />
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
  

    /*  <div className="editor-images">
        <div className="editor-img-container">
          <img src="https://www.re-thinkingthefuture.com/wp-content/uploads/2021/01/A2797-10-must-have-gadgets-for-every-architect.jpg"></img>
          <img src="https://www.re-thinkingthefuture.com/wp-content/uploads/2021/01/A2797-10-must-have-gadgets-for-every-architect.jpg"></img>
          <img src="https://www.re-thinkingthefuture.com/wp-content/uploads/2021/01/A2797-10-must-have-gadgets-for-every-architect.jpg"></img>
          <img src="https://www.re-thinkingthefuture.com/wp-content/uploads/2021/01/A2797-10-must-have-gadgets-for-every-architect.jpg"></img>
        </div>
      </div>
      <div className="editor-text">
        <div className="editor-item-heading">
          <h3>Heading: This is heading</h3>
        </div>
        <div className="author-date">
          <span>AUTHOR</span> <span> / </span>
          <span>DATE</span>
          <div className="editor-item-heading">
            <h3>Heading: This is heading</h3>
          </div>
          <div className="author-date">
            <span>AUTHOR</span> <span> / </span>
            <span>DATE</span>
          </div>
          <div className="editor-item-heading">
            <h3>Heading: This is heading</h3>
          </div>
          <div className="author-date">
            <span>AUTHOR</span> <span> / </span>
            <span>DATE</span>
          </div>
          <div className="editor-item-heading">
            <h3>Heading: This is heading</h3>
          </div>
          <div className="author-date">
            <span>AUTHOR</span> <span> / </span>
            <span>DATE</span>
          </div>
        </div>
      </div> */
  
