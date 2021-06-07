import { Perimeter } from "./perimeter";
import { Shape } from "./Shape";

export class Circle extends Shape implements Perimeter{ 

    constructor(_x: number, _y: number, private _radius: number) {
        super(_x, _y);
    }
    
    get radius(): number{
        return this._radius;
    }

    set radius(radius: number) {
        this._radius = radius;
    }

    getInfo(): string{
        return super.getInfo() + 
        ` radius = ${this._radius} area = ${this.getArea()} perimeter = ${this.getPerimeter()}`;
    }

    getArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }

    getPerimeter(): number {
        return 2 * Math.PI * this._radius;
    }
}