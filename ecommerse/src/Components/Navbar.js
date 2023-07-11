import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/show">
                Show
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">
                Add Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin-product">
                Product List
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
