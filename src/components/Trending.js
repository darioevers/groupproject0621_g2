import React from "react";

function Trending() {
  return (
    <div className="trending">
      <div className="trending-heading">
        <div className="trending-heading-wrapper">
          <h2>
            <a id="link4">trending</a> <span>//</span>
          </h2>
        </div>
      </div>
      <div className="trending-article-container">
        <div className="trending-article-img">
          <a>
            <img src="https://news.lenovo.com/wp-content/uploads/2019/11/Lenovo_TechWorld19_Beijing_A_Keynote_00636-scaled.jpg"></img>
          </a>
        </div>
        <div className="trending-article-text">
          <div className="trending-article-heading">
            <h3>Heading: This is heading</h3>
          </div>
          <div className="trending-author-date">
            <span>AUTHOR</span>
            <span> </span>
            <span>DATE</span>
          </div>
          <div className="trending-article-desc">
            <p>
              The most important technology news, developments and trends with
              insightful analysis and commentary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
