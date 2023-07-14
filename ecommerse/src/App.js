import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Add from "./Components/Add";
import Edit from "./Components/Edit";
import List from "./Components/List";
import Cart from "./Components/Cart";
import Show from "./Components/Show";
import Detail from "./Components/Detail";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
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
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route
          path="/show"
          element={
            <Show
              products={products}
              handleDelete={handleDelete}
              addToCart={addToCart}
            />
          }
        />
        <Route path="/add" element={<Add onAddProduct={handleAddProduct} />} />
        <Route
          path="/list"
          element={<List products={products} handleDelete={handleDelete} />}
        />
        <Route
          path="/edit/:index"
          element={
            <Edit
              products={products}
              onAddProduct={handleAddProduct}
              setProducts={setProducts}
            />
          }
        />
        <Route
          path="/detail/:currentId"
          element={<Detail products={products} />}
        />
        <Route
          path="/cart"
          element={
            <Cart cart={cart} products={products} addToCart={addToCart} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
