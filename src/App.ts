import { Canvas } from "./Canvas";
import { Scene } from "./Graphics/Scene";

const canvas = new Canvas();
const scene = new Scene();

let secondsPassed: number;
let oldTimeStamp: number;
let fps: number;

document.body.appendChild(canvas.canvas);

const gameLoop = (timeStamp: number) => {
  secondsPassed = (timeStamp - oldTimeStamp) / 1000;
  oldTimeStamp = timeStamp;

  const context = canvas.context;

  // calculate fps
  fps = Math.round(1 / secondsPassed);

  canvas.clear();

  scene.draw(canvas.context);


  context.font = '25px Arial';
  context.fillStyle = 'white';
  context.fillText("FPS: " + fps, 50, 50);

  window.requestAnimationFrame(gameLoop);
}

const init = () => {
  window.requestAnimationFrame(gameLoop);
}

window.onload = init;


