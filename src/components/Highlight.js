import React, { useContext } from "react";
import { StoreContext } from "../context";

function Highlight() {
  const contextObj = useContext(StoreContext);
  //console.log(contextObj.store.dataNew);
  const items = contextObj.store.dataNew.map((item, i) => {
    if (i < 3) {
      // if (i == 0) {
      //   className = "highlight-left";
      // }
      return (
        <div className="highlight">
          <div key={i} className="highlight-left">
            <div className="highlight-left-img">
              {
                <a href={item.url} target="_blank">
                  <img src={item.urlToImage} />
                </a>
              }
            </div>
            <div className="highlight-left-text">
              <h4>CATEGORY</h4>
              <div className="highlight-heading-left">
                <h3>{item.title}</h3>
              </div>
              <div className="author-date-left">
                <span>{item.author} </span> <span> / </span>
                <span>{item.publishedAt} </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
  return <div className="highlight"> {items}</div>;
}

export default Highlight;
