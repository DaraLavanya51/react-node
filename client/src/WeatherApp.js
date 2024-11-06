import React, { useState, useEffect } from 'react';

function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY')
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Weather in {weather?.name}</h1>
      <p>Temperature: {weather?.main?.temp ? Math.round(weather.main.temp - 273.15) : 'N/A'}°C</p>
      <p>Weather: {weather?.weather?.[0]?.description || 'N/A'}</p>
    </div>
  );
}

export default WeatherApp;
