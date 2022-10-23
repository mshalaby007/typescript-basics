class Point {

    constructor(private _x?: number, private _y?: number) {
    }

    draw() {
        console.log('X: ' + this._x + ' ,Y: ' + this._y);
    }

    getX() {
        return this._x
    }

    //properties used by seperating keyword set from field name
    set x(value) {
        if (value < 0) {
            throw new Error('Value cannot be less than zero');
        }
        this._x = value
    }

}

//object
let point = new Point(1, 2);
let x = point.x;
point.x = 10;

point.draw()
