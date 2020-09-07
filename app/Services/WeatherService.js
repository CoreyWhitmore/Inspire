import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  changeMetric() {
    if (ProxyState.weather.isCelsius) {
      ProxyState.weather.isCelsius = false
    } else {
      ProxyState.weather.isCelsius = true
    }
  }
  async getWeather() {
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }
}

const weatherService = new WeatherService();
export default weatherService;