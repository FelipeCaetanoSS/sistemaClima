import { FaTaxi, FaMoneyBillWave } from "react-icons/fa";
import ClimaIcon from "./componentsWeather/ClimaIcon.jsx";
import { useNavigate } from "react-router-dom";

function Informations() {

  //const navigate = useNavigate();

  return (
    <div className="flex justify-around items-center bg-white p-6 rounded-3xl shadow-sm border border-slate-100 w-full max-w-md mx-auto">

      <div className="flex flex-col items-center cursor-pointer hover:scale-115 transition"
        onClick={() => navigate("/clima")}>
        <ClimaIcon/>
      </div>

      <div className="flex flex-col items-center cursor-pointer hover:scale-110 transition"
        onClick={() => navigate("/gastos")}>
        <FaMoneyBillWave className="text-green-600 w-10 h-10" />
        <span className="text-xl font-light mt-1">R$250</span>
      </div>

      <div className="flex flex-col items-center hover:scale-110 transition">
        <FaTaxi className="text-gray-600 w-10 h-10" />
        <span className="text-xl font-light mt-1">25 min</span>
      </div>

    </div>
  );
}

export default Informations;