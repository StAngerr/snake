import {Directions} from "../game.controller";

export class Snake {
    radius;
    step;
    currentX = 10;
    currentY = 10;
    currentDirection = 'right';

    snakeBody = [];

    constructor(radius = 10, step = 5) {
        this.radius = radius;
        this.step = step;
        this.snakeBody = [{
            part: 'head',
            x: this.currentX,
            y: this.currentY
        }, {x: 5, y: 10}, {x:0, y: 10}];
    }

    draw = (context) => {
        const startAngle = 0;
        const endAngle = 2 * Math.PI;
        context.beginPath();
        this.snakeBody.forEach((bodyPart) =>
          context.arc(bodyPart.x, bodyPart.y, this.radius, startAngle, endAngle));
        // context.arc(this.currentX, this.currentY, this.radius, startAngle, endAngle);
        context.fillStyle = '#FF32CD';
        context.fill();
    }

    move = (fieldWidth, fieldHeight) => {
        const minFieldValue = 0;
        let { x, y } = this.snakeBody[0];

        switch (this.currentDirection) {
            case 'right':
                //this.currentX += this.step;
                x += this.step;
                if (x >= fieldWidth) {
                    // this.currentX = this.radius;
                    x = this.radius;
                }
                this.moveSnakeHead({ x });
                break;
            case 'left':
                // this.currentX -= this.step;
                x -= this.step;
                if (x <= minFieldValue) {
                    // this.currentX = fieldWidth - this.radius;
                    x = fieldWidth - this.radius;
                }
                this.moveSnakeHead({ x });
                break;
            case 'up':
                // this.currentY -= this.step;
                y -= this.step;
                if (y <= minFieldValue) {
                    // this.currentY = fieldHeight - this.radius;
                    y = fieldHeight - this.radius;
                }
                this.moveSnakeHead({ y });
                break;
            case 'down':
                // this.currentY += this.step;
                y += this.step;
                if (y >= fieldHeight) {
                    // this.currentY = this.radius;
                    y = this.radius;
                }
                this.moveSnakeHead({ y });
                break;
        }
    }

    moveSnakeHead = (newCoordinates) => {
        this.adjustSnakeBody();
        this.snakeBody[0] = {
            ...this.snakeBody[0],
            ...newCoordinates
        };
        // this.adjustSnakeBody();
    }

    adjustSnakeBody = () => {
        this.snakeBody.forEach((snakePart, index, ar) => {
            if (index === 0) {
                return;
            }
            const { x, y } = ar[index - 1];
            ar[index] = {
                ...snakePart,
                x,
                y
            };
        });
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
