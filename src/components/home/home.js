import { el, setChildren } from 'redom';
import { Navigation } from '../navigation/navigation';
import { SnakeGameField } from "../game-filed/snake-game-field";
import { Game } from "../../controllers/game.controller";
import { RenderComponent } from "../../classes/render-component";

export class Home extends RenderComponent {
    constructor() {
        super();
        this.render();
    }

    initElements() {
        this.gameFieldComponent = new SnakeGameField();
        this.startBtn = el('button', 'Start game');
        this.gameFieldContainer = el('div.game-field-container.container', this.gameFieldComponent);
        this.gameFieldTile = el('div.tile', [el('p.title', 'Welcome'), el('div.content',
                    [this.startBtn, el('div.game-field-container.container', this.gameFieldContainer)])]);
        this.homePageContainer = el('div.home-page.section',[new Navigation(), this.gameFieldTile]);
        return this.homePageContainer;
    }

    addEvents() {
        this.startBtn.addEventListener('click', this.startGame.bind(this));
    }

    startGame() {
        this.gameFieldComponent.startGame();
        setChildren(this.el, [new Navigation(), el('div.game-field-container.container', this.gameFieldComponent)]);
        const context = this.gameFieldComponent.el.getContext('2d');
        const newGame = new Game(context, {
            width: 500,
            height: 500
        });
        newGame.startGame();
    }
}
