// import using require

// declare class

// export class using module.exports
// new commit
import Shape from "./Shape";
export default class Circle extends Shape {
  constructor() {
    super();
  }
  calculateArea() {
    console.log("area of circle is: ");
    return 3.14 * 5 * 5;
  }
}
