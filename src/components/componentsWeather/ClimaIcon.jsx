import { useWeatherCity } from "../../services/weather/weatherContext.jsx";
import rainIcon from "../../assets/rainIcon.webp"; 

function ClimaIcon() {
  const { city, weatherData } = useWeatherCity();

  const data = city && weatherData;

  const icon = data ? `https:${weatherData.iconCityRt}` : rainIcon;
  const temp = data ? Math.round(weatherData.tempRealTime) : 22;

  return (
    <div className="flex flex-col items-center cursor-pointer hover:scale-110 transition">
      <img src={icon} alt="Icone Clima" className="w-14 h-14 mb-1" />
      <span className="text-xl font-light">{temp}°C </span>
    </div>
  );
}

export default ClimaIcon;