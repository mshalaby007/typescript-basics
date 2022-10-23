class Point {

    //? makes a parem optional
    // always add an acess mod when writing code like this
    constructor(private x?: number, private y?: number) {
    }

    draw() {
        console.log('X: ' + this.x + ' ,Y: ' + this.y);
    }


}

//object
let point = new Point(1, 2);
point.draw()
