import React, { useContext } from "react";
import { StoreContext } from "../context";

function Newsletter() {
  const contextObj = useContext(StoreContext);

  const items = contextObj.store.dataNew.map((item, i) => {
    if (i > 15 && i < 22) {
      return (
        <li key={i}>
          <a href={item.url} target="_blank">
            <h4>{item.title}</h4>
          </a>
        </li>
      );
    }
  });
  return <div className="newsletter">{items}</div>;
}

export default Newsletter;
