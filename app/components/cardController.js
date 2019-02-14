import CardService from "./cardService.js";

let _cs = new CardService()

//public
export default class CardController {
    constructor() {
        console.log('controller built')
    }
}