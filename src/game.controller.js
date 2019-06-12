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
    this.setKeyboardEvents();
    this.interval = setInterval(() => {
      this.context.clearRect(0, 0, this.field.width, this.field.height);
      this.snake.draw(this.context);
      this.snake.move(this.field.width, this.field.height);
      this.generateFood();
    }, 100);
  }

  generateFood = () => {
    this.food.appear(this.context,
        generateRandom(0, this.field.width - this.food.getRadius()),
        generateRandom(0, this.field.height - this.food.getRadius()))
  }

  setKeyboardEvents() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = ({ key }) => {
    this.snake.changeDirection(key)
  }
}

