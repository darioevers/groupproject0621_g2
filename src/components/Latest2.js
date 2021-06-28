import React from "react";
import Social from "./Social";
import Trending from "./Trending";

function latest2() {
  return (
    <div className="latest-trending-social">
      <div className="latest-in-tech">
        <div className="latest-heading">
          <h2>LATEST IN TECH</h2>
        </div>
      </div>
      <div className="trending-social">
        <Trending />
        <Social />
      </div>
    </div>
  );
}

export default latest2;
