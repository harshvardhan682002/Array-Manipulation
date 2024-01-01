// 12. *Question: Remove the last element from an array of numbers.*
//     - Example Question: Write a function that removes and returns the last element from [1, 2, 3, 4, 5].

function RemoveArray(arr,number){
    arr.pop(number);
    return arr;
    }
    const originalArray = [1, 2, 3, 4, 5];
    const numberToRemove = 5;
    
    const newArray = RemoveArray(originalArray, numberToRemove);
    console.log(newArray);
