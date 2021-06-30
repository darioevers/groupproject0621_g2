import React, { useContext } from "react";
import { StoreContext } from "../context";
function Trending() {
  const contextObj = useContext(StoreContext);
  //console.log(contextObj.store.dataNew);
  const items = contextObj.store.dataNew.map((item, i) => {
    if (i > 8 && i < 10) {
      return (
        <div>
          <div className="trending-heading">
            <div className="trending-heading-wrapper">
              <h2>
                trending<span>//</span>
              </h2>
            </div>
          </div>
          <div className="trending-article-container">
            <div className="trending-article-img">
              <a href={item.url} target="_blank">
                <img
                  alt="tech"
                  className="latest-article-img"
                  src={item.urlToImage}
                />
              </a>
            </div>
            <div className="trending-article-text">
              <div className="trending-article-heading">
                <h4>{item.title}</h4>
              </div>
              <div className="trending-author-date">
                <span>{item.author}</span>
                <span> </span>
                <span>{item.publishedAt}</span>
              </div>
              <div className="trending-article-desc">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
  return <div className="trending">{items}</div>;
}
export default Trending;
