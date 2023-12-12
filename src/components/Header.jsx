import React from "react";

const Header = () => {
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 60) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  return (
    <header>
      <div className="wrapper">
        <nav>
          <div className="logo">GD.</div>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Our Work</a>
            </li>
            <li>
              <a href="#" className="btn dark">
                Enroll Now
              </a>
            </li>
          </ul>
        </nav>

        {/* End of desktop Navigation Menu */}

        <div className="hero-section">
          <div className="left">
            <h1>
              Learn the art of <br /> Game Dev
            </h1>
            <p>
              This is a comprehensive course on Game Development. You will learn
              everything from generating an idea to publishing your games to
              different platforms.
            </p>
            <a href="#" className="btn light enroll-icon">
              Enroll Now
            </a>
          </div>
          <div className="right">
            <img src="/assets/images/hero-image-1.png" alt="" />
          </div>
          <div className="achievement-cards">
            <div className="achievement-card students-enrolled">
              <div className="content">
                <div>
                  <h3>32K</h3>
                </div>

                <p>Students Enrolled</p>
              </div>
              <div className="bg"></div>
            </div>
            <div className="achievement-card overall-rating">
              <div className="content">
                <div>
                  <h3>4.7</h3>
                  <img src="/assets/images/emojione_star.svg" alt="" />
                </div>
                <p>Overall Rating</p>
              </div>
              <div className="bg"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
