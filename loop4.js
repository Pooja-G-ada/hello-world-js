const readline = require("readline-sync");

let a = parseInt(readline.question("Enter a number: "));

for (let i = 1; i <= a; i++){
    if( i % 3 == 0 && i % 5 == 0){
        console.log(`${i} FizzBuzz`);
    } else if (i % 5 == 0){
        console.log(`${i} Buzz`);
    } else if (i % 3 == 0){
        console.log(`${i} Fizz`);
    } 
 }