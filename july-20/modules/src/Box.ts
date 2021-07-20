export interface iBoxProperties {
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
}
interface iDrawable{
    draw(CanvasRenderingContext2D): CanvasRenderingContext2D
}
export class Box implements iDrawable{
    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }

    get w(): number {
        return this._w;
    }

    set w(value: number) {
        this._w = value;
    }

    get h(): number {
        return this._h;
    }

    set h(value: number) {
        this._h = value;
    }
    private _x: number;
    private _y: number;
    private _w: number;
    private _h: number;
    private _fill: string;

    private static instance: Box;
    private constructor(props:iBoxProperties) {
        this._x = props.x;
        this._y = props.y;
        this._w = props.width;
        this._h = props.height;
        this._fill = props.color;
    }

    public static getInstance(): Box {
        if(!Box.instance) {
            Box.instance = new Box({x:0, y:0, width:0, height:0, color: "red"});
        }
        return Box.instance;
    }

    draw(ctx: CanvasRenderingContext2D): CanvasRenderingContext2D {
        ctx.fillStyle = this._fill;
        ctx.beginPath();
        ctx.rect(this._x, this._y, this._w, this._h);
        ctx.fill();
        ctx.closePath();
        return ctx;
    }
}