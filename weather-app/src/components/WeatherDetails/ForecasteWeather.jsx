// ForecastedWeather.js
import React from "react";

function ForecastedWeather({ forecastWeather }) {
  return (
    <div className="weather-details forecasted">
      <h2>Forecasted Weather Info</h2>
      <div className="forecast-items">
        {forecastWeather.timelines.minutely
          .slice(0)
          .map((minuteData, index) => (
            <div key={index} className="forecast-item">
              <p className="info-text">
                <strong>Time: </strong>
                {new Date(minuteData.time).toLocaleTimeString()}
              </p>
              <p className="info-text">
                <strong>Temperature: </strong>
                {minuteData.values.temperature}°C
              </p>
              <p className="info-text">
                <strong>Humidity: </strong>
                {minuteData.values.humidity}%
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ForecastedWeather;
