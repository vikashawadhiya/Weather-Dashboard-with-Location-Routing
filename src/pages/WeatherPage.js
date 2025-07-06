import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function WeatherPage() {
  const { city } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = '5ce17a726d3bf8e3f6fa33a7a15a3462'; // Replace this with your real key
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${5ce17a726d3bf8e3f6fa33a7a15a3462}&units=metric`
      );
      const json = await res.json();
      setData(json);
    };

    fetchWeather();
  }, [city]);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>Weather in {data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Condition: {data.weather[0].description}</p>
    </div>
  );
}

export default WeatherPage;
