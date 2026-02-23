import { Utensils } from 'lucide-react'; // Biblioteca de ícones
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from "react";
import { weatherApi } from "../../Apis/weatherService.js";
import TouristPoints from "../components/TouristPoints.jsx";
import Informations from "../components/Informations.jsx";

function Locals() {
  return (
    <div>
    <Header/>
    <TouristPoints/>
    <Informations/>
    <Footer/>
    </div>
  );
}

export default Locals