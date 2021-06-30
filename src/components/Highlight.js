import React, { useState, useEffect, useContext } from "react";
import { Store, StoreContext } from "../context";

function Highlight() {
  const contextObj = useContext(StoreContext);

  console.log(contextObj.newArr);
  const items = contextObj.newArr.map((item, i) => {
    if (i > 3 && i < 7) {
      const dateArr = item.publishedAt.split("").slice(0, 10).join("");
      console.log(dateArr);

      return (
        <div key={i} className="highlight-left">
          <div className="highlight-left-img">
            <a href={item.url} target="_blank">
              <img src={item.urlToImage} />
            </a>
          </div>
          <div className="highlight-right-text">
            <h4>CATEGORY</h4>
            <div className="highlight-heading-left">
              <a href={item.url} target="_blank">
                <h3>{item.title}</h3>
              </a>
            </div>
            <div className="author-date-left">
              <span>{item.author} </span> <span> / </span>
              <span>{dateArr}</span>
            </div>
          </div>
        </div>
      );
    }
  });
  return <div className="highlight"> {items}</div>;
}

export default Highlight;
