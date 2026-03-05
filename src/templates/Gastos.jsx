import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from "react";
import { weatherApi } from "../Services/weatherService.js";

function Gastos() {
  return (
    <div>
    <Header/>
    <div className="flex flex-1/3">
                <FaTaxi className="text-gray-600 w-12 h-12" />
                <span className="text-xl font-light">25 min</span>
    </div>
          <div className="flex flex-1/3">
          {/*Link para ir para pagina home */}
           <HomeIcon className="text-gray-600 w-12 h-12" />
      <span></span>
      </div>
    <main className="flex-1">
    <div className="text-center space-y-4 mt-8">
    </div>
    </main>
    <Footer/>
    </div>
  );
}

export default Gastos