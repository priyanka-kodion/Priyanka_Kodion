import React from "react";
import { Card, Alert } from "react-bootstrap";

function Image({ data, error }) {
  return (
    <div className="container-fluid">
      <div className="image-gallery">
        {data.map((imageData) => (
          <Card key={imageData.id} className="card">
            <Card.Img
              variant="top"
              src={imageData.previewURL}
              alt={imageData.tags}
            />

            <Card.Body>
              <Card.Title>{imageData.tags}</Card.Title>
              <Card.Text>Views: {imageData.views}</Card.Text>
              <Card.Text>Downloads: {imageData.downloads}</Card.Text>
              <Card.Text>Likes: {imageData.likes}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Image;
