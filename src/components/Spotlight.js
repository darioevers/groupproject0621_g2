import React from "react";

function Spotlight() {
  return (
    <div className="spotlight">
      <div className="spotlight-heading">
        <h2>
          SPOTLIGHT <span>//</span>
        </h2>
        <div className="spotlight-divider"></div>
      </div>
      <div className="spotlight-content-container">
        <div className="spotlight-content-left-img">
          {
            <img src="https://www.futureon.com/wp-content/uploads/2019/04/4.jpg"></img>
          }
        </div>
        <div className="spotlight-content-right-container">
          <div className="spotlight-content-right-top-wrapper">
            <div className="spotlight-content-right">
              <img src="https://www.epo.org/about-us/annual-reports-statistics/annual-report/2018/insights/patents-in-digital-technologies/header.jpg?lenya.module=svg&height=283&width=761"></img>
            </div>
            <div className="spotlight-content-right">
              <img src="https://www.epo.org/about-us/annual-reports-statistics/annual-report/2018/insights/patents-in-digital-technologies/header.jpg?lenya.module=svg&height=283&width=761"></img>
            </div>
          </div>
          <div className="spotlight-content-right-bottom-wrapper">
            <div className="spotlight-content-right">
              <img src="https://www.epo.org/about-us/annual-reports-statistics/annual-report/2018/insights/patents-in-digital-technologies/header.jpg?lenya.module=svg&height=283&width=761"></img>
            </div>
            <div className="spotlight-content-right">
              <img src="https://www.epo.org/about-us/annual-reports-statistics/annual-report/2018/insights/patents-in-digital-technologies/header.jpg?lenya.module=svg&height=283&width=761"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spotlight;
