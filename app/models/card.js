let id = 0



export default class Card {
    constructor(data) {
        this.id = id
        this.to = data.to
        this.from = data.from
        this.message = data.message
        id++
    }
}