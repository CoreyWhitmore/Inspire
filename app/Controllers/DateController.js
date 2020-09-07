import { ProxyState } from "../AppState.js";
import dateService from "../Services/DateService.js";


function drawDate() {
    dateService.getDate()
    document.getElementById("clock").innerHTML = ProxyState.time
}
export default class DateController {
    constructor() {
        this.getDate()
        setInterval(function () { drawDate() }, 1000);
    }

    getDate() {
        try {
            dateService.getDate()
        }
        catch (e) {
            console.error(e)
        }
    }
}
