//Vec2f class made with ES6 syntax
//I have no claims that this is the fastest possible vector, but it
//appears most efficient on Chrome
//
//The constructor uses ...args to convert between a few possible types.
//In practice, it might be more to just have a clean constructor that
//only takes two arguments and then to separately code "converter"
//functions, e.g. "fromArray()".  But, I left this here to show the
//possibilities.
//
//Author: Josh Levine

class Vec2f {
  constructor(...args) {
    this.data = [0,0];
    if (args.length == 1) {
      if (Object.getPrototypeOf(args[0]) == Vec2f.prototype) {
        //console.log("Copy Constructor");
        this.data[0] = args[0].data[0];
        this.data[1] = args[0].data[1];
      } else if (Object.getPrototypeOf(args[0]) == Array.prototype) {
        //console.log("Array Constructor");
        if (args[0].length != 2) {
          //error
        } else {
          this.data[0] = args[0][0];
          this.data[1] = args[0][1];
        }
      } else {
        //error
      }
    } else {
      //console.log("Element-Wise Constructor");
      if (args.length == 2) {
        this.data[0] = args[0];
        this.data[1] = args[1];
      } else {
        //error
      }
    }
  }

  sum() {
    return this.data[0]+this.data[1];
  }

  squared_length() {
    return this.dot(this);
  }

  length() {
    return Math.sqrt(this.squared_length());
  }

  normalize() {
    let len = this.length();

    this.data[0] /= len;
    this.data[1] /= len;
  }

  normalized() {
    return this.scale(1.0/this.length());
  }


  add(v) {
    let out = Object.create(Vec2f.prototype);
    out.data = [0,0];
    out.data[0] = this.data[0] + v.data[0];
    out.data[1] = this.data[1] + v.data[1];

    return out;
  }

  scaleAdd(v,f) {
    let out = Object.create(Vec2f.prototype);
    out.data = [0,0];
    out.data[0] = this.data[0] + f*v.data[0];
    out.data[1] = this.data[1] + f*v.data[1];

    return out;
  }

  sub(v) {
    let out = Object.create(Vec2f.prototype);
    out.data = [0,0];
    out.data[0] = this.data[0] - v.data[0];
    out.data[1] = this.data[1] - v.data[1];

    return out;
  }

  negate() {
    let out = Object.create(Vec2f.prototype);
    out.data = [0,0];
    out.data[0] = -this.data[0];
    out.data[1] = -this.data[1];

    return out;
  }

  scale(f) {
    let out = Object.create(Vec2f.prototype);
    out.data = [0,0];
    out.data[0] = this.data[0] * f;
    out.data[1] = this.data[1] * f;

    return out;
  }



  dot(v) {
    let out = 0;
    out += this.data[0]*v.data[0];
    out += this.data[1]*v.data[1];
    
    return out;
  }

}
