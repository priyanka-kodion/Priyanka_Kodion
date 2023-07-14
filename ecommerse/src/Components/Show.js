import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Show = ({ products, addToCart }) => {
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
                    onClick={() => addToCart(product)}
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
