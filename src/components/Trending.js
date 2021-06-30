import React from "react";

function Trending() {
  return (
    <div className="trending">
      <div className="trending-heading">
        <div className="trending-heading-wrapper">
          <h2>
            trending<span>//</span>
          </h2>
        </div>
      </div>
      <div className="trending-article-container">
        <div className="trending-article-img">
          <a
            href="https://www.simplilearn.com/top-technology-trends-and-jobs-article"
            target="_blank"
          >
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_technology_trends.jpg"></img>
          </a>
        </div>
        <div className="trending-article-text">
          <div className="trending-article-heading">
            <h3>Top 10 Trending Technologies To Master In 2021</h3>
          </div>
          <div className="trending-author-date">
            <span>www.edureka.co</span>
            <span> </span>
            <span>2021-01-27</span>
          </div>
          <div className="trending-article-desc">
            <p>
              Change is the only constant. This applies to your professional
              life as well. Up-skilling yourself is a need nowadays, the reason
              is pretty simple, technology is evolving very quickly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
