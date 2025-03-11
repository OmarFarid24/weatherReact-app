import { useState, useEffect } from "react";
import { getWeather } from "@/pages/api";
import SearchBar from "@/pages/searchbar";
import "@/styles/app.css";

export default function App() {
    const [city, setCity] = useState("guanajuato");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect( async ()=> {
      const data = await getWeather(city);
      if (data) {
        setWeather(data);
    } else {
        setError("Could not get weather. Please try another city.");
    }
    setLoading(false);
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!city.trim()) {
            setError("Please, enter a city.");
            return;
        }

        setError(null);
        const data = await getWeather(city);

        if (data) {
            setWeather(data);
        } else {
            setError("Could not get weather. Please try another city.");
        }
    };

    return (
        <div className="weather_card">
            <SearchBar city={city} setCity={setCity} submit={handleSubmit} />

            {error && <p className="error">{error}</p>}

            {weather && !error && (
                <>
                    <div className="weather_image">
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt="Weather Icon"
                        />
                    </div>
                    <h1 id="temperature">{weather.main.temp}°C</h1>
                    <h2 id="cityName">{weather.name}</h2>
                    <div className="details">
                        <div className="humidity">
                            <p>Humidity:</p>
                            <p id="humidity">{weather.main.humidity}%</p>
                        </div>
                        <div className="wind-speed">
                            <p>wind Speed:</p>
                            <p id="windSpeed">{weather.wind.speed} Km/H</p>
                        </div>
                    </div>
                </>
            ) 
            }
            {loading && <h2>loading...</h2>}
        </div>
    );
}
