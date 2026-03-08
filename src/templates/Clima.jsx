import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import ClimaIcon from "../components/componentsWeather/ClimaIcon.jsx";
import WeatherCalendar from "../components/componentsWeather/WeatherCalendar";
import { useState, useEffect } from "react";
import { weatherApi } from "../services/weatherService.js";
import { CalendarDays } from "lucide-react";

function Clima() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [openCalendar, setOpenCalendar] = useState(false);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const data = await weatherApi("Londrina");

        const selectedDay = selectedDate.toISOString().split("T")[0];

        const filtered = data.list.find((item) =>
          item.dt_txt.includes(selectedDay + " 12:00:00"),
        );

        setWeather(filtered);
      } catch (error) {
        console.error("Erro ao buscar clima:", error);
      }
    }

    fetchWeather();
  }, [selectedDate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="px-6 pt-6 pb-8">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <ClimaIcon />
              {weather && (
                <h1 className="text-4xl font-bold text-slate-800">
                  {Math.round(weather?.main?.temp)}°C
                </h1>
              )}
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

          {weather && (
            <div className="mt-6 text-center text-slate-700 text-sm space-y-1">
              <p>🌧 Chuva: {weather?.clouds?.all}%</p>
              <p>💧 Umidade: {weather?.main?.humidity}%</p>
              <p>🌬 Vento: {weather?.wind?.speed} km/h</p>
            </div>
          )}
        </div>

        <div className="bg-white mx-6 mt-6 p-6 rounded-3xl shadow-lg text-slate-700 text-center">
          <p>
            O dia {selectedDate.getDate()} está com temperatura de{" "}
            {weather && Math.round(weather?.main?.temp)}°C. Clima ideal para
            atividades ao ar livre.
          </p>
        </div>
      </main>

      <Footer />

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
