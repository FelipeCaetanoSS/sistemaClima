import { useEffect, useState } from "react";
import { useWeatherCity } from "../../services/weather/weatherContext.jsx";

function ClimaIcon() {
  const [icon, setIcon] = useState(null);
  const [temp, setTemp] = useState(null);
  const { city, weatherData } = useWeatherCity();
//  corrigir aqui - fazer vericação do icone fixo ou pegar da api
  useEffect(() => {
    async function getData() {
      if (city !== null) {
        const iconApi = weatherData.iconCityRt;
        const tempApi = weatherData.tempRealTime;
        setIcon(iconApi);
        setTemp(tempApi);
        return;
      } else {
        const iconFixed = "";
        const tempFixed = 27;
        setIcon(iconFixed);
        setTemp(tempFixed);
      }
    }
    getData();
  }, [city]);

  return (
    <>
      <img src={`https:${icon}`} alt="Icone Clima" className="w-16 h-16" />
      <p className="text-gray-600 capitalize">{Math.round(temp)}°C</p>
    </>
  );
}

export default ClimaIcon;
