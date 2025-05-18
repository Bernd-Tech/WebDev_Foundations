/*
// prompt() is giving the user instructions when page loads
// For reference look at: https://developer.mozilla.org/de/docs/Web/API/Window/prompt
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

console.log(typeof num1, typeof num2);

 
 All values entered in an input element have the datatype of "string"
 - Therfore string value needs to be coverted into number value with parseFloat() for operations


num1 = parseFloat(num1);
num2 = parseFloat(num2);

// prints the datatype of selected value into the console
console.log(typeof num1, typeof num2);

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
const module = num1 % num2;


console.log(`Sum: ${sum}`)
console.log(`Difference: ${difference}`)
console.log(`Product: ${product}`)
console.log(`Quotient: ${quotient}`)
console.log(`Remainder: ${module}`)
*/


