const readline = require("readline-sync");

let a = parseInt(readline.question("Enter a negative number: "));
let sum = 0;
while( a >= 0){
    sum += a;
    a = parseInt(readline.question("Number you entered is not negative, please enter a negative number: "));
}   
sum +=a
console.log(`${sum} = sum of the numbers that you entered.`);

// let sum = 0;
// let conditionForLoop = true;
// while( conditionForLoop == true){
//     if ( a < 0){
//         sum += a;
//         conditionForLoop == false;
//         console.log(`${sum} negative`);
//         break
//     } else {
//         sum += a;
//         a = parseInt(readline.question("Number you entered is not negative, please enter a negative number: "));
//     }
// }
