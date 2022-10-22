//interfaces
//object literal 
//point: { x: number, y: number }

// //inline annotation 
// let drawPoint = (point: { x: number, y: number }) => {
//     // ...
// }


interface Point {
    x: number,
    y: number
    draw: () => void
}

//inline annotation 
let drawPoint = (point: Point) => {
    // ...
}

// drawPoint({
//     x: 1,
//     y: 2
// })
