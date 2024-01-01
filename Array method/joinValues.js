// *Question: Join values of a specific property from an array of objects.*
//    - Example Question: If you have an array of objects [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }], write a function to extract and concatenate the names into a string.

function joinValues(arr, prop) {
    return arr.map(obj => obj[prop]).join(' ');
}
const details = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
const joinNames = joinValues(details, 'name');
console.log(joinNames);