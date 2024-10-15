const readline = require("readline-sync");

let a = readline.question("Do you want to count UP or DOWN?: ").toUpperCase();

if ( a == "UP"){
    let topNum = parseInt(readline.question("Enter a number: "));
    for (let i = 1; i <= topNum; i++){
        console.log(i);
    }
} else if ( a == "DOWN"){
    let downNum = parseInt(readline.question("Enter a number below 20: "));
    for (let i = downNum; i >= 1; i--){
        console.log(i);
    }
} else {
    console.log("I don't understand.");
}