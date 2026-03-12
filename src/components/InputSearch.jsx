import { useState } from "react";
import { useWeatherCity } from "../services/weather/weatherContext";
import Toast from "./toast";
import { useNavigate } from "react-router";

function InputSearch() {
  const [city, setCity] = useState("");
  const { searchWeather, error } = useWeatherCity();
  const navigate = useNavigate();

  function search() {
    searchWeather(city);
    if (city) {
      navigate("/home");
    } else {
      return;
    }
  }

  return (
    <div className="flex justify-center mt-6 mb-8">
      <div className="relative flex items-center w-96 h-10 rounded-md bg-gray-100 border border-gray-300 shadow-sm focus-within:shadow-md focus-within:border-gray-400 overflow-hidden transition-all duration-300">
        <input
          className="w-full h-full pl-4 pr-4 outline-none text-gray-700 text-sm bg-transparent placeholder-gray-500"
          type="text"
          id="search"
          placeholder="Digite o nome da cidade..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setCity(e.target.value);
              search();
            }
          }}
        />

        <button
          className="h-full px-5 bg-gray-500 hover:bg-gray-600 text-white text-sm font-medium transition-colors"
          onClick={search}
        >
          Buscar
        </button>
        <Toast message={error} />
      </div>
    </div>
  );
}

export default InputSearch;
