// 19. *Question: Retrieve and remove the first two elements from an array.*
//     - Example Question: Create a function that extracts and removes the first two elements from [10, 20, 30, 40, 50].

function shiftArray(arr,number){
    arr.shift();
    return arr;
    }
    const originalArray = [10, 20, 30, 40, 50];
    const numberToRemove = [10,20];
    
    const newArray = shiftArray(originalArray, numberToRemove);
    console.log(newArray);