
const Directions = {
  left: 'left',
  right: 'right',
  up: 'up',
  bottom: 'bottom'
}

export class Game {
  context = null;
  field = null;

  radius = 10;
  currentX = 10;
  currentY = 10;
  step = 5;
  currentDirection = 'right';

  interval = null;

  constructor(context, field) {
    this.context = context;
    this.field = field;
  }

  startGame = () => {
    this.setKeyboardEvents();
    this.interval = setInterval(() => {
      this.context.clearRect(0, 0, this.field.width, this.field.height);
      this.drawSnake();
      this.addStep();
    }, 100);
  }

  addStep() {
    switch (this.currentDirection) {
      case 'right':
        this.currentX += this.step;
        if (this.currentX >= this.field.width) {
          this.currentX = this.radius;
        }
        break;
      case 'left':
        this.currentX -= this.step;
        if (this.currentX <= 0) {
          this.currentX = this.field.width - this.radius;
        }
        break;
      case 'up':
        this.currentY -= this.step;
        if (this.currentY <= 0) {
          this.currentY = this.field.height - this.radius;
        }
        break;
      case 'down':
        this.currentY += this.step;
        if (this.currentY >= this.field.height) {
          this.currentY = this.radius;
        }
        break;
    }
  }

  drawSnake() {
    this.context.beginPath();
    this.context.arc(this.currentX, this.currentY, this.radius, 0 , 2 * Math.PI);
    // this.context.rect(this.currentX, this.currentY, 10, 10);
    this.context.fillStyle = '#FF32CD';
    this.context.fill();
  }

  setKeyboardEvents() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = ({ key }) => {
    switch (key) {
      case 'ArrowLeft':
        if (this.currentDirection !== Directions.left && this.currentDirection !== Directions.right ) {
          this.currentDirection = 'left';
        }
        break;
      case 'ArrowRight':
        if (this.currentDirection !== Directions.left && this.currentDirection !== Directions.right ) {
          this.currentDirection = 'right';
        }
        break;
      case 'ArrowUp':
        if (this.currentDirection !== Directions.up && this.currentDirection !== Directions.down ) {
          this.currentDirection = 'up';
        }
        break;
      case 'ArrowDown':
        if (this.currentDirection !== Directions.up && this.currentDirection !== Directions.down ) {
          this.currentDirection = 'down';
        }
        break;
      default:
    }
  }

}

