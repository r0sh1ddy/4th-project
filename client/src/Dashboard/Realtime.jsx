import React, { useState, useEffect } from 'react';

function Realtime() {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = "115755479fb967da01cccef7ca283966";

      async function checkWeather() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`;

            const response = await fetch(apiUrl);
            const data = await response.json();

            // Get current weather data
            const currentWeatherData = data.list[0];
            setCurrentWeather(currentWeatherData);
          });
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      }

      // Call the checkWeather function to fetch and update the weather data
      checkWeather();
    };

    fetchWeatherData();
  }, []); // Empty dependency array to ensure it only runs once on mount

  return (
    <div style={{ backgroundColor: 'lightblue', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {currentWeather ? (
        <div className="weather-card" style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ marginBottom: '10px' }}>{currentWeather.name}, {currentWeather.sys.country}</h2>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <img src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt="Weather Icon" style={{ width: '80px' }} />
            <h1 style={{ marginLeft: '20px' }}>{Math.round(currentWeather.main.temp)}°C</h1>
          </div>
          <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{currentWeather.weather[0].description}</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ marginRight: '20px' }}>
              <p>Wind Speed</p>
              <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{currentWeather.wind.speed} m/s</p>
            </div>
            <div>
              <p>Humidity</p>
              <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{currentWeather.main.humidity}%</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Realtime;