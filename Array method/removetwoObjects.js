
// 17. *Question: Retrieve and remove the last two objects from an array of objects.*
//     - Example Question: Create a function to extract and remove the last two objects from an array of persons: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]


function RemoveObject(arr,object){
    arr.splice(-2);
    return arr;
    }
    const originalArray = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]
    const numberToRemove =[{ name: 'Charlie', age: 35}];
    
    const newArray = RemoveObject(originalArray, numberToRemove);
    console.log(newArray);