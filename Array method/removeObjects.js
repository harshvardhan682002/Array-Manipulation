// 16. *Question: Remove the last object from an array of objects.*
//     - Example Question: Write a function to remove and return the last object from [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }].



function RemoveObject(arr,object){
    arr.splice(-1);
    return arr;
    }
    const originalArray = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
    const numberToRemove =[{ name: 'Charlie' }];
    
    const newArray = RemoveObject(originalArray, numberToRemove);
    console.log(newArray);
