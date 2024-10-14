const readline = require("readline-sync");
let userInteger= parseInt(readline.question("Enter an integer: "));

if (userInteger < 0 ) {
    console.log(`your input ${userInteger} is negative`)
} else if (userInteger > 0) {
    console.log(`your input ${userInteger} is positive`)
} else {
    console.log(`your input is zero`)
}