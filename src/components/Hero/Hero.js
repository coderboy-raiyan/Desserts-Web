import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="main-hero" id="home">
      <div className="row">
        <div className="col-12">
          <h1 className="text-white">
            Welcome To <span className="title">Grandma's</span>
          </h1>
          <button className="btn btn-outline-secondary m-auto d-block py-2 text-uppercase mt-4 px-5 fs-3">
            Expolre
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
