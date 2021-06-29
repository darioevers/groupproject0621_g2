import React from "react";

import { Store } from "../context";
function Trending() {
  const trend = Store.dataNew.map((item, i) => {
    if (i > 4 && i < 9) {
      return (
        <li key={i}>
          <a href={item.url} target="_blank">
            <img alt="tech" className="img-res" src={item.urlToImage} />
          </a>
        </li>
      );
    }
  });
  return <div className="trending">{trend}</div>;
}

export default Trending;
