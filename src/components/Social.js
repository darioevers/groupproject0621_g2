import React from "react";

function Social() {
  return (
    <div className="social">
      <div className="social-heading">
        <div className="social-heading-wrapper">
          <h2>
            socialize with us<span>//</span>
          </h2>
        </div>
      </div>
      <div className="social-buttons">
        <div className="social-buttons-left">
          <button className="facebook-btn">Facebook</button>
          <button className="pinterest-btn">Pinterest</button>
          <button className="youtube-btn">Youtube</button>
        </div>
        <div className="social-buttons-right">
          <button className="twitter-btn">Twitter</button>
          <button className="instagram-btn">Instagram</button>
          <button className="vimeo-btn">Vimeo</button>
        </div>
      </div>
    </div>
  );
}

export default Social;
