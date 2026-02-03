//1. swap with extra varable

// let a = 10;
// let b = 20;
// let c;

// c = a; //copy of a (c= 10, a=10)
// a = b; //a=20, <- b=20
// b = c;

// console.log(a);//20
// console.log(b);//10

// 2.

// let a = 10;
// let b = 20;

// a = a + b;//a = 30
// b = a - b; //b = 10
// a = a - b;

// console.log(a, b);

//3.

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a, b);