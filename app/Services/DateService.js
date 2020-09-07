import { ProxyState } from "../AppState.js";


class DateService {
    getDate() {
        let date = new Date()
        let time = date.toLocaleTimeString()
        ProxyState.time = time.toString()
    }

}

const dateService = new DateService();
export default dateService;