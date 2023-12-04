import React from "react";

const GetOurApp = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="app-section">
          <h2>Get Our App</h2>
          <p>You can use our App for better experience on smartphones</p>
          <div className="app-buttons">
            <div className="app-btn">
              <img src="/assets/images/apple-store.svg" alt="" />
              <span>App Store</span>
            </div>
            <div className="app-btn">
              <img src="/assets/images/play-store.svg" alt="" />
              <span>Google Play</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetOurApp;
