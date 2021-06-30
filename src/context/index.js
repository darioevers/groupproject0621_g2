import React from "react";

const Store = {
  dataNew: [],
  fetchData: function () {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=976c618d659c44fd825f99e88a65267e"
    )
      .then((response) => response.json())
      .then((data) => {
        data.articles.map((item) => Store.dataNew.push(item));
      });
  },
};
const StoreContext = React.createContext(Store);
export { Store, StoreContext };
