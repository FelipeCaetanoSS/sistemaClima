import { useState } from "react";
import { FaMapMarkerAlt, FaUtensils, FaHotel, FaCar } from "react-icons/fa";

function Gastos() {

  const precoDia = 300; 
  const [dias, setDias] = useState(3);

  const total = dias * precoDia;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-yellow-300 via-yellow-200 to-purple-400 p-6">

      <div className="flex items-center gap-2 mb-6">
        <FaMapMarkerAlt className="text-red-600" />
        <h1 className="text-2xl font-semibold">Londrina</h1>
      </div>

      <div className="flex justify-between w-full max-w-sm mb-8">

        <div className="flex flex-col items-center">
          <span className="text-lg">Selecione o período:</span>

          <input
            type="number"
            value={dias}
            min="1"
            onChange={(e) => setDias(Number(e.target.value))}
            className="bg-white border w-16 text-center py-1 mt-2"
          />

        </div>

        <div className="flex flex-col items-center">
          <span className="text-lg">Valor total estimado:</span>

          <div className="bg-white border px-4 py-2 mt-2 text-xl">
            R${total}
          </div>

        </div>

      </div>

      <div className="bg-white p-5 rounded shadow max-w-sm text-center text-gray-700 mb-10">
        A estimativa para uma viagem de {dias} dias em Londrina é de aproximadamente
        R${total} por pessoa, considerando hospedagem, alimentação e transporte.
      </div>

      <div className="flex gap-6 mb-12">

        <div className="bg-white p-4 rounded shadow flex flex-col items-center w-24">
          <FaUtensils className="text-2xl mb-2" />
          <span>R$60 a R$80: Por dia</span>
        </div>

        <div className="bg-white p-4 rounded shadow flex flex-col items-center w-24">
          <FaHotel className="text-2xl mb-2" />
          <span>R$190 a R$350: Diária de hospedagem(pode variar)</span>
        </div>

        <div className="bg-white p-4 rounded shadow flex flex-col items-center w-24">
          <FaCar className="text-2xl mb-2" />
          <span>R$40 a R$50: transporte por dia(uber, onibus, etc...)</span>
        </div>

      </div>

      <div className="bg-gray-900 text-white p-4 rounded max-w-xs text-sm absolute bottom-10 right-6">
        Este valor pode variar dependendo do estilo de viagem, época do ano e da duração da estadia.
      </div>

    </div>
  );
}

export default Gastos;