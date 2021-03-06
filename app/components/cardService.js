import Card from "../models/card.js";

let _state = {
    cards: [
        new Card({ to: 'D$', from: 'Spring19', message: 'Dear D$, we will never hug you, have fun fishing!' })
    ]
}

let _subscribers = {
    cards: []
}

function setState(dataName, val) {
    _state[dataName] = val
    _subscribers[dataName].forEach(fn => fn())
}

//public
export default class CardService {
    constructor() {
        console.log('card service built')
    }

    get Cards() {
        return _state.cards.map(card => new Card(card))
    }

    addSubscriber(dataName, fn) {
        _subscribers[dataName].push(fn)
    }

    addCard(newCard) {
        let card = new Card(newCard)
        let updatedCards = this.Cards
        updatedCards.push(card)
        setState('cards', updatedCards)
    }
    rejectLove(id) {
        let updatedCards = this.Cards
        for (let i = 0; i < updatedCards.length; i++) {
            let card = updatedCards[i]
            if (card.id == id) {
                updatedCards.splice(i, 1)
                break
            }
        }
        setState('cards', updatedCards)
    }

}


