import React from "react";
import { Card } from "react-bootstrap";

const Show = ({ products }) => {
  return (
    <div className="show">
      <h3 className="show-heading">Products</h3>
      {products.length === 0 ? (
        <p>No products added yet.</p>
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
                  Price: ${product.price}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Show;
