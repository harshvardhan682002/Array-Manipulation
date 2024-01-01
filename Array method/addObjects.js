// 10. *Question: Add a new object to an array of objects.*
//     - Example Question: Write a function that appends the object { name: 'Charlie' } to the array [{ name: 'Alice' }, { name: 'Bob' }].

function addObject(arr, object){
    arr.push(object);
    return arr;
}
const oldObjects = [{ name: 'Alice' }, { name: 'Bob' }];
const newObject = { name: 'Charlie' };
const newArray = addObject(oldObjects,newObject);
console.log(newArray);
