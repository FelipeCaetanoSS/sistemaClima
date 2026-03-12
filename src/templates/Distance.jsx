import { FaTaxi } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaMountain } from "react-icons/fa";
import { FaGlassMartiniAlt } from "react-icons/fa";

function Distance() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-yellow-300 via-yellow-200 to-purple-400 p-6">

      <div className="flex items-center gap-2 mb-6">
        <FaMapMarkerAlt className="text-red-600 w-5 h-5"/>
        <h1 className="text-2xl font-semibold">Londrina</h1>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <div className="bg-white p-3 rounded-xl shadow">
          <FaClock className="text-blue-500 w-6 h-6"/>
        </div>
        <span className="text-gray-700">20 min</span>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-sm">

        <div className="flex items-center gap-4">
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">10 min</span>

          <div className="bg-white p-3 rounded-lg shadow flex items-center gap-3 w-full">
            <FaGlassMartiniAlt className="text-red-500"/>
            <div>
              <p className="text-sm font-semibold">Cartagena</p>
              <p className="text-xs text-gray-500">Londrina</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">15 min</span>

          <div className="bg-white p-3 rounded-lg shadow flex items-center gap-3 w-full">
            <FaMountain className="text-green-600"/>
            <div>
              <p className="text-sm font-semibold">Catedral Metropolitana</p>
              <p className="text-xs text-gray-500">de Londrina</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">25 min</span>

          <div className="bg-white p-3 rounded-lg shadow flex items-center gap-3 w-full">
            <FaUtensils className="text-black"/>
            <div>
              <p className="text-sm font-semibold">Barolo Trattoria</p>
              <p className="text-xs text-gray-500">Cozinha Italiana</p>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-white mt-10 p-4 rounded-lg shadow max-w-sm text-sm text-gray-700">
        Deslocamentos internos em Londrina entre hotéis, parques,
        restaurantes e principais atrações costumam levar,
        em média, de 10 a 25 minutos.
      </div>

      <div className="bg-white mt-6 p-4 rounded-lg shadow max-w-sm text-sm text-gray-700">
        O trajeto entre o Aeroporto de Londrina e a região central
        apresenta um tempo médio estimado entre 15 e 25 minutos,
        variando conforme o fluxo de trânsito.
      </div>

      <div className="mt-10">
        <FaTaxi className="text-gray-700 w-12 h-12"/>
        <h1 className="text-center">Tempo de transporte</h1>
      </div>

    </div>
  );
}

export default Distance;