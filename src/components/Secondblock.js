import React from "react";
import Newsletter from "./Newsletter";
import Quicknews from "./Quicknews";

function Secondblock() {
  return (
    <div className="moreintech-quick-subscribe">
      <div className="moreintech-in-tech">
        <div className="moreintech-heading">
          <h2>
            MORE IN TECH <span>//</span>
          </h2>
        </div>
        <div className="moreintech-articles-container">
          <div className="moreintech-article">
            <div className="moreintech-article-img">
              <img src="https://media3.giphy.com/media/QpVUMRUJGokfqXyfa1/giphy.gif"></img>
            </div>
            <div className="moreintech-article-text">
              {" "}
              <div className="moreintech-article-heading">
                <h2>Heading: This is heading lorem ipsum dolor sit amet</h2>
              </div>
              <div className="author-date">
                <span>AUTHOR</span> <span> / </span>
                <span>DATE</span>{" "}
              </div>
              <div className="moreintech-article-desc">
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
          <div className="moreintech-article">
            <div className="moreintech-article-img">
              <img src="https://treasurytoday.com/-/media/images/technology/treasury-systems/2019-07-08-tta-08-t__business-technology-software-development-iot-concept-1187255977__1920x1080.jpg"></img>
            </div>
            <div className="moreintech-article-text">
              {" "}
              <div className="moreintech-article-heading">
                <h2>Heading: This is heading lorem ipsum dolor sit amet</h2>
              </div>
              <div className="author-date">
                <span>AUTHOR</span> <span> / </span>
                <span>DATE</span>{" "}
              </div>
              <div className="moreintech-article-desc">
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
          <div className="moreintech-article">
            <div className="moreintech-article-img">
              <img src="https://i.gifer.com/NKQ9.gif"></img>
            </div>
            <div className="moreintech-article-text">
              {" "}
              <div className="moreintech-article-heading">
                <h2>Heading: This is heading lorem ipsum dolor sit amet</h2>
              </div>
              <div className="author-date">
                <span>AUTHOR</span> <span> / </span>
                <span>DATE</span>{" "}
              </div>
              <div className="moreintech-article-desc">
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
          <div className="moreintech-article">
            <div className="moreintech-article-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZhWWaDFu747OY4qkGAH5lyIRlBHLDZfG3g&usqp=CAU"></img>
            </div>
            <div className="moreintech-article-text">
              <div className="moreintech-article-heading">
                <h2>Heading: This is heading lorem ipsum dolor sit amet</h2>
              </div>
              <div className="author-date">
                <span>AUTHOR</span> <span> / </span>
                <span>DATE</span>
              </div>
              <div className="moreintech-article-desc">
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
      <div className="quicknews-newsletter">
        <Quicknews />
        <Newsletter />
      </div>
    </div>
  );
}

export default Secondblock;