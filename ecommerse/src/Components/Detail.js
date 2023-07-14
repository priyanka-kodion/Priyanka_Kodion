import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Detail = ({ products }) => {
  const { currentId } = useParams();
  const product = products.find((product) => product.id === currentId);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div>
      <h1 className="text-center">Product Details</h1>
      {product && (
        <div className="detail-container">
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: {product.price}</p>
          <Button onClick={handleGoBack}>Go Back</Button>
        </div>
      )}
    </div>
  );
};

export default Detail;
