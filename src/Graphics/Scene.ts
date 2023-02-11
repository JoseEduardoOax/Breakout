import { CompoundGraphic, ICoordinate, Graphic } from "./Graphics"; import { Frame } from "./Frame";

export class Scene implements Graphic {
  private arrayOfGraphic: CompoundGraphic;

  constructor() {
    const frame = Frame();
    this.arrayOfGraphic = new CompoundGraphic();
    this.arrayOfGraphic.add(frame);
  }

  move = (coordinate: ICoordinate): void => this.arrayOfGraphic.move(coordinate);

  draw = (context: CanvasRenderingContext2D): void => this.arrayOfGraphic.draw(context);
}

