import { BLOCK_SIZE, HEIGHT, WIDTH } from "../Utils/Dimension";
import { CompoundGraphic, Graphic, Triangle } from "./Graphics";

const VerticalWalls = (width: number, height: number): Graphic => {
  const verticalWall = new CompoundGraphic();

  for (let i = 0; i < width; i++) {
    verticalWall.add(new Triangle(BLOCK_SIZE)
      .setCoordinate({ x: (i * BLOCK_SIZE), y: BLOCK_SIZE })
    );

    verticalWall.add(new Triangle(BLOCK_SIZE)
      .setCoordinate({ x: i * BLOCK_SIZE, y: height * BLOCK_SIZE })
    );
  }

  return verticalWall;
}

const HorizontalWalls = (width: number, height: number): Graphic => {
  const horizontalWalls = new CompoundGraphic();

  for (let i = 2; i < height; i++) {
    horizontalWalls.add(new Triangle(BLOCK_SIZE)
      .setCoordinate({ x: 0, y: i * BLOCK_SIZE }));

    horizontalWalls.add(new Triangle(BLOCK_SIZE)
      .setCoordinate({ x: (width - 1) * BLOCK_SIZE, y: i * BLOCK_SIZE }));
  }

  return horizontalWalls;
}

export const Frame = (): Graphic => {
  const frame = new CompoundGraphic();
  const numBlocksWidth = Math.floor(WIDTH / BLOCK_SIZE);
  const numBlocksHeight = Math.floor(HEIGHT / BLOCK_SIZE);

  frame.add(VerticalWalls(numBlocksWidth, numBlocksHeight));
  frame.add(HorizontalWalls(numBlocksWidth, numBlocksHeight))

  return frame;
}

