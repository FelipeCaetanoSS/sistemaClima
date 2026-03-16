import { Utensils, Coffee, Bed, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { touristPointsApi } from "../services/touristPoints/touristPointsService.js";
import { useWeatherCity } from "../services/weather/weatherContext.jsx";

const mockLocais = [
  { name: "Restaurante", categories: ["Restaurante"] },
  { name: "Café", categories: ["Cafeteria"] },
  { name: "Turismo", categories: ["Atrações"] },
  { name: "Hotel", categories: ["Hotel"] }
];


const getCategoryStyle = (categories) => {
  const cat = (categories?.[0] || "").toLowerCase();

  if (cat.includes("restaurant") || cat.includes("restaurante")) {
    return { Icon: Utensils, bgColor: "bg-orange-100", textColor: "text-orange-600" };
  }
  if (cat.includes("cafe") || cat.includes("cafeteria") || cat.includes("café")) {
    return { Icon: Coffee, bgColor: "bg-amber-100", textColor: "text-amber-700" };
  }
  if (cat.includes("hotel") || cat.includes("accommodation")) {
    return { Icon: Bed, bgColor: "bg-emerald-100", textColor: "text-emerald-600" };
  }
  if (cat.includes("Turismo") || cat.includes("attraction") || cat.includes("museu") || cat.includes("parque")) {
    return { Icon: MapPin, bgColor: "bg-blue-100", textColor: "text-blue-600" };
  }
  
  return { Icon: MapPin, bgColor: "bg-slate-100", textColor: "text-slate-600" };
};

function TouristPoints() {
  const { weatherData } = useWeatherCity();
  const [locais, setLocais] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchLocais() {
      if (!weatherData?.lat || !weatherData?.lon) return;

      setLoading(true);
      try {
        await touristPointsApi.formatCoord(weatherData.lat, weatherData.lon);
        const data = await touristPointsApi.request("tourism", 3);
        if (data) setLocais(data);
      } catch (error) {
        console.error("Erro ao buscar locais:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchLocais();
  }, [weatherData?.lat, weatherData?.lon]);

  const displayLocais = (weatherData && locais.length > 0) ? locais : mockLocais;
  const locaisLimitados = displayLocais.slice(0, 4);

  return (
      <div className="w-full flex justify-center py-6 px-4">
        <Link to="/locais" className="w-full md:w-4/5 lg:w-2/3 max-w-4xl block group cursor-pointer">
      <div className="p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 w-full bg-white group-hover:shadow-md group-hover:border-slate-100 transition-all">
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            Locais Populares
          </h2>
        </div>

        {loading ? (
          <p className="text-slate-500 py-4">A procurar...</p>
        ) : (
          <div className="space-y-4">
            {locaisLimitados.map((local, index) => {
              const { Icon, bgColor, textColor } = getCategoryStyle(local.categories);

              return (
                <div key={index} className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-xl transition-all cursor-pointer border-b border-transparent hover:border-slate-100">
                  <div className={`${bgColor} ${textColor} p-3 rounded-lg`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm line-clamp-1">{local.name}</p>
                    <p className="text-xs text-slate-500 capitalize line-clamp-1">
                      {local.categories?.[0]?.replace(/_/g, " ")}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      </Link>
    </div>
  );
}

export default TouristPoints;