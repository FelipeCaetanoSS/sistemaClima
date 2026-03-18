import ClimaIcon from "../components/componentsWeather/ClimaIcon.jsx";
import WeatherCalendar from "../components/componentsWeather/WeatherCalendar";
import { useState, useEffect } from "react";
import { CalendarDays } from "lucide-react";
import { useWeatherCity } from "../services/weather/weatherContext.jsx";
import { FaWind, FaTint, FaTemperatureHigh, FaSun } from "react-icons/fa";

function Clima() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);
  const { weatherData, loading, city } = useWeatherCity();

  const mockWeather = {
    chanceRain: 10,
    humidity: 50,
    windSpeed: 15,
    tempMax: 31,
    tempMin: 18,
    textRt: "Céu Limpo",
    tempRealTime: 25,
  };

  const displayWeather = weatherData || mockWeather;
  const displayCity = city || "Cidade";

  return (
    <div className="">

      <main className="flex-1 flex flex-col">
        <div className="px-6 pt-6 pb-8">

          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <ClimaIcon />
            </div>

            <div
              onClick={() => setOpenCalendar(true)}
              className="flex items-center gap-2 cursor-pointer hover:scale-105 transition"
            >
              <CalendarDays />
              <div>
                <p className="text-lg font-semibold">{displayCity}</p>
                <p className="text-sm">
                  {selectedDate.toLocaleDateString("pt-BR")}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto">
            <Card icon={<FaTemperatureHigh />} label="Sensação" value={`${displayWeather.tempRealTime}°C`} />
            <Card icon={<FaWind />} label="Vento" value={`${displayWeather.windSpeed} km/h`} />
            <Card icon={<FaTint />} label="Umidade" value={`${displayWeather.humidity}%`} />
            <Card icon={<FaSun />} label="Chuva" value={`${displayWeather.chanceRain}%`} />
          </div>

        </div>

        <div className="max-w-4xl mx-auto mb-100 mt-70 p-6 bg-white rounded-3xl shadow text-center">
          <p>
            O dia {selectedDate.getDate()} está com temperatura de {displayWeather.tempRealTime}°C.
            Ótimo dia para sair ☀️
          </p>
        </div>
      </main>

      {openCalendar && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-3xl">
            <WeatherCalendar
              onSelectDate={(date) => {
                setSelectedDate(date);
                setOpenCalendar(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function Card({ icon, label, value }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow text-center">
      <div className="text-xl">{icon}</div>
      <p>{label}</p>
      <p className="font-bold">{value}</p>
    </div>
  );
}

export default Clima;
