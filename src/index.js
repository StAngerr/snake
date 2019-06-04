
import './styles/main.scss';

import { Game } from "./game.controller";

const field = document.getElementById('game-field');
// field.style.width = 450 + 'px';
// field.style.height = 450 + 'px';


const context = field.getContext('2d');

const newGame = new Game(context, field);

newGame.startGame();





