class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setWidth(width){
        this.width = width;
    }
    setHeight(height){
        this.height = height;
}
    getArea() {
        return this.width* this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
};

const myRectangle = new Rectangle(200,100);
console.log(`width: ${myRectangle.width}, height: ${myRectangle.height}`);
let width = myRectangle.getWidth();
let height = myRectangle.getHeight();
document.write(myRectangle.getWidth());

let canvas = document.createElement("canvas");
canvas.width = 400;
canvas.height = 400;
document.body.appendChild(canvas);
let ctx = canvas.getContext("2d");
ctx.fillStyle = '#3333';
ctx.fillRect(10,10, width, height);


