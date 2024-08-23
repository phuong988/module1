class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;

    }

    getRadius() {
        return this.radius;
    }

    getArea() {
        return 3.14 * this.radius * this.radius;
    }
};
let circle = new Circle(2);
let radius = circle.getRadius();
let area = circle.getArea();
alert("radius: " + radius + "; area: " + area);