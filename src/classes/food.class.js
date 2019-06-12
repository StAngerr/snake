export class Food {
    radius;

    constructor(radius = 5) {
        this.radius = 5;
    }

    appear = (context, x, y) => {
        context.beginPath();
        context.arc(x, y, this.radius, 0 , 2 * Math.PI);
        context.fillStyle = '#2169cc';
        context.fill();
    }

    getRadius() {
        return this.radius;
    }
}
