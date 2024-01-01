// 9. *Question: Append multiple strings to an array.*
//    - Example Question: Given ['red', 'green', 'blue'], create a function that adds 'yellow' and 'orange' to the end of the array.

function stringArray(arr , string){
    arr.push(...string);
    return arr;
}
const originalString = ['red', 'green', 'blue'];
const newString = ['yellow','orange'];
const newArray = stringArray(originalString, newString);
console.log(newArray);