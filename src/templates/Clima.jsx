import Footer  from './components/Footer.jsx';
import Header  from './components/Header.jsx';
import Informations from './components/Informations.jsx';
import Locals  from './components/Locals.jsx';
import ClimaIcon from '../components/componentsWeather/ClimaIcon.jsx';
import { HomeIcon } from 'lucide-react';
import { useState } from "react";
import { weatherApi } from "../../Apis/weatherService.js";

function Clima() {
  return (
    <div>
    <Header/>
    <ClimaIcon/>
    {/* Card de Locais Populares */}
    <Locals/>

    {/* Card de Clima, Gastos, Tempo Deslocamento - Usando dados da sua API */}
    <Informations/>

    <Footer/>
    </div>
  );
}

export default Clima