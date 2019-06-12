import {Directions} from "../game.controller";

export class Snake {
    radius;
    step;
    currentX = 10;
    currentY = 10;
    currentDirection = 'right';

    constructor(radius = 10, step = 5) {
        this.radius = radius;
        this.step = step;
    }

    draw = (context) => {
        context.beginPath();
        context.arc(this.currentX, this.currentY, this.radius, 0 , 2 * Math.PI);
        context.fillStyle = '#FF32CD';
        context.fill();
    }

    move = (fieldWidth, fieldHeight) => {
        switch (this.currentDirection) {
            case 'right':
                this.currentX += this.step;
                if (this.currentX >= fieldWidth) {
                    this.currentX = this.radius;
                }
                break;
            case 'left':
                this.currentX -= this.step;
                if (this.currentX <= 0) {
                    this.currentX = fieldWidth - this.radius;
                }
                break;
            case 'up':
                this.currentY -= this.step;
                if (this.currentY <= 0) {
                    this.currentY = fieldHeight - this.radius;
                }
                break;
            case 'down':
                this.currentY += this.step;
                if (this.currentY >= fieldHeight) {
                    this.currentY = this.radius;
                }
                break;
        }
    }

    changeDirection = (key) => {
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
