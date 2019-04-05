// 1. Copy and paste your prototype in here and refactor into class syntax.

/*
 * Creating the base class - CuboidMaker
 * Class Name - CuboidMaker
 * Params - dimensions - This is an object which has length, width and height
 * Methods - volume(), surfaceArea()
 */
class CuboidMaker {
  constructor(dimensions) {
    this.length = dimensions.length;
    this.width = dimensions.width;
    this.height = dimensions.height;
  }
  // Method - Volume() - Volume of the cuboid - formula - l * w * h
  volume() {
    return this.length * this.width * this.height;
  }

  // Method - Surface Area() - Surface area of the cuboid - formula - 2(l*w + l*h + w*h)
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}
const cuboid = new CuboidMaker({ length: 4, width: 5, height: 5 });
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(`CLASSES CHALLENGE :: Volume of the cuboid is ${cuboid.volume()}`); // 100
console.log(
  `CLASSES CHALLENGE :: Surface Area of the cuboid is ${cuboid.surfaceArea()}`
); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods
// using the dimension properties from CuboidMaker.
// Test your work by logging out your volume and surface area.

/*
 * Creating the child class - CubeMaker
 * Class Name - CubeMaker
 * Extends - CuboidMaker
 * Params - dimensions - This is an object which has length, width and height
 * Methods - surfaceArea()
 */
class CubeMaker extends CuboidMaker {
  constructor(dimensions) {
    super(dimensions);
  }

  // volume of a cube is the same formula as volume of a cuboid. Hence it will inherit from CuboidMaker

  // Method - surfaceArea() - Since the formula is different than the parent, CubeMaker has overwritten the parent function

  surfaceArea() {
    return 6 * (this.length * this.width);
  }
}

const cube = new CubeMaker({ length: 4, width: 4, height: 4 });
console.log(`CLASSES CHALLENGE :: Volume of the cube is ${cube.volume()}`);
console.log(
  `CLASSES CHALLENGE :: Surface Area of the cube is ${cube.surfaceArea()}`
);
