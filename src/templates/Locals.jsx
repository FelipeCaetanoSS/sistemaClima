import { Utensils, Coffee, Bed, Camera, MapPin, Phone, Globe, Clock, Accessibility, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { touristPointsApi } from "../services/touristPoints/touristPointsService.js";
import { useWeatherCity } from "../services/weather/weatherContext.jsx";

const FILTROS = [
  { label: "Atrações", value: "tourism.attraction" },
  { label: "Restaurantes", value: "catering.restaurant" },
  { label: "Cafés", value: "catering.cafe" },
  { label: "Hotéis", value: "accommodation.hotel" },
];

const mockLocais = [];
for (let i = 0; i < 10; i++) {
  mockLocais.push({
    name: `Local ${i + 1}`,
    address: `Rua fictícia, ${i + 1}`,
    phone: `+55 0000-0000`,
    website: "https://exemplo.com",
    openingHours: "08:00 - 18:00",
    hasWheelchair: true, 
    hasTakeaway: true,
  });
}

const getStyleByFilter = (filterValue) => {
  if (filterValue.includes("restaurant")) {
    return { Icon: Utensils, bgColor: "bg-orange-100", textColor: "text-orange-600" };
  }
  if (filterValue.includes("cafe")) {
    return { Icon: Coffee, bgColor: "bg-amber-100", textColor: "text-amber-700" };
  }
  if (filterValue.includes("hotel") || filterValue.includes("accommodation")) {
    return { Icon: Bed, bgColor: "bg-emerald-100", textColor: "text-emerald-600" };
  }
  if (filterValue.includes("tourism") || filterValue.includes("attraction")) {
    return { Icon: Camera, bgColor: "bg-blue-100", textColor: "text-blue-600" };
  }
  return { Icon: MapPin, bgColor: "bg-slate-100", textColor: "text-slate-600" };
};

function Locals() {
  const { weatherData, city } = useWeatherCity();
  const [locais, setLocais] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoriaAtiva, setCategoriaAtiva] = useState(FILTROS[0].value);
  
  // 2. Estado para controlar qual card está aberto
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    async function fetchLocaisFiltrados() {
      if (!weatherData?.lat || !weatherData?.lon) return;

      setLoading(true);
      try {
        await touristPointsApi.formatCoord(weatherData.lat, weatherData.lon);
        const data = await touristPointsApi.request(categoriaAtiva, 10);
        if (data) setLocais(data);
      } catch (error) {
        console.error("Erro ao buscar locais:", error);
      } finally {
        setLoading(false);
      }
    }

    // Fecha os cards sempre que mudar de categoria
    setExpandedId(null);
    fetchLocaisFiltrados();
  }, [weatherData?.lat, weatherData?.lon, categoriaAtiva]);

  const displayLocais = (weatherData && locais.length > 0) ? locais : mockLocais;
  const { Icon, bgColor, textColor } = getStyleByFilter(categoriaAtiva);

  // Função para alternar a abertura do card
  const toggleCard = (index) => {
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col p-6">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {FILTROS.map((filtro) => (
            <button
              key={filtro.value}
              onClick={() => setCategoriaAtiva(filtro.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all shadow-sm ${
                categoriaAtiva === filtro.value
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              {filtro.label}
            </button>
          ))}
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mt-4">
          {loading ? (
            <p className="text-slate-500 py-4 text-center">A procurar as melhores opções...</p>
          ) : (
            <div className="space-y-4">
              {displayLocais.length === 0 && (
                <p className="text-slate-500 py-4 text-center">Nenhum local encontrado para esta categoria.</p>
              )}
              {displayLocais.map((local, index) => {
                const isExpanded = expandedId === index;

                return (
                  <div 
                    key={index} 
                    className={`flex flex-col gap-4 p-3 rounded-xl transition-all border cursor-pointer ${
                      isExpanded ? "bg-slate-50 border-slate-200 shadow-sm" : "border-transparent hover:bg-slate-50 hover:border-slate-100"
                    }`}
                    onClick={() => toggleCard(index)}
                  >
                    {/* Cabeçalho do Card */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1">
                        <div className={`${bgColor} ${textColor} p-3 rounded-lg shrink-0`}>
                          <Icon size={24} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-base line-clamp-1 text-slate-800">{local.name}</p>
                          <p className="text-xs text-slate-500 capitalize line-clamp-1">
                            {FILTROS.find(f => f.value === categoriaAtiva)?.label}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                        {local.address && (
                          <div className="flex items-center gap-1.5 text-slate-400">
                            <MapPin size={14} className="shrink-0" />
                            <p className="text-xs sm:max-w-[180px] line-clamp-1">{local.address}</p>
                          </div>
                        )}
                        {/* Ícone de Setinha para indicar que expande */}
                        <div className="text-slate-400 shrink-0 ml-2">
                          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </div>
                    </div>

                    {/* Corpo do Card (Visível apenas se expandido) */}
                    {isExpanded && (
                      <div className="mt-2 pt-4 border-t border-slate-200 flex flex-col gap-3 text-sm text-slate-600 animate-in fade-in slide-in-from-top-2 duration-200">
                        
                        {/* Informações Práticas */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {local.openingHours && (
                            <div className="flex items-start gap-2">
                              <Clock size={16} className="mt-0.5 text-slate-400 shrink-0" />
                              <span><strong className="font-medium text-slate-700">Horário:</strong> {local.openingHours}</span>
                            </div>
                          )}
                          
                          {local.phone && (
                            <div className="flex items-start gap-2">
                              <Phone size={16} className="mt-0.5 text-blue-500 shrink-0" />
                              <a 
                                href={`tel:${local.phone}`} 
                                className="text-blue-600 hover:underline font-medium"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {local.phone}
                              </a>
                            </div>
                          )}

                          {local.website && (
                            <div className="flex items-start gap-2">
                              <Globe size={16} className="mt-0.5 text-emerald-500 shrink-0" />
                              <a 
                                href={local.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-emerald-600 hover:underline font-medium"
                                onClick={(e) => e.stopPropagation()}
                              >
                                Visitar Website
                              </a>
                            </div>
                          )}
                        </div>

                        {/* Badges (Acessibilidade, Takeaway...) */}
                        <div className="flex flex-wrap gap-2 mt-2">
                          {local.hasWheelchair && (
                            <span className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium border border-blue-100">
                              <Accessibility size={14} /> Acessível
                            </span>
                          )}
                          {local.hasTakeaway && (
                            <span className="flex items-center gap-1.5 px-2.5 py-1 bg-orange-50 text-orange-700 rounded-md text-xs font-medium border border-orange-100">
                              Takeaway
                            </span>
                          )}
                        </div>

                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Locals;