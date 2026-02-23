import { FaTaxi, FaMoneyBillWave } from "react-icons/fa";
import ClimaIcon from "./componentsWeather/ClimaIcon.jsx";

function Informations(){
    return(
        <div className="items-center flex flex-col bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <ClimaIcon/>
          <div className="flex flex-1/3">
            <FaMoneyBillWave className="text-green-600 w-12 h-12" />
            <span className="text-xl font-light">R$250</span>
          </div>
          <div className="flex flex-1/3">
            <FaTaxi className="text-gray-600 w-12 h-12" />
            <span className="text-xl font-light">25 min</span>
          </div>
          
        </div>
    );
}

export default Informations