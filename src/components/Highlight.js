import React from "react";

function Highlight() {
  return (
    <div className="highlight">
      <div className="highlight-left">
        <div className="highlight-left-img">
          <img src="https://videohive.img.customer.envatousercontent.com/files/278380107/Image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=23e0d5f2b0a2307cdf26795fcbe1489e"></img>
        </div>
        <div className="highlight-left-text">
          <h4>CATEGORY</h4>
          <div>
            <h2>Heading lorem ipsum 123 khfkjsdlf lorem ipsum 123 dsahi</h2>
          </div>
          <div>
            <span>AUTHOR</span> <span> / </span>
            <span>DATE</span>
          </div>
        </div>
      </div>
      <div className="highlight-middle">
        <div className="highlight-middle-img">
          <img src="http://www.raqwe.com/wp-content/uploads/2013/07/scrooser-elektroskuter-city-raqwe.com-01.jpg"></img>
        </div>
        <div className="highlight-middle-text">
          <h4>CATEGORY</h4>
          <div>
            {" "}
            <h2>Heading lorem ipsum 123 dsahi</h2>
          </div>
          <div>
            <span>AUTHOR</span> <span> / </span>
            <span>DATE</span>
          </div>
        </div>
      </div>
      <div className="highlight-right">
        <div className="highlight-right-img">
          <img src="https://vhs-story.com/wp-content/uploads/2019/05/Tech-News.jpg"></img>
        </div>
        <div className="highlight-right-text">
          <h4>CATEGORY</h4>
          <div>
            {" "}
            <h2>Heading loreipsum 123 dsahi</h2>
          </div>
          <div>
            <span>AUTHOR</span> <span> / </span>
            <span>DATE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
