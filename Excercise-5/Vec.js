class Vec {
  constructor(x, y) {
    this.X = x;
    this.Y = y;
  }

  get X() {
    return this.X;
  }

  get Y() {
    return this.Y;
  }

  set X(value) {
    this.X = value;
  }

  set Y(value) {
    this.Y = value;
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

Vec.prototype.minus = function (vector) {
  let newX = Math.abs(this.X - vector.X);
  let newY = Math.abs(this.Y - vector.Y);
  return new Vec(newX, newY);
};

Vec.prototype.plus = function (vector) {
  let newX = this.X + vector.X;
  let newY = this.Y + vector.Y;
  return new Vec(newX, newY);
};
