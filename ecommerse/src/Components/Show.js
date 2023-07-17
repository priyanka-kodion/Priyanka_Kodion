import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "sweetalert2/dist/sweetalert2.css";

const Show = ({ products, addToCart }) => {
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    addToCart(product);
    Swal.fire({
      icon: "success",
      title: "Added to cart",
      showConfirmButton: false,
      timer: 1500,
    }).then((result) => {
      navigate("/cart");
    });
  };

  return (
    <div className="show">
      <h3 className="show-heading">Products</h3>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <div className="card-container">
          {products.map((product) => (
            <Card key={product.id} className="product-card">
              <img
                src={process.env.PUBLIC_URL + product.image}
                className="card-img-top"
                alt={product.title}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="product-price">
                  Price: ₹{product.price}
                </Card.Text>
                <div className="button-container">
                  <Button
                    className="detail-button"
                    as={Link}
                    to={`/detail/${product.id}`}
                    variant="primary"
                  >
                    Details
                  </Button>
                  <Button
                    className="add-button"
                    variant="success"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Show;
