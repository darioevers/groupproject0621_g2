import React, { useState, useEffect, useContext } from "react";
import { Store, StoreContext } from "../context";

function Quicknews() {
  const contextObj = useContext(StoreContext);
  const [store, setStore] = useState(Store);

  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setNewArr(data);
        setStore(() => (store.dataNew = data));
      });
  }, [newArr]);
  const items = newArr.map((item, i) => {
    if (i > 16 && i < 20) {
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
                <h3>{item.title}</h3>
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
