import CardService from "./cardService.js";

let _cs = new CardService()

function draw() {
    let template = '';
    let cards = _cs.Cards
    cards.forEach(card => {
        template += card.getTemplate();
    })
    document.getElementById('cards').innerHTML = template;
}

//public
export default class CardController {
    constructor() {
        console.log('controller built')
    }
}