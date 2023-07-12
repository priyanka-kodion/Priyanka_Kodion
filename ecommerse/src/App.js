import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Add from "./Components/Add";
import List from "./Components/List";
import Show from "./Components/Show";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <Router>
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
                <Link className="nav-link" to="/list">
                  Product List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/show" element={<Show products={products} />} />
        <Route path="/add" element={<Add onAddProduct={handleAddProduct} />} />
        <Route path="/list" element={<List products={products} />} />
      </Routes>
    </Router>
  );
};

export default App;
