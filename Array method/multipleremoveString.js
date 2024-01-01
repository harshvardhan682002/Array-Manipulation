// 15. *Question: Retrieve and remove the last two strings from an array.*
//     - Example Question: Create a function that extracts and removes the last two strings from ['red', 'green', 'blue', 'yellow', 'orange'].

function RemoveString(arr,string){
    arr.splice(-2);
    return arr;
    }
    const originalArray = ['red', 'green', 'blue', 'yellow', 'orange'];
    const numberToRemove = ['yellow', 'orange'];
    
    const newArray = RemoveString(originalArray, numberToRemove);
    console.log(newArray);
