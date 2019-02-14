import CardController from "./components/cardController.js";


class App {
    constructor() {
        this.controllers = {
            cardController: new CardController()
        }
    }
}

window['app'] = new App()