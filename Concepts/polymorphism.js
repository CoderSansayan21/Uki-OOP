class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return (Math.PI * this.radius * this.radius).toFixed(2);
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
}

const shapes = [new Circle(5), new Square(4)];

shapes.forEach(shape => {
  console.log("Area: " + shape.area());
});
// Area: 78.54
// Area: 16