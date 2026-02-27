import { Sun } from 'lucide-react'; // Biblioteca de ícones
import weatherApi from '../../../Apis/weatherService.js';

async function ClimaIcon() {
  const icon = await weatherApi.iconCityRt();
  const temp = await weatherApi.tempRealTime();

if (icon == null){
    return(
      <Sun className="text-yellow-400 w-12 h-12" />
    );
  }else if (temp == null){
    return(
      <span className="text-xl font-light">30°C</span>
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