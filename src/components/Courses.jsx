import React from "react";

const Courses = () => {
  return (
    <section>
      <div className="courses-section">
        <div className="wrapper">
          <h2 className="light">Our Courses</h2>
          <div className="course-cards">
            <div className="course-card">
              <img src="/assets/images/course-1.png" alt="" />
              <div className="info">
                <h3>Game Design Essentials</h3>
                <div className="duration">8 Hrs</div>
              </div>
            </div>
            <div className="course-card">
              <img src="/assets/images/course-2.png" alt="" />
              <div className="info">
                <h3>Unity Game Engine Fundamentals</h3>
                <div className="duration">8 Hrs</div>
              </div>
            </div>
          </div>
          <a href="#" className="btn light">
            All Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
