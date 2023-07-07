import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
function SearchField({ onSubmit }) {
  const [image, setImage] = useState("");
  const handleSubmit = (e) => {
    e.prevent.Default();
    onSubmit(image);
  };

  return (
    <div className="header">
      <div className="form-div">
        <h3 className="text-center text-white">Images Search</h3>
        <div className="form-container">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="enter image"
              onChange={(e) => setImage(e.target.value)}
              requires
            />
            <div className="bro">
              <Button varient="primary" type="submit" onSubmit={handleSubmit}>
                Search
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SearchField;
