import Card from "../models/card.js";

let _state = {
    cards: [
        new Card({ to: 'D$', from: 'Spring19', message: 'Dear D$, we will never hug you, have fun fishing!' })
    ]
}


//public
export default class CardService {
    constructor() {
        console.log('card service built')

    }

    get Cards() {
        return _state.cards.map(card => new Card(card))
    }

}


