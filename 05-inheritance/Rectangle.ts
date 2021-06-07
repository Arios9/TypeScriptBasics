import { Perimeter } from "./perimeter";
import { Shape } from "./Shape";

export class Rectangle extends Shape implements Perimeter{

    constructor(_x: number, _y: number, private _height: number, private _width: number) {
        super(_x, _y);
    }

    public get height(): number{
        return this._height;
    }

    public set height(height: number) {
        this._height = height;
    }

    public get width(): number {
        return this._width;
    }

    public set width(width: number) {
        this._width = width;
    }

    getInfo(): string{
        return super.getInfo() + 
        ` height = ${this._height} width = ${this._width} area = ${this.getArea()} perimeter = ${this.getPerimeter()}`;
    }

    getArea(): number {
        return this._height * this._width;
    }

    getPerimeter(): number {
        return 2 * this._height + 2 * this._width;
    }

}