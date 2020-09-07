import { ProxyState } from "../AppState.js";


class DateService {
    getDate() {
        let date = new Date()
        ProxyState.time = date
    }

}

const dateService = new DateService();
export default dateService;