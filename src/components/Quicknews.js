import React, { useState, useEffect, useContext } from "react";
import { Store, StoreContext } from "../context";

function Quicknews() {
  const contextObj = useContext(StoreContext);

  console.log(contextObj.newArr);
  const items = contextObj.newArr.map((item, i) => {
    if (i > 16 && i < 18) {
      return (
        <div className="quicknews">
          <div className="quicknews-heading">
            <div className="quicknews-heading-wrapper">
              <h2>
                quick news<span>//</span>
              </h2>
            </div>
          </div>
          <div className="quicknews-article-container">
            <div className="quicknews-article-img">
              <a href={item.url} target="_blank">
                <img src={item.urlToImage} />
              </a>
            </div>
            <div className="quicknews-article-text">
              <div className="quicknews-article-heading">
                <h4>{item.title}</h4>
              </div>
              <div className="quicknews-author-date">
                <span>{item.author}</span>
                <span> </span>
                <span>{item.publishedAt}</span>
              </div>
              <div className="quicknews-article-desc">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
  return <div className="quicknews">{items}</div>;
}

export default Quicknews;
