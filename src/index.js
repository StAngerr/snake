import './styles/main.scss';

// import { Game } from "./controllers/game.controller";
import { AppRouter } from "./router";
// const field = window.document.getElementById('game-field');
// field.style.width = 450 + 'px';
// field.style.height = 450 + 'px';
// const context = field.getContext('2d');
// const newGame = new Game(context, field);
// newGame.startGame();

window.onload = () => {
  const routerContainer = document.getElementById('app-router');
  new AppRouter(routerContainer, 'login');
};