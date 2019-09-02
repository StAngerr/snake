export class Food {
    radius;
    eaten = true;
    foodX;
    foodY;

    constructor(radius = 5) {
        this.radius = radius;
    }

    appear = (x, y) => {
        this.foodX = x;
        this.foodY = y;
        this.eaten = false;
    }

    draw(context) {
        const startAngle = 0;
        const endAngle = 2 * Math.PI;
        context.beginPath();
        context.arc(this.foodX, this.foodY, this.radius, startAngle, endAngle);
        context.fillStyle = '#2169cc';
        context.fill();
    }

    getRadius() {
        return this.radius;
    }

    getCoordinates() {
        return {
            x: this.foodX,
            y: this.foodY
        };
    }
}
