import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//TODO Complete rendering data to the screen
function drawWeather() {
  document.getElementById('weather').innerHTML = ProxyState.weather.Template
}

export default class WeatherController {
  constructor() {
    ProxyState.on("weather", drawWeather);
    this.getWeather()
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }

  changeMetric() {
    weatherService.changeMetric()
    drawWeather()
  }
}
