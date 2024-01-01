// 13. *Question: Retrieve and remove the last two elements from an array.*
//     - Example Question: Create a function to extract and remove the last two elements from [10, 20, 30, 40, 50].


function RemoveArray(arr,number){
    arr.splice(-2);
    return arr;
    }
    const originalArray = [10, 20, 30, 40, 50];
    const numberToRemove =[40, 50];
    
    const newArray = RemoveArray(originalArray, numberToRemove);
    console.log(newArray);
