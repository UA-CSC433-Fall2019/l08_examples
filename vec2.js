//This javascript file shows ES5 and ES6 class types
//Vec2 vs. Vec2b store memory differently
//All of these three options were skeletons from in-class, and as a
//result do not have the complete functionality of a 2D vector like the
//Vec2s and Vec2f classes
//
//Author: Joshua Levine




function CreateVector(x,y) {
  return {   
    x: x,
    y: y,

    add: function(v) {
      return CreateVector(this.x+v.x, this.y+v.y);
    },
  };
}


class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    return new Vec2(this.x+v.x,this.y+v.y);
  }
}


class Vec2b {
  constructor(x, y) {
    this.data = new Float32Array(2);
    this.data[0] = x;
    this.data[1] = y;
  }

  add(v) {
    return new Vec2b(this.data[0]+v.data[0],this.data[1]+v.data[1]);
  }
}

