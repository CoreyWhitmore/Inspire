import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";

//NOTE The quote service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawQuote() {
    document.getElementById("quote").innerHTML = ProxyState.quote.Template
}
export default class QuoteController {
    constructor() {
        ProxyState.on("quote", drawQuote);
        this.getQuote()
    }

    getQuote() {
        try {
            quoteService.getQuote()
        }
        catch (e) {
            console.error(e)
        }
    }
}