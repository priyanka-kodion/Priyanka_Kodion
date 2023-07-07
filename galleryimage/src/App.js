import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import SearchField from "./Components/SearchField";
import Image from "./Components/Image";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchRandomImages = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://pixabay.com/api/?key=28149248-46556b63d2c6a7907327b5b10&per_page=8`
        );
        const result = await response.json();
        if (result.hits) {
          setData(result.hits);
        }
      } catch (error) {
        console.error("Error fetching random images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRandomImages();
  }, []);

  const handleSubmit = async (image) => {
    if (image.trim() === "") {
      setErrorMessage("Please enter a valid image search term.");
      setData([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=28149248-46556b63d2c6a7907327b5b10&q=${image}&image_type=photo`
      );
      const result = await response.json();
      if (result.hits.length === 0) {
        setErrorMessage("No images found for the provided search term.");
        setData([]);
      } else {
        setErrorMessage("");
        setData(result.hits);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      setErrorMessage("An error occurred while fetching images.");
      setData([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="header">
      <SearchField onSubmit={handleSubmit} />
      {errorMessage && <div className="error">{errorMessage}</div>}
      {isLoading ? (
        <div className="loading-spinner">
          <Spinner animation="border" />
        </div>
      ) : (
        <Image data={data} />
      )}
    </div>
  );
}

export default App;
