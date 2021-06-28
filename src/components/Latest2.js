import React from "react";
import Social from "./Social";
import Trending from "./Trending";

function latest2() {
  return (
    <div className="latest-trending-social">
      <div className="latest-in-tech">
        <div className="latest-heading">
          <h2>
            LATEST IN TECH <span>//</span>
          </h2>
        </div>
        <div className="latest-articles-container">
          <div className="latest-article">
            <div className="latest-article-img">
              <img src="http://www.human2human.consulting/wp-content/uploads/2017/08/Some-Council-Staff-are-blocking-technology.png"></img>
            </div>
            <div className="latest-article-text">
              {" "}
              <div className="latest-article-heading">
                <h2>Heading: This is heading lorem ipsum dolor sit amet</h2>
              </div>
              <div className="author-date">
                <span>AUTHOR</span> <span> / </span>
                <span>DATE</span>{" "}
              </div>
              <div className="latest-article-desc">
                <p>
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="latest-article">
            <div className="latest-article-img">
              <img src="https://treasurytoday.com/-/media/images/technology/treasury-systems/2019-07-08-tta-08-t__business-technology-software-development-iot-concept-1187255977__1920x1080.jpg"></img>
            </div>
            <div className="latest-article-text">
              {" "}
              <div className="latest-article-heading">
                <h2>Heading: This is heading lorem ipsum dolor sit amet</h2>
              </div>
              <div className="author-date">
                <span>AUTHOR</span> <span> / </span>
                <span>DATE</span>{" "}
              </div>
              <div className="latest-article-desc">
                <p>
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="latest-article">
            <div className="latest-article-img">
              <img src="http://cdn.mos.cms.futurecdn.net/8bEfxy8skS6fUVZnfaLWxj.jpg"></img>
            </div>
            <div className="latest-article-text">
              {" "}
              <div className="latest-article-heading">
                <h2>Heading: This is heading lorem ipsum dolor sit amet</h2>
              </div>
              <div className="author-date">
                <span>AUTHOR</span> <span> / </span>
                <span>DATE</span>{" "}
              </div>
              <div className="latest-article-desc">
                <p>
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="latest-article">
            <div className="latest-article-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZhWWaDFu747OY4qkGAH5lyIRlBHLDZfG3g&usqp=CAU"></img>
            </div>
            <div className="latest-article-text">
              <div className="latest-article-heading">
                <h2>Heading: This is heading lorem ipsum dolor sit amet</h2>
              </div>
              <div className="author-date">
                <span>AUTHOR</span> <span> / </span>
                <span>DATE</span>
              </div>
              <div className="latest-article-desc">
                <p>
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
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
