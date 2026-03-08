import InputSearch from "../components/InputSearch";
import Informations from "../components/Informations";
import TouristPoints from "../components/TouristPoints";
import { useWeatherCity } from "../services/weatherContext.js";

function Home() {
  const { city } = useWeatherCity();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <InputSearch />
        <div className="itens-center text-center">
          <h1>{city}</h1>
        </div>
        <TouristPoints />
        <Informations />
      </main>
    </div>
  );
}

export default Home;
