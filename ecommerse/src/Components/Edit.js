import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const Edit = ({ products, onAddProduct }) => {
  console.log(products, "products");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const { index } = useParams();
  const navigate = useNavigate(); // Add this line to use the useNavigate hook

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
    const newProduct = {
      title,
      description,
      image,
      price,
    };
    onAddProduct(newProduct);

    navigate("/add"); // Use navigate to navigate back to the Add component
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
            onChange={(event) => setTitle(event.target.value)}
            required
          />
          <br />
          <Form.Control
            type="text"
            value={description}
            placeholder="Description"
            onChange={(event) => setDescription(event.target.value)}
            required
          />
          <br />
          <Form.Control type="file" onChange={handleImageChange} required />
          <br />
          <Form.Control
            type="number"
            value={price}
            placeholder="Price"
            onChange={(event) => setPrice(event.target.value)}
            required
          />
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

export default Edit;
