import Header from "../components/Header";
import InputSearch from "../components/InputSearch";
import Footer from "../components/Footer";
import Informations from "../components/Informations";
import TouristPoints from "../components/TouristPoints";
import { useState } from "react";
import { useWeatherCity } from "../services/weatherContext.jsx";

function Home() {
  const { city } = useWeatherCity();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <InputSearch />
        <div className="itens-center text-center">
          <h1>{city}</h1>
        </div>
        <TouristPoints />
        <Informations />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
