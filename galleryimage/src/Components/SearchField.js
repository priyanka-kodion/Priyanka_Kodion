import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

function SearchField({ onSubmit, error }) {
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(image);
  };

  return (
    <div className="form-div">
      <h3 className="text-center text-white">Images Search</h3>
      <div className="form-container">
        <Form className="style" onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            name="image"
            value={image}
            placeholder="Search Images..."
            onChange={(e) => setImage(e.target.value)}
            required
          />
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="bro">
            <Button type="submit">Search</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default SearchField;
