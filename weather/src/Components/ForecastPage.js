import React, { useEffect, useState } from 'react';
import { useParams ,Link} from 'react-router-dom';
import { Card,Button ,Spinner } from 'react-bootstrap';

const ForecastPage = () => {
  const { city } = useParams();
  const [forecastData, setForecastData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
console.log(city);

useEffect(() => {
  setIsLoading(true);
  const fetchForecastData = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=4dfee36d53fc44c584695434232104&q=${city}&days=2`
      );
      const data = await response.json();
      console.log(data);
      setForecastData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  fetchForecastData();

}, [city]);

  return (
    <div className="container">

    <h3 className="text-center">2 Days Forecast</h3>
    {isLoading &&
            <div className="loading-spinner">
            <Spinner animation="border" />
          </div>}

    <div className="card-container">

      {forecastData &&
        forecastData.forecast &&
        forecastData.forecast.forecastday.map((day) => (
          <>
          <Card className="card" key={day.date}>
            <Card.Body>
              <div className="card-header">
                <h5>{day.date}</h5>
                <div className="icon-container">
                  <img
                    src={day.day.condition.icon}
                    alt={day.day.condition.text}
                    className="weather-icon"
                  />
                </div>
              </div>
              <Card.Title><b>{day.day.condition.text}</b></Card.Title>
              <Card.Text>Temperature: {day.day.avgtemp_c}°C</Card.Text>
              <Card.Text>Max_temp: {day.day.maxtemp_c}°C</Card.Text>
              <Card.Text>Min_temp: {day.day.mintemp_c}°F</Card.Text>
              <Card.Text>Wind Speed: {day.day.maxwind_kph}</Card.Text>
              <Card.Text>Uv: {day.day.uv}</Card.Text>
              <Card.Text>Precipitation: {day.day.totalprecip_mm} mm</Card.Text>
              <Card.Text>Humidity: {day.day.avghumidity}%</Card.Text>
            </Card.Body>
          </Card>
             <div className="for">
             <Link to='/' className="mt-3">
                         <Button>Back</Button>
                       </Link>
                     </div>
                     </>
        ))}
    </div>
  </div>
  );
};

export default ForecastPage;

