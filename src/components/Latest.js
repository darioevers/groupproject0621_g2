import React, { useContext } from "react";
import { StoreContext } from "../context";
const Lastest = () => {
  const contextObj = useContext(StoreContext);
  // const store = useContext(Store);
  console.log(contextObj.Store.dataNew);
  // Store.fetchData();
  const newsList = contextObj.Store.dataNew.map((item, i) => (
    <li key={i}>
      <h2>{item.title} </h2>
      <h3>{item.content}</h3>
      <h5>{item.author}</h5>
      <h6>{item.publishedAt} </h6>
      <img src={item.urlToImage} />
    </li>
  ));
  return (
    <div className="news-box">
      <ul>{newsList}</ul>
    </div>
  );
};
export default Lastest;
