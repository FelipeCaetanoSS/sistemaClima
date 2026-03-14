import { FaTaxi, FaMoneyBillWave } from "react-icons/fa";
import ClimaIcon from "./componentsWeather/ClimaIcon.jsx";
import { Link } from "react-router-dom";

function Informations() {

  return (
    <div className="flex justify-around items-center bg-white p-6 rounded-3xl shadow-sm border border-slate-100 w-full max-w-md mx-auto">

      <div className="flex flex-col items-center cursor-pointer hover:scale-115 transition">
        <Link to="/clima">
        <ClimaIcon/>
        </Link>
      </div>

      <div className="flex flex-col items-center cursor-pointer hover:scale-110 transition">
        <Link to="/gastos" >
        <FaMoneyBillWave className="text-green-600 w-10 h-10" />
        <span className="text-xl font-light mt-1">R$250</span>
        </Link>
      </div>

      <div className="flex flex-col items-center hover:scale-110 transition">
        <Link to="/distancia">
        <FaTaxi className="text-gray-600 w-10 h-10" />
        <span className="text-xl font-light mt-1">25 min</span>
        </Link>
      </div>

    </div>
  );
}

export default Informations;