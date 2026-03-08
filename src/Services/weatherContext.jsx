import { createContext, useState, useContext } from 'react';
import { weatherApi } from './weatherService';

const WeatherContext = createContext({});

export function WeatherProvider({ children }){
    const [city, setCity] = useState("");

    async function getCity(){
        const data = weatherApi.setCity(city);
        setCity(data);
    }

    return (
    <WeatherContext.Provider value={{ city }}>
        {children}
    </WeatherContext.Provider>
    );
}

export function useWeatherCity(){
    const context = useContext(WeatherContext);
    return context;
}