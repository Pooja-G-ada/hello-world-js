let year = 2023; 
let UKPopulation = 67765900;
let increaseRateOfPopulation = 0.003;

while ( UKPopulation < 80000000) {
    UKPopulation = Math.round(UKPopulation * (1 + increaseRateOfPopulation));
    year += 1
    console.log(`${UKPopulation} ${year}`);
}