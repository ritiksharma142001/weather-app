// WeatherApp.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import RealTimeWeather from "./WeatherDetails/RealTimeWeather";
import ForecastedWeather from "./WeatherDetails/ForecasteWeather";


function WeatherApp() {
  const [location, setLocation] = useState("");
  const [realTimeWeather, setRealTimeWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userLocation, setUserLocation] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetchWeatherData(userLocation);
  }, [userLocation]);

  const fetchWeatherData = async (location) => {
    if (!location) {
      setError("Please enter a location.");
      return;
    }

    setLoading(true);
    try {
      const realTimeResponse = await axios.get(
        `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${apiKey}`
      );
      setRealTimeWeather(realTimeResponse.data);

      const forecastResponse = await axios.get(
        `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${apiKey}`
      );
      setForecastWeather(forecastResponse.data);

      setError("");
    } catch (error) {
      setError(" Error fetching weather data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleLocationInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleLocationSubmit = () => {
    setUserLocation(location);
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation(`${latitude},${longitude}`);
        },
        (error) => {
          setError("Error getting current location. Please try again.");
          console.error(error);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="weather-container">
      <h1 className="title">Weather App</h1>
      <div className="input-container">
        <label htmlFor="locationInput"></label>
        <input
          id="locationInput"
          type="text"
          placeholder="E.g., Bengaluru"
          value={location}
          onChange={handleLocationInputChange}
        />
        <div className="space"></div>
        <div className="button-group">
          <button onClick={handleLocationSubmit}>Weather Details</button>
          <button onClick={handleGetCurrentLocation}>Use My Location</button>
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {realTimeWeather && <RealTimeWeather realTimeWeather={realTimeWeather} />}
      {forecastWeather && <ForecastedWeather forecastWeather={forecastWeather} />}
    </div>
  );
}

export default WeatherApp;
