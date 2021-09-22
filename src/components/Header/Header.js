import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="#Home">
          <img
            src="https://js-beginners.github.io/filter-project/img/logo.svg"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-bolder fs-5">
            <li className="nav-item me-3">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#About">
                About
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#store">
                Store
              </a>
            </li>
            <li className="nav-item me-3 ">
              <button
                type="button"
                className="btn btn-outline-secondary fs-5"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="bi bi-cart3"></i> 2 items
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
