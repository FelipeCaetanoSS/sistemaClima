import ClimaIcon from "../components/componentsWeather/ClimaIcon.jsx";
import WeatherCalendar from "../components/componentsWeather/WeatherCalendar";
import { useState, useEffect } from "react";
import { CalendarDays } from "lucide-react";
import { useWeatherCity } from "../services/weather/weatherContext.jsx";

function Clima() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);
  const { weatherData, loading, error } = useWeatherCity();

  useEffect(() => {
    console.log("Data selecionada no calendário:", selectedDate);
  }, [selectedDate]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-yellow-300 via-yellow-200 to-purple-400">
      <main className="flex-1">
        <div className="px-6 pt-6 pb-8">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <div>
              <ClimaIcon />
              <p>Chuva: 10%
                Umidade: 43%
                Vento: 11 km/h
              </p>
              </div>
            </div>

            <div
              onClick={() => setOpenCalendar(true)}
              className="flex items-center gap-2 cursor-pointer hover:scale-105 transition"
            >
              <CalendarDays className="text-black" />
              <div>
                <p className="text-lg font-semibold text-slate-800">Londrina</p>
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

          {loading && (
            <p className="mt-8 text-center text-slate-500">
              A carregar os dados meteorológicos...
            </p>
          )}

          {weatherData && !loading && (
            <>
              <div className="mt-6 text-center text-slate-700 text-sm space-y-1">
                <p>Chuva: {weatherData.chanceRain}%</p>
                <p>Umidade: {weatherData.humidity}%</p>
                <p>Vento: {Math.round(weatherData.windSpeed)} km/h</p>
                <p>Temp Max: {Math.round(weatherData.tempMax)}°C</p>
                <p>Temp Min: {Math.round(weatherData.tempMin)}°C</p>
                <p>{weatherData.textRt}</p>
              </div>
            </>
          )}
        </div>

        {weatherData && !loading && (
          <div className="bg-white mx-6 mt-2 p-6 rounded-3xl shadow-lg text-slate-700 text-center">
            <p>
              O dia {selectedDate.getDate()} está com temperatura de{" "}
              {Math.round(weatherData.tempRealTime)}°C. Clima ideal para
              atividades ao ar livre.
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
