// RealTimeWeather.js
import React from "react";

function RealTimeWeather({ realTimeWeather }) {
  return (
    <div className="weather-details realtime">
      <h2 className="info-heading">Real-time Weather Info</h2>
      <p className="info-text">
        <strong>Date:</strong>{" "}
        {new Date(realTimeWeather.data.time).toLocaleDateString("en-US", {
          weekday: "long",
        })}
      </p>
      <p className="info-text">
        <strong>Time:</strong>{" "}
        {new Date(realTimeWeather.data.time).toLocaleTimeString()}
      </p>
      <p className="info-text">
        <strong>Temperature:</strong>{" "}
        {realTimeWeather.data.values.temperature}°C
      </p>
      <p className="info-text">
        <strong>Humidity:</strong> {realTimeWeather.data.values.humidity}%
      </p>
    </div>
  );
}

export default RealTimeWeather;
