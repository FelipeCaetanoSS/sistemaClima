import { FaTaxi, FaMoneyBillWave } from "react-icons/fa";
import ClimaIcon from "./componentsWeather/ClimaIcon.jsx";
import { Link } from "react-router-dom";

function Informations() {
  return (
    <div className="flex justify-around items-center bg-white p-6 rounded-3xl shadow-sm border border-slate-100 w-full max-w-md mx-auto">

      <Link to="/clima" className="flex flex-col items-center cursor-pointer hover:scale-110 transition">
        <ClimaIcon/>
      </Link>

      <Link to="/gastos" className="flex flex-col items-center cursor-pointer hover:scale-110 transition">
        <FaMoneyBillWave className="text-green-600 w-10 h-10 mb-1" />
        <span className="text-xl font-light">R$250</span>
      </Link>

      <Link to="/distancia" className="flex flex-col items-center cursor-pointer hover:scale-110 transition">
        <FaTaxi className="text-gray-600 w-10 h-10 mb-1" />
        <span className="text-xl font-light">25 min</span>
      </Link>

    </div>
  );
}

export default Informations;