// 11. *Question: Append multiple objects to an array of objects.*
//     - Example Question: Given an array [{ name: 'Alice' }], create a function to add objects { name: 'Bob' } and { name: 'Charlie' } to the array.

function addObject(arr, object){
    arr.push(...object);
    return arr;
}
const oldObjects = [{ name: 'Alice' }];
const newObject = [{ name: 'Charlie' },{ name: 'Bob' }];
const newArray = addObject(oldObjects,newObject);
console.log(newArray);
