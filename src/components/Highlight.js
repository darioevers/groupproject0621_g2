import React from "react";
import { Store } from "../context";
// import { Carousel } from "react-responsive-carousel";
function Highlight() {
  console.log(Store.dataNew);
  Store.fetchData();

  const highlight = Store.dataNew.map((item, i) => {
    if (i < 1) {
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

          <div key={i} className="highlight-middle">
            <div className="highlight-middle-img">
              {
                <a href={item.url} target="_blank">
                  <img src={item.urlToImage} />
                </a>
              }
            </div>
            <div className="highlight-middle-text">
              <h4>CATEGORY</h4>
              <div className="highlight-heading-middle">
                <h3>{item.title}</h3>
              </div>
              <div className="author-date-middle">
                <span>{item.author} </span> <span> / </span>
                <span>{item.publishedAt} </span>
              </div>
            </div>
          </div>

          <div key={i} className="highlight-right">
            <div className="highlight-right-img">
              <a href={item.url} target="_blank">
                <img src={item.urlToImage} />
              </a>
            </div>
            <div className="highlight-right-text">
              <h4>CATEGORY</h4>
              <div className="highlight-heading-right">
                <h3>{item.title}</h3>
              </div>
              <div className="author-date-right">
                <span>{item.author} </span> <span> / </span>
                <span>{item.publishedAt} </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
  return <div className="highlight"> {highlight}</div>;
}

export default Highlight;
