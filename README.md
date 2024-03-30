
## Assignment Overview:
This assignment involves creating a Weather App using React.js. The purpose of the application is to provide users with real-time and forecasted weather information based on their location.
## How to Run the Application:
To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running ```npm install```.
4. Start the development server with ```npm run dev```.
5. Open your browser and go to localhost to view the application using the port number.
## Dependencies:

The application relies on the following external libraries and tools:

1. React.js
2. Axios
3. Tomorrow.io API
## Installation Instructions:

To install the dependencies and set up the development environment:

1. Ensure you have Node.js and npm installed on your machine.
2. Clone the repository to your local machine.
3. Open a terminal and navigate to the project directory.
4. Run  ```npm install ``` to install the required dependencies.

Running npm install will install all the required dependencies.
## Configuration:

No additional configuration is required. However, make sure to replace the apiKey variable with your Tomorrow.io API key if needed.




## Testing:

As this is a simple front-end application, there are no specific tests included. However, you can manually test the application by entering different locations and checking the weather details.

## Issues and Troubleshooting:

1. If geolocation is not working, ensure that your browser supports geolocation and that location services are enabled.
2. If multiple requests are sent too frequently, the server may not be able to serve the API call. If this happens wait for some time and then check.


## Contact Information:
If you have any questions or need assistance during the evaluation process, feel free to contact me:

Email: sharma.ritik2023@gmail.com

Phone: 7488467962
## Structure

```
└── 📁weather-app
    └── 📁weather-app
        └── .eslintrc.cjs
        └── .gitignore
        └── index.html
        └── package-lock.json
        └── package.json
        └── 📁public
            └── vite.svg
        └── README.md
        └── 📁src
            └── App.css
            └── App.jsx
            └── 📁assets
                └── react.svg
            └── 📁components
                └── WeatherApp.jsx
                └── 📁WeatherDetails
                    └── ForecasteWeather.jsx
                    └── RealTimeWeather.jsx
            └── index.css
            └── main.jsx
        └── vite.config.js
```