class Canvas {
  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;

  public constructor() {
    this.createCanvas();
  }

  private createCanvas() {
    this.canvas = <HTMLCanvasElement>document.getElementById('game');
    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");

    console.log(this.canvas);
  }

}


new Canvas();
