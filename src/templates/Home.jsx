import Header from '../components/Header';
import InputSearch from '../components/InputSearch';
import Footer from '../components/Footer';
import Informations from '../components/Informations';
import TouristPoints from '../components/TouristPoints';
import { useState } from 'react';
import { weatherApi } from '../Services/weatherService.js'

function Home() {
  const [city, setCity] = useState(null);

async function getData(){
    const temp = await weatherApi.getCity();
    const icon = await weatherApi.getCity();
    setCity(weatherApi.getCity());
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1">
      <InputSearch />
      <div className="itens-center text-center">
      {/*  Digite a cidade desejada fazer if aqui */}
      <h1>{city}</h1>
      </div>
      <TouristPoints/>
      <Informations icon={icon} temp={temp}/>
      </main>
      <Footer />
    </div>
  );
}

export default Home;