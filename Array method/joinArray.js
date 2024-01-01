
// ### join()
// #### Numeric Array
// 1. *Question: Convert an array of numbers to a string, separated by a dash (-).*
//    - Example Question: Given the array [1, 2, 3, 4, 5], create a function that returns a string with the numbers separated by a dash.

const numbers = [1,2,3,4,5];  
function arrayOfNumbers() {
    return numbers.join('-');
}
const strings = arrayOfNumbers(numbers);
console.log(strings);