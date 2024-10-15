// from 100 to 999 - range 
// (sum = 1st digit cubed + 2nd digit cubed + 3rd digit cubed)
for ( let i = 100; i < 1000; i++){
    let iString = i.toString();
    let sum = (parseInt(iString[0])**3)+(parseInt(iString[1])**3)+(parseInt(iString[2])**3)
    // console.log(sum); 
   if( i == sum){
        console.log(`yes it is ${i} ${sum}`)
    } else {
        console.log("No this isn't");
    }
}
