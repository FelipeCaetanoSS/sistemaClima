import { createContext, useState, useContext } from 'react';

const weatherContext = createContext({});

export function weatherProvider({ children }){
    const [{city, setCity}] = useState("");

    function getData(data){
        setCity(data);
    }

    return (
    <weatherContext.weatherProvider value={{ city, getData}}>
        {children}
    </weatherContext.weatherProvider>
    );
}

export function weatherData(){
    const context = useContext(weatherContext);
    return context
}