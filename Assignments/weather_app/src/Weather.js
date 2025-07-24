import React, { useState, useEffect } from 'react';
import './weather.css'
const API_KEY = 'd770dca72e7446f396a113650252007'; // Replace with your real WeatherAPI key

export function Weather() {
  const [city, setCity] = useState('Delhi');
  const [inputCity, setInputCity] = useState('');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // optional cleanup controller

    const fetchWeather = async () => {
      
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
        const data = await response.json();
        setWeather(data);
    };

    fetchWeather();

    return () => {
      controller.abort(); // cancels previous request on cleanup
    };
  }, [city]);

  const handleSearch = () => {
    if (inputCity.trim()) {
      setCity(inputCity.trim());
    }
  };

  return (
    <div className="weather-container">
      <h2 className="fade-in">🌦 Weather Dashboard</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter city name"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
        />
        <button onClick={handleSearch}>Get Weather</button>
      </div>

      {weather && (
        <div className="weather-card fade-in-up">
          <h3>{weather.location.name}</h3>
          <p>🌡 Temp: {weather.current.temp_c} °C</p>
          <p>☁ Condition: {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="icon" />
        </div>
      )}
    </div>
  );
}

