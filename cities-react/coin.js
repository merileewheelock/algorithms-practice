function getChange(price){

var quarter = 25;
var dime = 10;
var nickel = 5;
var penny = 1;


var remaining_cost = 0;
var remainder = 0;

var numberOfQuarters = 0;
var numberOfDimes = 0;
var numberOfNickels = 0;
var numberOfPennies = 0;

numberOfQuarters = parseInt(price/quarter);
remaining_cost = price % quarter;

numberOfDimes = parseInt(remaining_cost / dime);
remaining_cost = remaining_cost % dime;

numberOfNickels = parseInt(remaining_cost / nickel);
remaining_cost = remaining_cost % nickel;

numberOfPennies = remaining_cost / penny;

return {quarters: numberOfQuarters, dimes: numberOfDimes,
		nickels: numberOfNickels, pennies: numberOfPennies}
}

console.log(getChange(999));
