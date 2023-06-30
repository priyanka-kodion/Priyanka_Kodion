import React, { useEffect, useState } from 'react';
import './App.css';
import { Form, Button, Card, Alert } from 'react-bootstrap';

function App() {
  const [data, setData] = useState({});
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.weatherapi.com/v1/current.json?key=4dfee36d53fc44c584695434232104&q=${city}`)
      .then((result) => {
        result.json().then((resp) => {
          console.log("result", resp);
          if (resp.error) {
            setError(resp.error.message);
            setData({});
          } else {
            setError('');
            setData(resp);
          }
        });
      });
  };

  return (
    <div className="container">
      <div className="form-div">
        <h3 className="text-center">Weather Search</h3>
        <div className="form-container">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              name="city"
              value={city}
              placeholder="Enter the city name"
              onChange={(e) => setCity(e.target.value)}
              required
            />  {error && <Alert variant="danger">{error}</Alert>}
            <Button type="submit">Search</Button>
          </Form>
        </div>

        {data.location && (
          <div className="weather-cards">
            <Card className="weather-card">
              <Card.Body>
                <Card.Title>Location Information</Card.Title>
                <Card.Text>Name: {data.location.name}</Card.Text>
                <Card.Text>Region: {data.location.region}</Card.Text>
                <Card.Text>Country: {data.location.country}</Card.Text>
              </Card.Body>
            </Card>
            <Card className="weather-card">
              <Card.Body>
                <Card.Title>Temperature and Conditions</Card.Title>
                <Card.Text>Temperature: {data.current.temp_c}°C</Card.Text>
                <Card.Text>Condition: {data.current.condition.text}</Card.Text>
                <Card.Text>Wind Speed: {data.current.wind_mph} mph</Card.Text>
                <Card.Text>Pressure: {data.current.pressure_mb}</Card.Text>
                <Card.Text>Humidity: {data.current.humidity}</Card.Text>
                <Card.Text>UV: {data.current.uv}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
