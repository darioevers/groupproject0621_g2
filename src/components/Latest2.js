import React, { useState, useEffect, useContext } from "react";
import Social from "./Social";
import Trending from "./Trending";
import { StoreContext } from "../context";
function Latest2() {
  const contextObj = useContext(StoreContext);
  const items = contextObj.newArr.map((item, i) => {
    if (i > 15 && i < 20) {
      return (
        <div key={i} className="latest-article">
          <div>
            <a href={item.url} target="_blank">
              <img
                alt="tech"
                className="latest-article-img"
                src={item.urlToImage}
              />
            </a>
          </div>
          <div className="latest-article-text">
            <div className="latest-article-heading">
              <h2>{item.title}</h2>
            </div>
            <div className="author-date">
              <span> {item.author}</span> <span> / </span>
              <span> {item.publishedAt}</span>
            </div>
            <div className="latest-article-desc">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      );
    }
  });
  return (
    <div className="latest-trending-social">
      <div className="latest-in-tech">
        <div className="latest-heading">
          <h2>
            LATEST IN TECH <span>//</span>
          </h2>
        </div>
        <ul className="latest-articles-container">{items}</ul>
      </div>
      <div className="divider"></div>
      <div className="trending-social">
        <Trending />

        <Social />
      </div>
    </div>
  );
}

export default Latest2;
