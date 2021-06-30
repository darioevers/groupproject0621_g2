import React, { useState, useEffect, useContext } from "react";
import { Store, StoreContext } from "../context";
import Newsletter from "./Newsletter";
import Quicknews from "./Quicknews";

function Secondblock() {
  const contextObj = useContext(StoreContext);

  console.log(contextObj.articles);
  const items = contextObj.newArr.map((item, i) => {
    if (i > 9 && i < 14) {
      const dateArr = item.publishedAt.split("").slice(0, 10).join("");
      return (
        <div key={i} id="#lnk1" className="moreintech-articles-container">
          <div className="moreintech-article">
            <div className="moreintech-article-img">
              <a href={item.url} target="_blank">
                <img
                  alt="tech"
                  className="latest-article-img"
                  src={item.urlToImage}
                />
              </a>
            </div>
            <div className="moreintech-article-text">
              <div className="moreintech-article-heading">
                <a href={item.url} target="_blank">
                  <h3>{item.title}</h3>
                </a>
              </div>
              <div className="author-date">
                <span>{item.author}</span> <span> / </span>
                <span>{dateArr}</span>
              </div>
              <div className="moreintech-article-desc">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
  return (
    <div className="moreintech-quick-subscribe">
      <div className="moreintech-in-tech">
        <div className="moreintech-heading">
          <h2>
            <a id="link1"> MORE IN TECH</a> <span>//</span>
          </h2>
        </div>
        <div className="moreintech-articles-container"> {items}</div>
      </div>
      <div className="divider"></div>
      <div className="quicknews-newsletter">
        <Quicknews />
        <Newsletter />
      </div>
    </div>
  );
}

export default Secondblock;
 