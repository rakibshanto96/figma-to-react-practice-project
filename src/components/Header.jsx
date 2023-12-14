import React from "react";

const Header = () => {
  const nav = document.querySelector("nav");
  const mobileNav = document.querySelector("nav.mobile-nav");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(
    ".mobile-menu-container .close-icon"
  );
  const mobileMenuContainer = document.querySelector(".mobile-menu-container");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 60) {
      nav.classList.add("scrolled");
      mobileNav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
      mobileNav.classList.remove("scrolled");
    }
  });

  menuIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active");
  });

  closeIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
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

        <nav className="mobile-nav">
          <div className="logo">GD.</div>
          <div className="menu-icon">
            <img src="/assets/images/menu-icon.svg" alt="" />
          </div>
        </nav>

        <div className="mobile-menu-container">
          <div className="close-icon">
            <img src="/assets/images/close-icon.svg" alt="" />
          </div>

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
                Enrol Now
              </a>
            </li>
          </ul>
        </div>

        {/* End of mobile nav bar */}

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
