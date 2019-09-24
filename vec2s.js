//Vec2s class made with ES6 syntax
//I have no claims that this is optional possible vector, but it
//appears less efficient on Chrome than Vec2f than storing a data array
//
//The constructor uses ...args to convert between a few possible types.
//In practice, it might be more to just have a clean constructor that
//only takes two arguments and then to separately code "converter"
//functions, e.g. "fromArray()".  But, I left this here to show the
//possibilities.
//
//Author: Josh Levine


class Vec2s {
  constructor(...args) {
    if (args.length == 1) {
      if (Object.getPrototypeOf(args[0]) == Vec2s.prototype) {
        //console.log("Copy Constructor");
        this.x = args[0].x;
        this.y = args[0].y;
      } else if (Object.getPrototypeOf(args[0]) == Array.prototype) {
        //console.log("Array Constructor");
        if (args[0].length != 2) {
          //error
        } else {
          this.x = args[0][0];
          this.y = args[0][1];
        }
      } else {
        //error
      }
    } else {
      //console.log("Element-Wise Constructor");
      if (args.length == 2) {
        this.x = args[0];
        this.y = args[1];
      } else {
        //error
      }
    }
  }

  sum() {
    return this.x+this.y;
  }

  squared_length() {
    return this.dot(this);
  }

  length() {
    return Math.sqrt(this.squared_length());
  }

  normalize() {
    let len = this.length();

    this.x /= len;
    this.y /= len;
  }

  normalized() {
    return this.scale(1.0/this.length());
  }


  add(v) {
    let out = Object.create(Vec2s.prototype);
    out.x = this.x + v.x;
    out.y = this.y + v.y;

    return out;
  }

  scaleAdd(v,f) {
    let out = Object.create(Vec2s.prototype);
    out.x = this.x + f*v.x;
    out.y = this.y + f*v.y;

    return out;
  }

  sub(v) {
    let out = Object.create(Vec2s.prototype);
    out.x = this.x - v.x;
    out.y = this.y - v.y;

    return out;
  }

  negate() {
    let out = Object.create(Vec2s.prototype);
    out.x = -this.x;
    out.y = -this.y;

    return out;
  }

  scale(f) {
    let out = Object.create(Vec2s.prototype);
    out.x = this.x * f;
    out.y = this.y * f;

    return out;
  }



  dot(v) {
    let out = 0;
    out += this.x*v.x;
    out += this.y*v.y;
    
    return out;
  }

}
