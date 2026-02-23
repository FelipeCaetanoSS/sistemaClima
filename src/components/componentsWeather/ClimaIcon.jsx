import { Sun } from 'lucide-react'; // Biblioteca de ícones

function ClimaIcon({ dados}) {
  if (!dados){
    return(
    <>
      <div className="flex flex-1/3">
          <Sun className="text-yellow-400 w-12 h-12" />
          <span className="text-xl font-light">30°C</span>
      </div>
    </>
        );
      }

  return (
      <div className="mt-4 flex flex-col items-center">

        {/* Aqui usamos a prop 'dados' para pegar a URL do icone */}
        <img
          src={`https:${dados.teste}`}
          className="w-16 h-16"
        />
        <p className="text-gray-600 capitalize">{dados.text}</p>
        
      </div>
    );
}

export default ClimaIcon