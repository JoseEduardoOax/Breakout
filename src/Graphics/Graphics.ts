import { RED_COLOR } from "../Utils/Colors";
import { Color } from "../Utils/Color";

export interface Graphic {
  move(coordinate: ICoordinate): void;
  draw(context: CanvasRenderingContext2D): void;
}

export interface ICoordinate {
  x: number;
  y: number;
}

export interface ICanvasProperties {
  color: Color;
}

const defaultCanvasProperties: Pick<ICanvasProperties, 'color'> = {
  color: RED_COLOR
}

const defaultCoordinate: Pick<ICoordinate, 'x' | 'y'> = {
  x: 0, y: 0
};

export abstract class Dot implements Graphic {
  protected canvasProperties: ICanvasProperties;
  protected coordinate: ICoordinate;

  constructor() {
    this.canvasProperties = { ...defaultCanvasProperties }
    this.coordinate = { ...defaultCoordinate };
  }

  public setCoordinate(coordinate: ICoordinate): Dot {
    this.coordinate = { ...coordinate }
    return this;
  }

  public setCanvasProperties(canvasProperties: ICanvasProperties): Dot {
    this.canvasProperties = { ...canvasProperties }
    return this;
  }

  move(coordinate: ICoordinate): void {
    this.coordinate.x += coordinate.x;
    this.coordinate.y += coordinate.y;
  }

  abstract draw(context: CanvasRenderingContext2D): void;
}

export class CompoundGraphic implements Graphic {
  private children: Graphic[];

  constructor() {
    this.children = [];
  }

  public add(child: Graphic): void {
    this.children.push(child);
  }

  public remove(child: Graphic): void {
    this.children = this.children.filter(element => element !== child);
  }

  move(coordinate: ICoordinate): void {
    this.children.forEach(child => child.move(coordinate));
  }

  draw(context: CanvasRenderingContext2D): void {
    this.children.forEach(child => child.draw(context))
  }
}

export class Circle extends Dot {
  private _radius: number;

  constructor(radius: number) {
    super();
    this._radius = radius;
  }

  draw(context: CanvasRenderingContext2D): void {
    const { x, y } = this.coordinate;
    const { color } = this.canvasProperties;

    context.beginPath();
    context.arc(x, y, this._radius, 0, 2 * Math.PI);

    context.fillStyle = color.text;
    context.fill();
  }
}

export class Triangle extends Dot {
  private _length: number;

  constructor(length: number) {
    super();
    this._length = length;
  }

  draw(context: CanvasRenderingContext2D): void {
    const { x, y } = this.coordinate;
    const { color } = this.canvasProperties;

    context.beginPath();
    context.moveTo(x, y);
    context.lineTo((x + this._length), y);
    context.lineTo((x + (this._length / 2)), y - this._length);
    context.closePath();

    context.fillStyle = color.text;
    context.fill();
  }
}

