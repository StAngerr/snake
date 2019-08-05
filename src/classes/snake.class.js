import {Directions} from "../game.controller";

export class Snake {
    radius;
    step;
    currentX = 10;
    currentY = 10;
    currentDirection = 'right';

    snakeBody = [];

    constructor(radius = 7) {
        this.radius = radius;
        this.step = radius * 2;
        this.snakeBody = [{
            part: 'head',
            x: this.currentX,
            y: this.currentY
        }];
    }

    draw = (context) => {
        const endAngle = 2 * Math.PI;
        this.snakeBody.forEach((bodyPart) => {
            context.beginPath();
            context.fillStyle = '#FF32CD';
            context.arc(bodyPart.x, bodyPart.y, this.radius, 0, endAngle);
            context.fill();
        });
    }

    move = (fieldWidth, fieldHeight) => {
        const minFieldValue = 0;
        let { x, y } = this.snakeBody[0];

        switch (this.currentDirection) {
            case 'right':
                x += this.step;
                if (x >= fieldWidth) {
                    x = this.radius;
                }
                this.moveSnakeHead({ x });
                break;
            case 'left':
                x -= this.step;
                if (x <= minFieldValue) {
                    x = fieldWidth - this.radius;
                }
                this.moveSnakeHead({ x });
                break;
            case 'up':
                y -= this.step;
                if (y <= minFieldValue) {
                    y = fieldHeight - this.radius;
                }
                this.moveSnakeHead({ y });
                break;
            case 'down':
                y += this.step;
                if (y >= fieldHeight) {
                    y = this.radius;
                }
                this.moveSnakeHead({ y });
                break;
        }
    }

    moveSnakeHead = (newCoordinates) => {
        const snakeHead = this.snakeBody[0];
        this.snakeBody[0] = {
            ...snakeHead,
            ...newCoordinates,
            prevX: snakeHead.x,
            prevY: snakeHead.y
        };
        this.adjustSnakeBody();

        this.currentY = this.snakeBody[0].y;
        this.currentX = this.snakeBody[0].x;
    }

    adjustSnakeBody = () => {
        this.snakeBody.forEach((snakePart, index, ar) => {
            if (index === 0) {
                return;
            }
            const { prevX, prevY } = ar[index - 1];
            ar[index] = {
                ...snakePart,
                x: prevX,
                y: prevY,
                prevY: ar[index].y,
                prevX: ar[index].x
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

    getHeadCoordinates() {
        return {
            x: this.currentX,
            y: this.currentY
        };
    }

    addPartToBody() {
        this.snakeBody.push({});
    }

    getRadius() {
        return this.radius;
    }
}
