let id = 0

export default class Card {
    constructor(data) {
        this.id = data.id || id
        this.to = data.to
        this.from = data.from
        this.message = data.message
        id++
    }

    getTemplate() {
        return/*html*/ `
        <div class="col-3 text-center bg-dark text-danger shadow">
            <h4>To: ${this.to}</h4>
            <h4>From: ${this.from}</h4>
            <p>${this.message}</p>
            <button class="btn btn-outline-light bg-dark" id="reject" onclick="app.controllers.cardController.rejectLove(${this.id})">Reject</button>
        </div>`
    }
}