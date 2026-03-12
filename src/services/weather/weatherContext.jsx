import { createContext, useState, useContext } from 'react';
import { weatherApi } from './weatherService';
import { useEffect } from 'react';

const WeatherContext = createContext({});

export function WeatherProvider({ children }){
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    async function searchWeather(newCity){
        setCity(newCity);
    }
    
     useEffect(() => {
        if (!city) return;

        const fetchWeather = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await weatherApi.setCity(city);
                setWeatherData(data);
            } catch (error) {
                setWeatherData(null);
                setError("Não foi possível encontrar a cidade.");
                console.error("Erro context: ",error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city]);


    return (
    <WeatherContext.Provider value={{ city, weatherData, loading, error, searchWeather}}>
        {children}
    </WeatherContext.Provider>
    );
}

export function useWeatherCity(){
    const context = useContext(WeatherContext);
    return context;
}