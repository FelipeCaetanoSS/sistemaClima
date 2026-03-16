import { useWeatherCity } from "../../services/weather/weatherContext.jsx";
import sunIcon from "../../assets/sun.png"; 

function ClimaIcon() {
  const { city, weatherData } = useWeatherCity();

  const data = city && weatherData;

  const icon = data ? `https:${weatherData.iconCityRt}` : sunIcon;
  const temp = data ? Math.round(weatherData.tempRealTime) : 30;

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <img src={icon} alt="Icone Clima" className="w-16 h-16" />
      <p className="text-gray-600 text-lg capitalize">{temp}°C</p>
    </div>
  );
}

export default ClimaIcon;