import { useEffect, useState } from "react";
import { useWeatherCity } from "../../services/weather/weatherContext.jsx";

function ClimaIcon() {
  const [icon, setIcon] = useState(null);
  const [temp, setTemp] = useState(null);
  const { city, weatherData } = useWeatherCity();

  useEffect(() => {
    if (city && weatherData) {
      setIcon(weatherData.iconCityRt);
      setTemp(weatherData.tempRealTime);
    } else {
      setIcon("/src/assets/sun.png");
      setTemp(30);
    }
  }, [city, weatherData]);

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      {icon && <img src={icon} alt="Ícone clima" className="w-10 h-10" />}
      <p className="text-gray-600 text-lg">
        {temp !== null ? Math.round(temp) : "30"}°C
      </p>
    </div>
  );
}

export default ClimaIcon;