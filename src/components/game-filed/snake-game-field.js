import { el } from "redom";

export class SnakeGameField {
    constructor() {
        //<canvas id="game-field" class="game-field"  width="500" height="500"></canvas>
        this.el = el('h3', 'Start screen')
        this.el.addEventListener('click', this.startGame.bind(this))
    }

    startGame() {
        this.el = el('canvas#game-field.game-field', {
            width: 500,
            height: 500
        });
    }

}
