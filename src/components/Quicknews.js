import React from "react";

function Quicknews() {
  return (
    <div className="quicknews">
      <div className="quicknews-heading">
        <div className="quicknews-heading-wrapper">
          <h2>
            QUICK NEWS<span>//</span>
          </h2>
        </div>
      </div>
      <div className="quicknews-article-container">
        <div className="quicknews-article-img">
          <a>
            <img src="https://news.lenovo.com/wp-content/uploads/2019/11/Lenovo_TechWorld19_Beijing_A_Keynote_00636-scaled.jpg"></img>
          </a>
        </div>
        <div className="quicknews-article-text">
          <div className="quicknews-article-heading">
            <h3>Heading: This is heading</h3>
          </div>
          <div className="quicknews-author-date">
            <span>AUTHOR</span>
            <span> </span>
            <span>DATE</span>
          </div>
          <div className="quicknews-article-desc">
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

export default Quicknews;
