import React, { useContext } from "react";
import { StoreContext } from "../context";

function Quicknews() {
  const contextObj = useContext(StoreContext);
  console.log(contextObj.store.dataNew);
  const items = contextObj.store.dataNew.map((item, i) => {
    if (i > 15 && i < 17) {
      return (
        <div key={i} className="quicknews">
          <div className="quicknews-heading">
            <div className="quicknews-heading-wrapper">
              <h2>
                QUICK NEWS<span>//</span>
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
                {/* <p>
                  <h3>{item.content}</h3>
                </p> */}
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
