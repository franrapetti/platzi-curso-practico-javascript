// const square = {
//     L : 
// }

const squareSide = 5;
const squarePerimeter = squareSide * 4;
const squareArea = squareSide * 5;

const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
const triangleArea = triangleSide1 * triangleBase;

console.group("Square")
console.log("The sides of the square are " + squareSide + "cm")
console.log("Perimeter = " +squarePerimeter + "cm")
console.log("Area = " + squareArea + "cm")
console.groupEnd()
