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
  snakeSpeedMilisec = 30;
  context = null;
  field = null;
  snake;

  interval = null;

  constructor(context, field) {
    this.context = context;
    this.field = field;
    this.snake = new Snake();
    this.food = new Food(10);
  }

  startGame = () => {
    const startX = 0;
    const startY = 0;
    this.setKeyboardEvents();
    this.interval = setInterval(() => {
      this.context.clearRect(startX, startY, this.field.width, this.field.height);
      this.snake.draw(this.context);
      this.snake.move(this.field.width, this.field.height);
      if (this.checkFoodCollision()) {
        this.food.eaten = true;
        this.snake.addPartToBody();
      }
      if (this.food.eaten) {
        this.generateFood();
      } else {
        this.food.draw(this.context);
      }
    }, this.snakeSpeedMilisec);
  }

  generateFood = () => {
      const min = 0;
      const maxX = this.field.width - this.food.getRadius();
      const maxY = this.field.height - this.food.getRadius();
      this.food.appear(generateRandom(min, maxX), generateRandom(min, maxY));
  }

  checkFoodCollision = () => {
    return this.checkByX() && this.checkByY();
  }

  checkByY() {
    const snakeCoordinates = this.snake.getHeadCoordinates();
    const foodCoordinates = this.food.getCoordinates();
    const snakeRadius = this.snake.getRadius();
    const foodRadius = this.food.getRadius();
    const snakeBottomEdge = snakeCoordinates.y + snakeRadius;
    const snakeTopEdge = snakeCoordinates.y - snakeRadius;
    return (snakeBottomEdge >= foodCoordinates.y - foodRadius) && (snakeBottomEdge <= foodCoordinates.y + foodRadius) ||
    (snakeTopEdge >= foodCoordinates.y - foodRadius) && (snakeTopEdge <= foodCoordinates.y + foodRadius) ||
    (snakeCoordinates.y >= (foodCoordinates.y - foodRadius)) && (snakeCoordinates.y <= (foodCoordinates.y + foodRadius));
  }

  checkByX() {
    const snakeCoordinates = this.snake.getHeadCoordinates();
    const foodCoordinates = this.food.getCoordinates();
    const snakeRadius = this.snake.getRadius();
    const foodRadius = this.food.getRadius();
    const snakeLeftEdge = snakeCoordinates.x - snakeRadius;
    const snakeRightEdge = snakeCoordinates.x + snakeRadius;
    return (snakeLeftEdge >= foodCoordinates.x - foodRadius) && (snakeLeftEdge <= foodCoordinates.x + foodRadius) ||
    (snakeRightEdge >= foodCoordinates.x - foodRadius) && (snakeRightEdge <= foodCoordinates.x + foodRadius) ||
    (snakeCoordinates.x >= (foodCoordinates.x - foodRadius)) && (snakeCoordinates.x <= (foodCoordinates.x + foodRadius));
  }

  setKeyboardEvents() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = ({ key }) => {
    this.snake.changeDirection(key);
  }
}

