//This javascript file runs a few tests on the 
//Vec2/Vec2b/Vec2s/Vec2f classes
//
//Author: Joshua Levine




function createVec2(n,data) {
  for (let i=0; i<n; i++) {
    let v = new Vec2f(data[2*i],data[2*i+1]);
  }
}

function addVec2(n,data) {
  for (let i=0; i<n; i++) {
    let v1 = new Vec2f(data[2*i],data[2*i+1]);
    let v2 = new Vec2f(data[2*i],data[2*i+1]);
    let v3 = v1.add(v2);
  }
}

function addSlowVec2(n,data) {
  for (let i=0; i<n; i++) {
    let v1 = new Vec2s(data[2*i],data[2*i+1]);
    let v2 = new Vec2s(data[2*i],data[2*i+1]);
    let v3 = v1.add(v2);
  }
}


n = 10000000;
let data = [];

for (let i=0; i<n; i++) {
  data.push(Math.random());
  data.push(Math.random());
}


console.time('createVec2');
createVec2(n,data);
console.timeEnd('createVec2');


console.time('addVec2');
addVec2(n,data);
console.timeEnd('addVec2');

console.time('addSlowVec2');
addSlowVec2(n,data);
console.timeEnd('addSlowVec2');



/*

let a = CreateVector(0,1);
let b = CreateVector(1,2);
let c = a.add(b);


let v0 = new Vec2(0,1);
let v1 = new Vec2(1,2);
let v2 = v0.add(v1);
*/


function addVec2(n) {
  for (let i=0; i<n; i++) {
    let a = CreateVector(Math.random(),Math.random());
    let b = CreateVector(Math.random(),Math.random());
    let c = a.add(b);
  }
}

function addVec2class(n) {
  for (let i=0; i<n; i++) {
    let a = new Vec2(Math.random(),Math.random());
    let b = new Vec2(Math.random(),Math.random());
    let c = a.add(b);
  }
}

function addVec2bclass(n) {
  for (let i=0; i<n; i++) {
    let a = new Vec2b(Math.random(),Math.random());
    let b = new Vec2b(Math.random(),Math.random());
    let c = a.add(b);
  }
}



let n = 1000000;

console.time('addVec2');
addVec2(n);
console.timeEnd('addVec2');

console.time('addVec2class');
addVec2class(n);
console.timeEnd('addVec2class');

console.time('addVec2bclass');
addVec2bclass(n);
console.timeEnd('addVec2bclass');*/
