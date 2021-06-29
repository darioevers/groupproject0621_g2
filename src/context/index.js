import React from "react";

const Store = {
  dataNew: [],
  fetchData: function () {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=456c11b241e8410394c1cf4681c37216"
    )
      .then((response) => response.json())
      .then((data) => {
        data.articles.map((item) => Store.dataNew.push(item));
      });
  },
  print: () => console.log(Store.fetchData),
};
const storeContext = React.createContext(Store);
export { Store, storeContext };
