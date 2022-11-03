let n = 2;
let m = 5;
let min = Math.min(n, m);
let max = Math.max(n, m);
let minus = max - min;
let number = Math.floor(Math.random() * minus / 2) * 2 + 1;
console.log(number);