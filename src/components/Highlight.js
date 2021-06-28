import React from "react";
import { Store } from "../context";
// import { Carousel } from "react-responsive-carousel";
function Highlight() {
  console.log(Store.dataNew);
  Store.fetchData();

  const highlight = Store.dataNew.map((item, i) => {
    if (i < 3) {
      return (
        <li key={i}>
          <div className="highlight-left">
            <div className="highlight-left-img">
              <a href={item.url} target="_blank">
                <img className="img-res" src={item.urlToImage} />
              </a>
            </div>
            <div className="highlight-left-text">
              <h4>CATEGORY</h4>
              <div>
                <h3>{item.title}</h3>
              </div>
              <div>
                <span>AUTHOR{item.author} </span> <span> / </span>
                <span>DATE{item.publishedAt} </span>
              </div>
            </div>
          </div>
        </li>
      );
    }
  });
  return <div className="highlight"> {highlight}</div>;
}

export default Highlight;
