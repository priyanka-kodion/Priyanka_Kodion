import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function List({ products, handleDelete, handleEdit }) {
  return (
    <div className="list">
      <h3 className="show-heading">Products List</h3>
      {products.length === 0 ? (
        <p className="text-center">No products added to list.</p>
      ) : (
        <div className="card-container">
          {products.map((product, index) => (
            <Card key={index} className="product-card">
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
                    className="edit-button"
                    as={Link}
                    to={`/edit/${index}`}
                    variant="warning"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(index)}
                    size="sm"
                    className="delete-button"
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default List;
