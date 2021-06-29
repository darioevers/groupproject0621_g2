import React, { useContext } from "react";
import { Store } from "../context";
const Lastest = () => {
  const store = useContext(Store);
  console.log(Store.dataNew);
  Store.fetchData();
  const newsList = Store.dataNew.map((item, i) => (
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
