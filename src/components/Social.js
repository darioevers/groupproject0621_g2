import React from "react";
 
function Social() {
  return (
    <div className="social">
      <div className="social-heading">
        <div className="social-heading-wrapper">
          <h2>
            SOCIALIZE WITH US <span> //</span>
          </h2>
        </div>
      </div>
      <div className="social-buttons">
        <div className="social-buttons-left">
          <button className="facebook-btn">
            <a href="https://www.facebook.com/" target="_blank">
              Facebook
            </a>
          </button>
          <button className="pinterest-btn">
            <a href="https://www.Pinterest.com/" target="_blank">
              Pinterest
            </a>
          </button>
          <button className="youtube-btn">
            <a href="https://www.Youtube.com/" target="_blank">
              Youtube
            </a>
          </button>
        </div>
        <div className="social-buttons-right">
          <button className="twitter-btn">
            <a href="https://www.Twitter.com/" target="_blank">
              Twitter
            </a>
          </button>
          <button className="instagram-btn">
            <a href="https://www.Instagram.com/" target="_blank">
              Instagram
            </a>
          </button>
          <button className="vimeo-btn">
            <a href="https://www.Vimeo.com/" target="_blank">
              Vimeo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Social;
