import { config } from "../config/config";
import { z } from 'zod';

export const weatherSchema = z.object({
  current: z.object({
    temp_c: z.number(),
    condition: z.object({
    text: z.string(),
    icon: z.string(),
    }),
  }),
  forecast: z.object({
    forecastday: z.array(
      z.object({
        day: z.object({
          condition: z.object({
            text: z.string(),
            icon: z.string(),
          }),
          mintemp_c: z.number(),
          maxtemp_c: z.number(),
          daily_chance_of_rain: z.number(),
          maxwind_kph: z.number(),
          avghumidity: z.number(),
        }),
      })
    ),
  }),
})
.transform((data) => {
  const forecast = data.forecast.forecastday[0].day;

  return {
    iconCityRt: data.current.condition.icon,
    textRt: data.current.condition.text,
    tempRealTime: data.current.temp_c,
    tempMin: forecast.mintemp_c,
    tempMax: forecast.maxtemp_c,
    chanceRain: forecast.daily_chance_of_rain,
    windSpeed: forecast.maxwind_kph,
    humidity: forecast.avghumidity,
  };
}); 

class WeatherService {
    #URL = config.weatherUrl;
    //#URL;
    #API_KEY = config.weatherKey;
    #forecast = '/forecast.json';
    #city;

    async request() {
        try {
            const response = await fetch(`${this.#URL}${this.#forecast}?key=${this.#API_KEY}&q=${this.#city}&days=1`);
            
            if (!response.ok) {
                throw new Error(`Erro na API: ${response.status}`);
            }

            const data = await response.json();

            const validatedData = weatherSchema.parse(data); 
            
            return validatedData; 

        } catch (error) {
            console.error("Erro ao processar dados do clima:", error);
            throw error; 
        }
    }

      async setCity(newCity) {
        if (!newCity) return null;
        this.#city = newCity;
        const data = await this.request();
        //const data = ;
        console.log("Cidade nova:", newCity);
        console.log("dados:", data);
        return data;
    }

    async dayForecast(dataSelect) {
    //fazer logica de pegar as datas do usuario na previsao é no maximo 14 dias e passado preciso de parametros da data 
    //esse pega o passado const response = await fetch(`${this.#URL}${this.#history}?key=${this.#API_KEY}&q=${this.#city}&dt=${dataSelect}`);
    // para o passado usa return data.forecast.forecastday[0].day;
    // const response = await fetch(`${this.#URL}${this.#forecast}?key=${this.#API_KEY}&q=${this.#city}&days=10`);
    // const data = await response.json();
    // console.log("esse log: ", data.forecast);
    // const day = data.forecast.forecastday[0].day.;
    //return day 
    }
}

// Exportando a instância apenas uma vez
export const weatherApi = new WeatherService();