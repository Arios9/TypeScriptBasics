import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let circle = new Circle(5,6,8);
let rectangle = new Rectangle(1,2,3,4);

let shapes: Shape[] = [];
shapes.push(circle, rectangle);
shapes.forEach(shape => console.log(shape.getInfo()));


