// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// function WeatherApp() {
//   const [location, setLocation] = useState("");
//   const [realTimeWeather, setRealTimeWeather] = useState(null);
//   const [forecastWeather, setForecastWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [userLocation, setUserLocation] = useState("");

//   const apiKey = "OyYSKIrREQF7GbutAIXXAAinbwCtpqI2";

//   useEffect(() => {
//     fetchWeatherData(userLocation);
//   }, [userLocation]);

//   const fetchWeatherData = async (location) => {
//     if (!location) {
//       setError("Please enter a location.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const realTimeResponse = await axios.get(
//         `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${apiKey}`
//       );
//       setRealTimeWeather(realTimeResponse.data);

//       const forecastResponse = await axios.get(
//         `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${apiKey}`
//       );
//       setForecastWeather(forecastResponse.data);

//       setError("");
//     } catch (error) {
//       setError(" Error fetching weather data. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLocationInputChange = (e) => {
//     setLocation(e.target.value);
//   };

//   const handleLocationSubmit = () => {
//     setUserLocation(location);
//   };

//   const handleGetCurrentLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setUserLocation(`${latitude},${longitude}`);
//         },
//         (error) => {
//           setError("Error getting current location. Please try again.");
//           console.error(error);
//         }
//       );
//     } else {
//       setError("Geolocation is not supported by this browser.");
//     }
//   };

//   return (
//     <div className="weather-container">
//       <h1 className="title">Weather App</h1>
//       <div className="input-container">
//         <label htmlFor="locationInput"></label>
//         <input
//           id="locationInput"
//           type="text"
//           placeholder="E.g., Bengaluru"
//           value={location}
//           onChange={handleLocationInputChange}
//         />
//         <div className="space"></div>
//         <div className="button-group">
//           <button onClick={handleLocationSubmit}>Weather Details</button>
//           <button onClick={handleGetCurrentLocation}>Use My Location</button>
//         </div>
//       </div>
//       {loading && <p>Loading...</p>}
//       {error && <p className="error">{error}</p>}
//       {realTimeWeather && (
//         <div className="weather-details realtime">
//           <h2 className="info-heading">Real-time Weather Info</h2>
//           <p className="info-text">
//             <strong>Date:</strong>{" "}
//             {new Date(realTimeWeather.data.time).toLocaleDateString("en-US", {
//               weekday: "long",
//             })}
//           </p>
//           <p className="info-text">
//             <strong>Time:</strong>{" "}
//             {new Date(realTimeWeather.data.time).toLocaleTimeString()}
//           </p>
//           <p className="info-text">
//             <strong>Temperature:</strong>{" "}
//             {realTimeWeather.data.values.temperature}°C
//           </p>
//           <p className="info-text">
//             <strong>Humidity:</strong> {realTimeWeather.data.values.humidity}%
//           </p>
//         </div>
//       )}

//       {forecastWeather && (
//   <div className="weather-details forecasted">
//     <h2>Forecasted Weather Info</h2>
//     <div className="forecast-items">
//       {forecastWeather.timelines.minutely
//         .slice(0, )
//         .map((minuteData, index) => (
//           <div key={index} className="forecast-item">
//             {/* <p className="info-text"><strong>Date:</strong>
//               {new Date(minuteData.time).toLocaleDateString("en-US", {
//                 weekday: "long",
//               })}
//             </p> */}
//             <p className="info-text"><strong>Time: </strong>{new Date(minuteData.time).toLocaleTimeString()}</p>
//             <p className="info-text"><strong>Temperature: </strong>{minuteData.values.temperature}°C</p>
//             <p className="info-text"><strong>Humidity: </strong>{minuteData.values.humidity}%</p>
//           </div>
//         ))}
//     </div>
//   </div>
// )}
//     </div>
//   );
// }

// export default WeatherApp;


import React from "react";
import WeatherApp from "./components/WeatherApp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}

export default App;

