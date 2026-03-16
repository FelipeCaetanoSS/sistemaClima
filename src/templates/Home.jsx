import InputSearch from "../components/InputSearch";
import Informations from "../components/Informations";
import TouristPoints from "../components/TouristPoints";
import { useWeatherCity } from "../services/weather/weatherContext.jsx";

function Home() {
  const { city, loading } = useWeatherCity();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">

        <InputSearch />

        {loading ? (
          <div className="text-center mt-4 text-slate-500">
            Carregando informações do clima...
          </div>
        ) : (
          <div className="itens-center text-center p-8 rounded-xl shadow-sm border border-slate-100 mt-4 mx-4 md:mx-auto max-w-4xl bg-white">
            <h1 className="font-bold text-2xl">
              {city}
            </h1>
            {!city && (
              <p className="text-sm text-slate-500 mt-2">
                Pesquise uma cidade acima para ver dados reais.
              </p>
            )}
          </div>
        )}

        <TouristPoints />
        <Informations />
        
      </main>
    </div>
  );
}

export default Home;