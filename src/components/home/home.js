import { el, setChildren } from 'redom';
import { Navigation } from '../navigation/navigation'
import { SnakeGameField } from "../game-filed/snake-game-field";
import { Game } from "../../controllers/game.controller";

export class Home {
    constructor() {
        this.gameFieldComponent = new SnakeGameField();
        this.startBtn = el('button', 'Start game');
        this.startBtn.addEventListener('click', this.startGame.bind(this))
        this.el = el('div.home-page',
            [new Navigation(), this.startBtn, el('div.game-field-container', this.gameFieldComponent)]);
    }

    startGame() {
        this.gameFieldComponent.startGame();
        setChildren(this.el, [new Navigation(), el('div.game-field-container', this.gameFieldComponent)])
        const context = this.gameFieldComponent.el.getContext('2d');
        const newGame = new Game(context, {
            width: 500,
            height: 500
        });
        newGame.startGame();
    }
}
