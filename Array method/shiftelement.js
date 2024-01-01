// 18. *Question: Remove the first element from an array of numbers.*
//     - Example Question: Write a function to remove and return the first element from [1, 2, 3, 4, 5].

function shiftArray(arr,number){
    arr.shift(number);
    return arr;
    }
    const originalArray = [1, 2, 3, 4, 5];
    const numberToRemove = 1;
    
    const newArray = shiftArray(originalArray, numberToRemove);
    console.log(newArray);