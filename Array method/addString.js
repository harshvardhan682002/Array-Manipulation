// 8. *Question: Add a new string to the end of an array.*
//    - Example Question: Write a function to add the string 'grape' to the end of ['apple', 'orange', 'banana'].

function stringArray(arr , string){
    arr.push(string);
    return arr;
}
const originalString = ['apple', 'orange', 'banana'];
const newString = 'grape';
const newArray = stringArray(originalString, newString);
console.log(newArray);