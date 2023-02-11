export class Color {
  private _R: number;
  private _G: number;
  private _B: number;

  constructor(R: number, G: number, B: number) {
    this._R = this.setValue(R);
    this._G = this.setValue(G);
    this._B = this.setValue(B);
  }

  get R() {
    return this._R;
  }

  get G() {
    return this._G;
  }

  get B() {
    return this._B;
  }

  private setValue(value: number) {
    return Math.floor(Math.min(255, Math.max(value, 0)));
  }

  get text(): string {
    return `rgb(${this._R}, ${this._G}, ${this._B})`;
  }
}
