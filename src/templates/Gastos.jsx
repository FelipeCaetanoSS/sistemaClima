import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Utensils, Bed, Car, Info, Minus, Plus, Wallet } from "lucide-react";
import { useWeatherCity } from "../services/weather/weatherContext.jsx";

function Gastos() {
  const { city, loading } = useWeatherCity();
  const [dias, setDias] = useState(3);
  
  const precoDia = 300; 
  const total = dias * precoDia;

  const displayCity = city || "Cidade";

  const diminuirDias = () => setDias(prev => (prev > 1 ? prev - 1 : 1));
  const aumentarDias = () => setDias(prev => prev + 1);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col p-6">
      <div className="max-w-md mx-auto w-full">

        {loading ? (
          <p className="text-center text-slate-500 py-8">A calcular orçamento...</p>
        ) : (
          <>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 mb-6">
              
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                <div className="bg-red-100 p-2.5 rounded-xl text-red-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-800 line-clamp-1">{displayCity}</h2>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-2">Duração da Viagem</p>
                  <div className="flex items-center gap-3 bg-slate-50 p-1.5 rounded-xl border border-slate-200 w-fit">
                    <button 
                      onClick={diminuirDias}
                      className="p-2 bg-white rounded-lg shadow-sm text-slate-600 hover:text-blue-600 transition"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-bold text-slate-800">{dias}</span>
                    <button 
                      onClick={aumentarDias}
                      className="p-2 bg-white rounded-lg shadow-sm text-slate-600 hover:text-blue-600 transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-600 mb-1">Total Estimado</p>
                  <div className="flex items-center justify-end gap-1.5 text-blue-600">
                    <Wallet size={20} />
                    <span className="text-3xl font-bold">R${total}</span>
                  </div>
                </div>
              </div>

            </div>

            <p className="text-center text-slate-600 text-sm mb-8 px-4">
              A estimativa para <strong className="text-slate-800">{dias} dias</strong> em <strong className="text-slate-800">{displayCity}</strong> é de aproximadamente <strong className="text-blue-600">R${total}</strong> por pessoa, considerando hospedagem, alimentação e transporte básico.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:border-orange-200 transition">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 mb-3">
                  <Utensils size={24} />
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-1">Alimentação</h3>
                <p className="text-xs text-slate-500 font-medium bg-slate-50 py-1 px-2 rounded-md w-full">R$60 a R$80 /dia</p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:border-blue-200 transition">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mb-3">
                  <Bed size={24} />
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-1">Hospedagem</h3>
                <p className="text-xs text-slate-500 font-medium bg-slate-50 py-1 px-2 rounded-md w-full">R$190 a R$350 /dia</p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:border-emerald-200 transition">
                <div className="bg-emerald-100 p-3 rounded-full text-emerald-600 mb-3">
                  <Car size={24} />
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-1">Transporte</h3>
                <p className="text-xs text-slate-500 font-medium bg-slate-50 py-1 px-2 rounded-md w-full">R$40 a R$50 /dia</p>
              </div>

            </div>

            <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex items-start gap-3 text-sm text-amber-800">
              <Info size={20} className="shrink-0 text-amber-600 mt-0.5" />
              <p>
                Os valores apresentados são apenas uma média referencial. O custo real pode variar significativamente dependendo do seu estilo de viagem, exigências de conforto e época do ano.
              </p>
            </div>

          </>
        )}
      </div>
    </div>
  );
}

export default Gastos;