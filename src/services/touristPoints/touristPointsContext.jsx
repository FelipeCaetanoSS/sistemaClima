import { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../contexts/WeatherContext'; 
import { touristPointsService } from '../services/touristPointsService';

export function ListaPontosTuristicos() {
  const { weatherData } = useContext(WeatherContext);
  
  const [pontos, setPontos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function buscarPontosDaRegiao() {
      setLoading(true);
      
      try {
        await touristPointsService.formatCoord(weatherData.lat, weatherData.lon);
        const locaisEncontrados = await touristPointsService.request();
        
        if (locaisEncontrados) {
          setPontos(locaisEncontrados);
        } else {
          console.warn("Nenhum ponto turístico encontrado.");
          setPontos([]);
        }

      } catch (erro) {
        console.error("Erro ao carregar pontos turísticos:", erro);
        setPontos([]);
      } finally {
        setLoading(false);
      }
    }

    if (weatherData?.lat && weatherData?.lon) {
      buscarPontosDaRegiao();
    }
  }, [weatherData?.lat, weatherData?.lon]);

  if (loading) return <p>Buscando atrações na região...</p>;
  if (!weatherData) return <p>Selecione uma cidade para ver os pontos turísticos.</p>;
  if (pontos.length === 0) return <p>Nenhuma atração encontrada para esta região.</p>;

  return (
    <ul>
      {pontos.map((ponto, index) => (
        <li key={ponto.index || index}>{ponto.name} - {ponto.address}</li>
      ))}
    </ul>
  );
}