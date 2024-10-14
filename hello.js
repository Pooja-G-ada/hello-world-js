// console.log("Hello World!!");
// console.log("Hello Pooja!");
// node hello.js
const readline = require("readline-sync");
let userAge = readline.question("Enter your age");

let age = parseInt(userAge);
let numberOfYears = 5;

// function futureAge( age, numberOfYears) {
//     return age + numberOfYears
// }


numberOfYears = 10;
let futureAge = age + numberOfYears; 
numberOfYears = 20;
futureAge = age + numberOfYears; 
console.log(futureAge);

let retirementAge = 67 
let yearsTillRetirement = retirementAge - age;
// console.log(`${yearsTillRetirement}`)