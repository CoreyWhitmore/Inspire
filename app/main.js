import TodoController from "./controllers/TodoController.js";
import WeatherController from "./controllers/WeatherController.js";
import ImageController from "./Controllers/ImageController.js"
import QuoteController from "./Controllers/QuoteController.js";
import DateController from "./Controllers/DateController.js"


//TODO Dont forget to register all your controllers	
class App {
  constructor() {
    this.imageController = new ImageController();
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
    this.quoteController = new QuoteController()
    this.dateController = new DateController()
  }
}


window["app"] = new App();