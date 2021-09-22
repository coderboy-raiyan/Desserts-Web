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
  // Search filterCake
  let handelfilter = (e) => {
    let userKey = e.target.value.trim().toLowerCase();
    let filtered = Cakes.filter((cake) =>
      cake.category.toLocaleLowerCase().includes(userKey)
    );
    setCakes(filtered);
  };

  // Handel Cart
  let handelCart = (id) => {
    console.log(id);
  };

  return (
    <section className="our-store py-5" id="store">
      <div className="container">
        <h1 className="store-title text-center fw-bolder py-4">Our Store</h1>
        {/* Catagory filter Buttons */}
        <div className="filter-row d-flex justify-content-center flex-wrap">
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
        <div className="input-group mb-3 mb-5">
          <input
            type="text"
            className="form-control"
            placeholder="Search your favourite desserts"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={handelfilter}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
        {/* My singal Cake card */}
        <div className="row">
          {cakes.map((cname) => {
            return (
              <StoreCard
                cakes={cname}
                handelCart={() => handelCart(cname.id)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Store;
