import CardService from "./cardService.js";

let _cs = new CardService()

function draw() {
    let template = '';
    let cards = _cs.Cards
    cards.forEach(card => {
        template += card.getTemplate();
    })
    document.querySelector('#cards').innerHTML = template;
}

//public
export default class CardController {
    constructor() {
        console.log('controller built')
        _cs.addSubscriber('cards', draw)
        draw()
    }

    addCard(event) {
        event.preventDefault();
        let form = event.target
        let newCard = {
            to: form.to.value,
            from: form.from.value,
            message: form.message.value
        }
        _cs.addCard(newCard)
        form.reset()
    }
    rejectLove(id) {
        _cs.rejectLove(id)
    }
}