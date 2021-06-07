"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var circle = new Circle_1.Circle(5, 6, 8);
var rectangle = new Rectangle_1.Rectangle(1, 2, 3, 4);
var shapes = [];
shapes.push(circle, rectangle);
shapes.forEach(function (shape) { return console.log(shape.getInfo()); });
