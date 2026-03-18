import { ArrowLeft, MapPin, Clock, Car, Info, Coffee, Utensils, Camera, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useWeatherCity } from "../services/weather/weatherContext.jsx";

function Distance() {
  const { city, globalLocals, loading } = useWeatherCity();
  const displayCity = city || "Londrina (Exemplo)";

  const cafesList = globalLocals?.filter(l => l.categories?.some(c => c.includes("cafe"))) || [];
  const restaurantesList = globalLocals?.filter(l => l.categories?.some(c => c.includes("restaurant"))) || [];
  const atracoesList = globalLocals?.filter(l => l.categories?.some(c => c.includes("tourism"))) || [];

  const [cafeIdx, setCafeIdx] = useState(0);
  const [restIdx, setRestIdx] = useState(0);
  const [atracaoIdx, setAtracaoIdx] = useState(0);

  const destinations = [
    { 
      time: "10 min", 
      subtitle: "Parada para Café", 
      Icon: Coffee, 
      colorClass: "text-amber-600", 
      bgClass: "bg-amber-100",
      options: cafesList.length > 0 ? cafesList : [{ name: "Cafeteria (Pesquise uma cidade)" }],
      selectedIndex: cafeIdx,
      setSelectedIndex: setCafeIdx
    },
    { 
      time: "15 min", 
      subtitle: "Almoço / Jantar", 
      Icon: Utensils, 
      colorClass: "text-orange-600", 
      bgClass: "bg-orange-100",
      options: restaurantesList.length > 0 ? restaurantesList : [{ name: "Restaurante (Pesquise uma cidade)" }],
      selectedIndex: restIdx,
      setSelectedIndex: setRestIdx
    },
    { 
      time: "25 min", 
      subtitle: "Atração Turística", 
      Icon: Camera, 
      colorClass: "text-emerald-600", 
      bgClass: "bg-emerald-100",
      options: atracoesList.length > 0 ? atracoesList : [{ name: "Atração (Pesquise uma cidade)" }],
      selectedIndex: atracaoIdx,
      setSelectedIndex: setAtracaoIdx
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col p-6">
      <div className="max-w-md mx-auto w-full">
        {loading ? (
          <p className="text-center text-slate-500 py-8">A calcular rotas para os locais...</p>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="bg-red-100 p-2.5 rounded-lg text-red-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-800 line-clamp-1">{displayCity}</h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              {destinations.map((item, index) => (
                <div key={index} className="flex items-center gap-4">

                  <div className="w-20 shrink-0 text-right">
                    <span className="bg-slate-200 text-slate-700 px-3 py-1.5 rounded-full text-sm font-semibold shadow-sm">
                      {item.time}
                    </span>
                  </div>

                  <div className="relative bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 w-full hover:border-blue-300 hover:shadow-md transition-all focus-within:ring-2 focus-within:ring-blue-500">

                    <div className={`${item.bgClass} ${item.colorClass} p-3 rounded-xl shrink-0`}>
                      <item.Icon size={20} />
                    </div>

                    <div className="flex-1 min-w-0 pr-2">
                      <p className="text-sm font-bold text-slate-800 line-clamp-1">
                        {item.options[item.selectedIndex]?.name}
                      </p>
                      <p className="text-xs font-medium text-slate-500 line-clamp-1">
                        {item.subtitle}
                      </p>
                    </div>

                    <ChevronDown size={18} className="text-slate-400 shrink-0" />

                    <select
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      value={item.selectedIndex}
                      onChange={(e) => item.setSelectedIndex(Number(e.target.value))}
                      title={`Escolher ${item.subtitle}`}
                    >
                      {item.options.map((opt, optIndex) => (
                        <option key={optIndex} value={optIndex}>
                          {opt.name}
                        </option>
                      ))}
                    </select>
                    
                  </div>
                  
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex items-start gap-3 text-sm text-blue-800">
                <Info size={20} className="shrink-0 text-blue-500 mt-0.5" />
                <p>
                  Deslocamentos internos em <strong>{displayCity}</strong> entre os locais selecionados costumam levar, em média, de 10 a 25 minutos.
                </p>
              </div>

              <div className="bg-slate-100 border border-slate-200 p-4 rounded-2xl flex items-start gap-3 text-sm text-slate-700">
                <Car size={20} className="shrink-0 text-slate-500 mt-0.5" />
                <p>
                  O trajeto entre o aeroporto mais próximo e a região central apresenta um tempo médio estimado entre 15 e 25 minutos.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Distance;