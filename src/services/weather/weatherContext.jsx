import { createContext, useState, useContext, useEffect } from "react";
import { weatherApi } from "./weatherService";
import { touristPointsApi } from "../touristPoints/touristPointsService"; 

const WeatherContext = createContext({});

export function WeatherProvider({ children }) {
  const [city, setCity] = useState(() => localStorage.getItem('lastCity') || "");
  const [weatherData, setWeatherData] = useState(null);
  const [globalLocals, setGlobalLocals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function searchWeather(newCity) {
    const formatCity = newCity.charAt(0).toUpperCase() + newCity.slice(1).toLowerCase();
    setCity(formatCity);
    localStorage.setItem('lastCity', formatCity);
  }

  useEffect(() => {
    if (!city || city === null) return;
    
    const fetchAllData = async () => {
      setLoading(true);
      setError(null);

      try {
        const responseWeather = await weatherApi.newCity(city);
        if (!responseWeather) {
          setError("Não foi possível encontrar a cidade.");
          return;
        }
        setWeatherData(responseWeather);

        await touristPointsApi.formatCoord(responseWeather.lat, responseWeather.lon);
        const locais = await touristPointsApi.request("tourism,catering.restaurant,catering.cafe", 20);
        setGlobalLocals(locais || []);

      } catch (err) {
        console.error(err);
        setError("Erro ao buscar os dados.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{ city, weatherData, globalLocals, loading, error, searchWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherCity() {
  return useContext(WeatherContext);
}