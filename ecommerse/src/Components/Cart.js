import React from "react";
import { Table } from "react-bootstrap";

const Cart = ({ cart, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="cart">
      <h3 className="cart-heading">Cart</h3>
      {cart.length === 0 ? (
        <p className="cart-empty-message">Your cart is empty.</p>
      ) : (
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>
                  <div className="quantity-control">
                    <button
                      className="decrease-quantity-btn"
                      onClick={() => decreaseQuantity(product.id)}
                    >
                      -
                    </button>
                    <span className="quantity">{product.quantity}</span>
                    <button
                      className="increase-quantity-btn"
                      onClick={() => increaseQuantity(product.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>₹{product.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Cart;
