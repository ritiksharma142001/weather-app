import React from "react";

function ForecastedWeather({ forecastWeather }) {
  return (
    <div className="weather-details forecasted">
      <h2>Forecasted Weather Info</h2>
      <div className="forecast-items">
        {forecastWeather.timelines.minutely // Iterate over each minute in the forecast data
          .slice(0) // Make a shallow copy of the array
          .map((minuteData, index) => ( // Map each minute data to JSX elements
            <div key={index} className="forecast-item"> {/* Set a unique key for each forecast item */}
              <p className="info-text">
                <strong>Time: </strong>
                {new Date(minuteData.time).toLocaleTimeString()} {/* Convert timestamp to local time string */}
              </p>
              <p className="info-text">
                <strong>Temperature: </strong>
                {minuteData.values.temperature}°C {/* Display temperature */}
              </p>
              <p className="info-text">
                <strong>Humidity: </strong>
                {minuteData.values.humidity}% {/* Display humidity */}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ForecastedWeather;
