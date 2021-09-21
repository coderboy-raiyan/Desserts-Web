import React from "react";
import "./Store.css";

const StoreCard = ({ cakes }) => {
  return (
    <div className="col-12 col-lg-4 col-md-4 card-inner">
      <div className="card mb-3 ">
        <div className="c-img overflow-hidden">
          <img
            src={cakes.image}
            className="card-img-top card-img"
            alt="my cake"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-between">
            <span>{cakes.category}</span> <span>{cakes.price}</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
