import { Sun } from 'lucide-react'; // Biblioteca de ícones
import { useState, useEffect } from 'react';
import { weatherApi } from '../../../Apis/weatherService.js';

function ClimaIcon({data}) {
  const [icon, setIcon] = useState(null);
  const [temp, setTemp] = useState(null);
  
  useEffect(()=>{
    if (data == null){
      return
    }
    async function getData(){
      try{
        const iconRequest = await weatherApi.iconCityRt();
        const tempRequest = await weatherApi.tempRealTime();
        
        setIcon(iconRequest);
        setTemp(tempRequest);
      }catch(error){
        console.error("Erro ao buscar clima:", error);
      }
    }
    getData();
  }, [data]);

if (icon == null){
    return(
      <>
      <Sun className="text-yellow-400 w-12 h-12" />
      <span className="text-xl font-light">30°C</span>
      </>
    );
  }else{
  return (
      <>
        <img
          src={`https:${icon}`}
          className="w-16 h-16"
        />
        <p className="text-gray-600 capitalize">{temp}°C</p>
      </>
    );
  }
}

export default ClimaIcon