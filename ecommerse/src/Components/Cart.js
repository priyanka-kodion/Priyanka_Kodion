import React from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Cart = ({
  cart,
  onAddQuantity,
  onDeleteQuantity,
  onDeleteItem,
  handleCheckout,
}) => {
  const navigate = useNavigate();
  const handleBack = (event) => {
    event.preventDefault();
    navigate("/show");
  };

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
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>₹{product.price}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    onClick={() => onDeleteQuantity(product.id)}
                  >
                    -
                  </Button>{" "}
                  {product.quantity}{" "}
                  <Button
                    variant="outline-primary"
                    onClick={() => onAddQuantity(product.id)}
                  >
                    +
                  </Button>
                </td>
                <td>₹{product.price * product.quantity}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => onDeleteItem(product.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}></td>
              <td colSpan={2}>
                Total: ₹
                {cart.reduce(
                  (total, product) => total + product.price * product.quantity,
                  0
                )}
              </td>
            </tr>
          </tfoot>
        </Table>
      )}
      <div className="checkout-button">
        <Button onClick={handleCheckout} variant="info">
          Checkout
        </Button>
      </div>
      <Button onClick={handleBack}>Back</Button>
    </div>
  );
};

export default Cart;
