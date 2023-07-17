import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "sweetalert2/dist/sweetalert2.css";
const Add = ({ onAddProduct }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [titleError, setTitleError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);
  const [imageError, setImageError] = useState(null);
  const [priceError, setPriceError] = useState(null);
  const [showErrors, setShowErrors] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
    setImageError(null); // Clear the image error when an image is selected
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !description || !image || !price) {
      setTitleError(!title ? "Please enter a title" : null);
      setDescriptionError(!description ? "Please enter a description" : null);
      setImageError(!image ? "Please select an image" : null);
      setPriceError(!price ? "Please enter a price" : null);
      setShowErrors(true);
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Product Added",
      showConfirmButton: false,
      timer: 1500,
    }).then((result) => {
      navigate("/show");
    });

    const newProduct = {
      id: uuidv4(),
      title,
      description,
      image,
      price,
    };
    console.log(newProduct, "weeww");
    onAddProduct(newProduct);
    setTitle("");
    setDescription("");
    setImage("");
    setPrice("");
    setTitleError(null);
    setDescriptionError(null);
    setImageError(null);
    setPriceError(null);
    setShowErrors(false);
  };

  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value);
    if (value.length > 15) {
      setTitleError("Title should be up to 15 characters");
    } else {
      setTitleError(null);
    }
  };

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
    if (value.length > 15) {
      setDescriptionError("Description should be up to 15 characters");
    } else {
      setDescriptionError(null);
    }
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
    if (value.length > 15) {
      setPriceError("Price should be up to 15 characters");
    } else {
      setPriceError(null);
    }
  };

  return (
    <div className="add">
      <h2 className="text-center">Add Product</h2>
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            value={title}
            placeholder="Title"
            onChange={handleTitleChange}
          />
          {showErrors && titleError && (
            <Alert variant="danger">{titleError}</Alert>
          )}
          <br />
          <Form.Control
            type="text"
            value={description}
            placeholder="Description"
            onChange={handleDescriptionChange}
          />
          {showErrors && descriptionError && (
            <Alert variant="danger">{descriptionError}</Alert>
          )}
          <br />
          <Form.Control type="file" onChange={handleImageChange} />
          {showErrors && imageError && (
            <Alert variant="danger">{imageError}</Alert>
          )}
          <br />
          <Form.Control
            type="number"
            value={price}
            placeholder="Price"
            onChange={handlePriceChange}
          />
          {showErrors && priceError && (
            <Alert variant="danger">{priceError}</Alert>
          )}
          <br />
          <div className="text-center">
            <Button type="submit" onSubmit={handleSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Add;
