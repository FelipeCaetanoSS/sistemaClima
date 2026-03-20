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
    if (!newCity || newCity.trim() === "") {
      setError(null);
      setTimeout(() => setError("Por favor, digite o nome de uma cidade."), 10);
      return false;
    }

    const formatCity = newCity.charAt(0).toUpperCase() + newCity.slice(1).toLowerCase();
    setCity(formatCity);
    localStorage.setItem('lastCity', formatCity);
    return true;
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
          setLoading(false);
          return;
        }
        
        setWeatherData(responseWeather);
  
        try {
          await touristPointsApi.formatCoord(responseWeather.lat, responseWeather.lon);
          const locais = await touristPointsApi.request("tourism,catering.restaurant,catering.cafe", 20);
          
          if (!locais || locais.length === 0) {
            setError("Cidade encontrada, mas sem pontos turísticos disponíveis.");
            setGlobalLocals([]);
          } else {
            setGlobalLocals(locais);
          }
        } catch (errPontos) {
          console.error("Erro nos pontos turísticos: ", errPontos);
          setError("Não foi possível carregar os pontos turísticos da região.");
          setGlobalLocals([]);
        }

      } catch (err) {
          console.error("Erro na API de Clima: ", err);
          setError("Cidade não encontrada ou não existe.");

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