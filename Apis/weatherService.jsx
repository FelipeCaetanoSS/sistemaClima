import { FaSun} from "react-icons/fa";
import InputSearch from "../src/components/InputSearch";
import { useState } from "react";
import { weatherApi } from "./weatherService";

// chamar como parametro a function da api
function DadosApi(){
  const [weather, setWeather] = useState(null);
  const [api, setApi] = useState("");

  const handleSearch = async () => {
    try {
      const resultado = await weatherApi.tempRealTime();
      setWeather(resultado);
      console.log("resultado no jsx",resultado);

    } catch (error) {
      console.error("Erro ao buscar:", error);
    }
  };

  return(
    <>
    <InputSearch/>

    </>
  )
}

export default DadosApi
