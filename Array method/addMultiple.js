
// 7. *Question: Append multiple numbers to an array.*
//    - Example Question: Given an array [10, 20, 30], create a function to add numbers 40, 50, and 60 to the end of the array.

function multipleArray(arr , number){
    arr.push(...number);
    return arr;
}
const originalArray = [10,20,30];
const numberToAdd = [40,50,60];
const newArray = multipleArray(originalArray, numberToAdd);
console.log(newArray);