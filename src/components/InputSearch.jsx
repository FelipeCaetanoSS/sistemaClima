import { useState } from "react";
import { weatherApi } from "../../Apis/weatherService";
import ClimaIcon from "./componentsWeather/ClimaIcon";

function InputSearch() {
  const [cidade, setCidade] = useState("");
  const [teste, setTeste] = useState("");

  const search = async () => {
    try{
      weatherApi.setCity(cidade);
      const resposta = await weatherApi.iconCityRt();
      console.log("teste", resposta);
      setTeste(resposta);
    }catch (error) {
      console.error("Erro ao buscar:", error);
    }
  };

  return (

    <div className="flex justify-center mt-6 mb-8">
      <div className="relative flex items-center w-96 h-10 rounded-md bg-gray-100 border border-gray-300 shadow-sm focus-within:shadow-md focus-within:border-gray-400 overflow-hidden transition-all duration-300">
        
        <input
          className="w-full h-full pl-4 pr-4 outline-none text-gray-700 text-sm bg-transparent placeholder-gray-500"
          type="text"
          id="search"
          placeholder="Digite o nome da cidade..."
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setCidade(e.target.value);
              search();
              }
            }
          }/>

        <button className="h-full px-5 bg-gray-500 hover:bg-gray-600 text-white text-sm font-medium transition-colors"
        onClick={search}
        >
          Buscar
        </button>
      </div>
        <ClimaIcon dados={teste}/>
    </div>
  );
}

export default InputSearch;