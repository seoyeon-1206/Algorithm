const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const cows = input
    .splice(1)
    .map((row) => row.split(' ').map((value) => Number(value)));


console.log(n)
console.log(cows)
