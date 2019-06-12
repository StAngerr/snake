import { Snake } from "./classes/snake.class";
import { Food } from "./classes/food.class";
import { generateRandom } from "./utils";

export const Directions = {
  left: 'left',
  right: 'right',
  up: 'up',
  bottom: 'bottom'
};

export class Game {
  snakeSpeedMilisec = 100;
  context = null;
  field = null;
  snake;

  interval = null;

  constructor(context, field) {
    this.context = context;
    this.field = field;
    this.snake = new Snake();
    this.food = new Food();
  }

  startGame = () => {
    const startX = 0;
    const startY = 0;
    this.setKeyboardEvents();
    this.interval = setInterval(() => {
      this.context.clearRect(startX, startY, this.field.width, this.field.height);
      this.snake.draw(this.context);
      this.snake.move(this.field.width, this.field.height);
      this.generateFood();
    }, this.snakeSpeedMilisec);
  }

  generateFood = () => {
    const min = 0;
    const maxX = this.field.width - this.food.getRadius();
    const maxY = this.field.height - this.food.getRadius();
    this.food.appear(this.context, generateRandom(min, maxX), generateRandom(min, maxY));
  }

  setKeyboardEvents() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = ({ key }) => {
    this.snake.changeDirection(key)
  }
}

