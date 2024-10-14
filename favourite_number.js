const readline = require("readline-sync");
const computerFavouriteNumber = 7
let userName= readline.question("Enter your Name: ");
let userFavouriteNumber = parseInt(readline.question("Enter your favourite number: "));

if (userFavouriteNumber === computerFavouriteNumber) {
    console.log(`Hi ${userName}, That's my favourite number as well`)
} else {
    console.log(`Hi ${userName}`)
}