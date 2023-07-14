import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Edit = ({ products, setProducts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const { index } = useParams();
  const navigate = useNavigate();

  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [priceError, setPriceError] = useState("");

  useEffect(() => {
    const productToEdit = products[index];
    if (productToEdit) {
      setTitle(productToEdit.title);
      setDescription(productToEdit.description);
      setImage(productToEdit.image);
      setPrice(productToEdit.price);
    }
  }, [index, products]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Field validation
    let hasError = false;

    if (!title) {
      setTitleError("Please enter a title");
      hasError = true;
    } else {
      setTitleError("");
    }

    if (!description) {
      setDescriptionError("Please enter a description");
      hasError = true;
    } else {
      setDescriptionError("");
    }

    if (!price) {
      setPriceError("Please enter a price");
      hasError = true;
    } else {
      setPriceError("");
    }

    if (hasError) {
      return;
    }

    const editedProduct = {
      id: products[index].id,
      title,
      description,
      image,
      price,
    };

    const updatedProducts = [...products];
    updatedProducts[index] = editedProduct;
    setProducts(updatedProducts);

    navigate(`/detail/${products[index].id}`);
  };

  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value);
    if (value) {
      setTitleError("");
    }
  };

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
    if (value) {
      setDescriptionError("");
    }
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
    if (value) {
      setPriceError("");
    }
  };

  return (
    <div className="add">
      <h2 className="text-center">Edit Product</h2>
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            value={title}
            placeholder="Title"
            onChange={handleTitleChange}
          />
          {titleError && <Alert variant="danger">{titleError}</Alert>}
          <br />
          <Form.Control
            type="text"
            value={description}
            placeholder="Description"
            onChange={handleDescriptionChange}
          />
          {descriptionError && (
            <Alert variant="danger">{descriptionError}</Alert>
          )}
          <br />
          <Form.Control type="file" onChange={handleImageChange} />
          <br />
          <Form.Control
            type="number"
            value={price}
            placeholder="Price"
            onChange={handlePriceChange}
          />
          {priceError && <Alert variant="danger">{priceError}</Alert>}
          <br />
          <div className="text-center">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Edit;
