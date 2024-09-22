// swap value using global-temp variable 
let a = 10;
let b = 100;

let temp = a;
console.log('before swap', a, b)
a = b;
b = temp;
console.log('after swap', a, b)


// swap value using Destructuring

let x = 99;
let y = 66;

console.log(x, y);
[x, y] = [y, x];
console.log(x, y);

