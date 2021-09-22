import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-us container" id="About">
      {/* left side about */}
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 col-md-6">
          <div className="left-side-about">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              aliquam voluptas beatae vitae expedita consectetur nesciunt quia
              deserunt asperiores facere fuga dicta fugiat corrupti et omnis
              porro at dolorum! Ad!
            </p>
            <button className="btn btn-outline-secondary">Explore</button>
          </div>
        </div>
        {/* right side about */}
        <div className="col-12 col-lg-6 col-md-6 mt-5">
          <div className="right-side-about">
            <div className="about-img">
              <img
                src="https://js-beginners.github.io/filter-project/img/sweets-1.jpeg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
