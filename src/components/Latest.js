import React, { useContext } from "react";
import { StoreContext } from "../context";
const Lastest = () => {
  const contextObj = useContext(StoreContext);
  console.log(contextObj.store.dataNew);
  const items = contextObj.store.dataNew.map((item, i) => {
    console.log(item);
    return (
      <li key={i}>
        <h2>{item.title} </h2>
        <h3>{item.content}</h3>
        <h5>{item.author}</h5>
        <h6>{item.publishedAt} </h6>
        <img src={item.urlToImage} />
      </li>
    );
  });
  return (
    <div className="news-box">
      <ul>{items}</ul>
    </div>
  );
};
export default Lastest;
