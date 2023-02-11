import { BLACK_COLOR } from "./Utils/Colors";
import { HEIGHT, WIDTH } from "./Utils/Dimension";

export class Canvas {
  private _canvas: HTMLCanvasElement;
  private _context: CanvasRenderingContext2D;

  public constructor() {
    this.createCanvas();
    this.clear();
  }

  private createCanvas() {
    this._canvas = <HTMLCanvasElement>document.createElement("canvas");
    this._context = <CanvasRenderingContext2D>this._canvas.getContext("2d");
    this._canvas.width = WIDTH;
    this._canvas.height = HEIGHT;
  }

  public get canvas(): HTMLCanvasElement {
    return this._canvas;
  }

  public get context(): CanvasRenderingContext2D {
    return this._context;
  }

  public clear() {
    this._context.fillStyle = BLACK_COLOR.text;
    this._context.fillRect(0, 0, WIDTH, HEIGHT);
  }
}
