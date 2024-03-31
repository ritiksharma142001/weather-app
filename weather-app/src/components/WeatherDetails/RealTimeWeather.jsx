import React from "react";

function RealTimeWeather({ realTimeWeather }) {
  return (
    <div className="weather-details realtime">
      <h2 className="info-heading">Real-time Weather Info</h2>
      <p className="info-text">
        <strong>Date:</strong>{" "}
        {new Date(realTimeWeather.data.time).toLocaleDateString("en-US", {
          weekday: "long",
        })} {/* Display the date in the format: Weekday, Month Day, Year */}
      </p>
      <p className="info-text">
        <strong>Time:</strong>{" "}
        {new Date(realTimeWeather.data.time).toLocaleTimeString()} {/* Display the time in HH:MM:SS format */}
      </p>
      <p className="info-text">
        <strong>Temperature:</strong>{" "}
        {realTimeWeather.data.values.temperature}°C {/* Display the temperature in Celsius */}
      </p>
      <p className="info-text">
        <strong>Humidity:</strong> {realTimeWeather.data.values.humidity}% {/* Display the humidity percentage */}
      </p>
    </div>
  );
}

export default RealTimeWeather;
