class WeatherService{
    #city;
    #API_KEY = "3c04551421a54abd988182858261302";
    #URL = "https://api.weatherapi.com/v1";
    #forecast = "/forecast.json";
    #history = "/history.json";
    #search = "/search.json";


    constructor(initialCity = null) {
        this.#city = initialCity;
    }

    setCity(newCity) {
        this.#city = newCity;
        return console.log("OK: setCity",newCity);
    }
    // Usando a forecast - mais completa
    async request() {
        const response = await fetch(`${this.#URL}${this.#forecast}?key=${this.#API_KEY}&q=${this.#city}&days=1`);
        const data = await response.json();
        return data;
    }

    async iconCityRt() {
        const data = await this.request();
        return data.forecast.forecastday[0].day.condition.icon;
    }

    async tempRealTime() {
        const data = await this.request();
        return data.current.temp_c;
    }

    async tempMin() {
        const data = await this.request();
        return data.forecast.forecastday[0].day.mintemp_c;
    }

    async tempMax() {
        const data = await this.request();
        return data.forecast.forecastday[0].day.maxtemp_c;
    }

    async dayForecast(dataSelect) {
    //fazer logica de pegar as datas do usuario na previsao é no maximo 14 dias e passado preciso de parametros da data 
    //esse pega o passado const response = await fetch(`${this.#URL}${this.#history}?key=${this.#API_KEY}&q=${this.#city}&dt=${dataSelect}`);
    // para o passado usa return data.forecast.forecastday[0].day;
        const response = await fetch(`${this.#URL}${this.#forecast}?key=${this.#API_KEY}&q=${this.#city}&days=10`);
        const data = await response.json();
        console.log("esse log: ", data.forecast);
    //return data.forecast.forecastday[0].day.;
    }

    async chanceRain(){
        const data = await this.request();
        return data.forecast.forecastday[0].day.daily_chance_of_rain;
    }

    async windSpeed(){
        const data = await this.request();
        return data.forecast.forecastday[0].day.maxwind_kph;
    }

    async humidity(){
        const data = await this.request();
        return data.forecast.forecastday[0].day.avghumidity;
    }

}

// Exportando a instância apenas uma vez
export const weatherApi = new WeatherService();