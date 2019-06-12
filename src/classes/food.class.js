export class Food {
    radius;

    constructor(radius = 5) {
        this.radius = radius;
    }

    appear = (context, x, y) => {
        const startAngle = 0;
        const endAngle = 2 * Math.PI;

        context.beginPath();
        context.arc(x, y, this.radius, startAngle, endAngle);
        context.fillStyle = '#2169cc';
        context.fill();
    }

    getRadius() {
        return this.radius;
    }
}
