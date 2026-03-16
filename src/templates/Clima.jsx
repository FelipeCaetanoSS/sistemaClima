import ClimaIcon from "../components/componentsWeather/ClimaIcon.jsx";
import WeatherCalendar from "../components/componentsWeather/WeatherCalendar";
import { useState, useEffect } from "react";
import { CalendarDays } from "lucide-react";
import { useWeatherCity } from "../services/weather/weatherContext.jsx";

function Clima() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);
  const { weatherData, loading, city } = useWeatherCity();

  useEffect(() => {
    console.log("Data selecionada no calendário:", selectedDate);
  }, [selectedDate]);

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
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="px-6 pt-6 pb-8">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <ClimaIcon />
            </div>

            <div
              onClick={() => setOpenCalendar(true)}
              className="flex items-center gap-2 cursor-pointer hover:scale-105 transition"
            >
              <CalendarDays className="text-black" />
              <div>
                <p className="text-lg font-semibold text-slate-800">{displayCity}</p>
                <p className="text-sm text-slate-600">
                  {selectedDate.toLocaleDateString("pt-BR", {
                    weekday: "long",
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>

          {loading ? (
            <p className="mt-8 text-center text-slate-500">
              A carregar os dados meteorológicos...
            </p>
          ) : (
            <>
              <div className="mt-6 text-center text-slate-700 text-sm space-y-1">
                <p>Chuva: {displayWeather.chanceRain}%</p>
                <p>Umidade: {displayWeather.humidity}%</p>
                <p>Vento: {Math.round(displayWeather.windSpeed)} km/h</p>
                <p>Temp Max: {Math.round(displayWeather.tempMax)}°C</p>
                <p>Temp Min: {Math.round(displayWeather.tempMin)}°C</p>
                <p className="font-semibold text-blue-600 mt-2">{displayWeather.textRt}</p>
              </div>
            </>
          )}
        </div>

        {!loading && (
          <div className="bg-white mx-6 mt-2 p-6 rounded-3xl shadow-lg text-slate-700 text-center">
            <p>
              O dia {selectedDate.getDate()} está com temperatura de{" "}
              <span className="font-bold">{Math.round(displayWeather.tempRealTime)}°C</span>. Clima ideal para atividades ao ar livre.
            </p>
          </div>
        )}
      </main>

      {openCalendar && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-3xl shadow-xl">
            <WeatherCalendar
              onSelectDate={(date) => {
                setSelectedDate(date);
                setOpenCalendar(false);
              }}
            />
            <button
              onClick={() => setOpenCalendar(false)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-xl"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Clima;