// *Question: Add a new number to the end of an array.*
//    - Example Question: Write a function that appends a given number to the end of an array, e.g., [1, 2, 3, 4, 5] becomes [1, 2, 3, 4, 5, 6].

function addArray(arr,number){
arr.push(number);
return arr;
}
const originalArray = [1, 2, 3, 4, 5];
const numberToAdd = 6;

const newArray = addArray(originalArray, numberToAdd);
console.log(newArray);
