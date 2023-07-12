import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  useNavigate,
} from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";

function List({ products }) {
  const navigate = useNavigate();

  const handleEdit = (index) => {
    navigate(`/edit/${index}`);
  };

  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    navigate("/");
  };

  return (
    <div className="list">
      <h3 className="text-center margin-10px">Products</h3>
      <div className="card-container">
        {products.map((product, index) => (
          <Card key={index} className="product-card">
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Img src={product.image} className="product-image" />
              <Card.Text className="product-price">
                Price: ₹{product.price}
              </Card.Text>
              <div className="button-container">
                <Button
                  variant="primary"
                  onClick={() => handleEdit(index)}
                  size="sm"
                  className="edit-button"
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
    </div>
  );
}

export default List;
