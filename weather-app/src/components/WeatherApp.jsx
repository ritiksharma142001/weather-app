import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import RealTimeWeather from "./WeatherDetails/RealTimeWeather";
import ForecastedWeather from "./WeatherDetails/ForecasteWeather";

function WeatherApp() {
  const [location, setLocation] = useState(""); // State for user input location
  const [realTimeWeather, setRealTimeWeather] = useState(null); // State for real-time weather data
  const [forecastWeather, setForecastWeather] = useState(null); // State for forecasted weather data
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(""); // State to manage error messages
  const [userLocation, setUserLocation] = useState(""); // State to store user's current location

  const apiKey = import.meta.env.VITE_API_KEY; // API key stored in environment variable

  useEffect(() => {
    // Effect to fetch weather data when userLocation changes
    fetchWeatherData(userLocation);
  }, [userLocation]);

  const fetchWeatherData = async (location) => {
    if (!location) {
      setError("Please enter a location.");
      return;
    }

    setLoading(true); // Set loading state to true when fetching data
    try {
      // Fetch real-time weather data
      const realTimeResponse = await axios.get(
        `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${apiKey}`
      );
      setRealTimeWeather(realTimeResponse.data); // Update real-time weather state with fetched data

      // Fetch forecasted weather data
      const forecastResponse = await axios.get(
        `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${apiKey}`
      );
      setForecastWeather(forecastResponse.data); // Update forecasted weather state with fetched data

      setError(""); // Clear any previous error messages
    } catch (error) {
      setError("Error fetching weather data. Please try again later."); // Handle error while fetching data
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  const handleLocationInputChange = (e) => {
    // Update location state when user types in the input field
    setLocation(e.target.value);
  };

  const handleLocationSubmit = () => {
    // Triggered when user clicks the "Weather Details" button
    setUserLocation(location); // Set userLocation state with entered location
  };

  const handleGetCurrentLocation = () => {
    // Triggered when user clicks the "Use My Location" button
    if (navigator.geolocation) {
      // Check if geolocation is supported by the browser
      navigator.geolocation.getCurrentPosition(
        // Get user's current position
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation(`${latitude},${longitude}`); // Set userLocation state with current latitude and longitude
        },
        (error) => {
          setError("Error getting current location. Please try again."); // Handle error while getting current location
          console.error(error);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser."); // Handle if geolocation is not supported
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
      {loading && <p>Loading...</p>} {/* Display loading message when data is being fetched */}
      {error && <p className="error">{error}</p>} {/* Display error message if there is an error */}
      {realTimeWeather && <RealTimeWeather realTimeWeather={realTimeWeather} />} {/* Render RealTimeWeather component if realTimeWeather is available */}
      {forecastWeather && <ForecastedWeather forecastWeather={forecastWeather} />} {/* Render ForecastedWeather component if forecastWeather is available */}
    </div>
  );
}

export default WeatherApp;
