// declare class

// export class using module.exports
// new commit

export default class Shape {
  constructor() {
    this.color = "red";
  }
  drawShape() {
    console.log("shape is the required shape");
  }
  calculateArea() {
    console.log("don't know the area of unknown shape");
    return 0;
  }
}
