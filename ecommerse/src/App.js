import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Add from "./Components/Add";
import Edit from "./Components/Edit";
import List from "./Components/List";
import Cart from "./Components/Cart";
import Show from "./Components/Show";
import Detail from "./Components/Detail";
import "./App.css";

import { Alert } from "react-bootstrap";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  //const [item, setItem] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const onAddQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const onDeleteQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const onDeleteItem = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };
  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };
  const handleCheckout = () => {
    // Implement your checkout logic here
    // For example, you can redirect to the checkout page
    // using the React Router "history" object or window.location.href
    alert("Proceeding to checkout...");
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
            <Cart
              cart={cart}
              products={products}
              addToCart={addToCart}
              onAddQuantity={onAddQuantity}
              onDeleteQuantity={onDeleteQuantity}
              onDeleteItem={onDeleteItem}
              handleCheckout={handleCheckout}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
