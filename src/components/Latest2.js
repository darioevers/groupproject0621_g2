import React, { useState, useEffect, useContext } from "react";
import Social from "./Social";
import Trending from "./Trending";
import { StoreContext } from "../context";
function Latest2() {
  const contextObj = useContext(StoreContext);
  const latest = contextObj.store.dataNew.map((item, i) => {
    if (i > 3 && i < 8) {
      return (
        <li key={i}>
          <div className="latest-article">
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
                <span>AUTHOR : {item.author}</span> <span> / </span>
                <span>DATE : {item.publishedAt}</span>
              </div>
              <div className="latest-article-desc">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        </li>
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
        <ul className="latest-articles-container">{latest}</ul>
      </div>
      <div className="trending-social">
        <Trending />
        <Social />
      </div>
    </div>
  );
}

export default Latest2;
