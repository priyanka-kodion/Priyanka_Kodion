import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const ForecastPage = () => {
  const { city } = useParams();
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=4dfee36d53fc44c584695434232104&q=${city}&days=2`
        );
        const data = await response.json();
        console.log(data);
        setForecastData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchForecastData();
  }, [city]);

  return (
    <div className="container">
      <h3 className="text-center">2 Days Forecast</h3>
      <div className="card-container">
        {forecastData && forecastData.forecast && forecastData.forecast.forecastday.map((day) => (
          <Card className="card" key={day.date}>
            <Card.Body>
              <Card.Title>{day.date}</Card.Title>
              <Card.Text>{day.day.condition.text}</Card.Text>
              <Card.Text>Temperature: {day.day.avgtemp_c}°C</Card.Text>
              <Card.Text>Precipitation: {day.day.totalprecip_mm} mm</Card.Text>
              <Card.Text>Humidity: {day.day.avghumidity}%</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ForecastPage;

