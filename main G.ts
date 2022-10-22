class Point {
    x: number;
    y: number;

    //? makes a parem optional
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ' ,Y: ' + this.y);
    }


}

//object
let point = new Point();

point.x = 4
point.y = 5
point.draw();


