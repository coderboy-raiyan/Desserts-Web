import React from "react";
import "./Store.css";

const StoreCard = ({ cakes, handelCart }) => {
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
          <button
            className="btn btn-outline-secondary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={handelCart}
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
