import React, { useState } from "react";
import Cakes from "./Cakeapi";
import "./Store.css";
import StoreCard from "./StoreCard";

let categories = [
  ...new Set(
    Cakes.map((cake) => {
      return cake.category;
    })
  ),
];

const Store = () => {
  let [cakes, setCakes] = useState(Cakes);

  // Filter With Button
  let filterCake = (category) => {
    let newCake = Cakes.filter((cake) => {
      return cake.category === category;
    });
    setCakes(newCake);
  };

  return (
    <section className="our-store py-5" id="store">
      <div className="container">
        <h1 className="store-title text-center fw-bolder py-4">Our Store</h1>
        {/* Catagory filter Buttons */}
        <div className="filter-row d-flex justify-content-center">
          {categories.map((cname) => {
            let myObj = {
              cakeName: cname,
            };
            return (
              <button
                className="btn btn-outline-secondary me-4 mb-5"
                onClick={() => filterCake(myObj.cakeName)}
              >
                {myObj.cakeName}
              </button>
            );
          })}
          <button
            className="btn btn-outline-secondary me-4 mb-5"
            onClick={() => setCakes(Cakes)}
          >
            All
          </button>
        </div>
        {/* Search Box */}

        {/* My singal Cake card */}
        <div className="row">
          {cakes.map((cname) => {
            return <StoreCard cakes={cname} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Store;
