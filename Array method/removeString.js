// 14. *Question: Remove the last string from an array of strings.*
//     - Example Question: Write a function to remove and return the last string from ['apple', 'orange', 'banana'].


function RemoveString(arr,string){
    arr.pop(string);
    return arr;
    }
    const originalArray = ['apple', 'orange', 'banana'];
    const numberToRemove = 'banana';
    
    const newArray = RemoveString(originalArray, numberToRemove);
    console.log(newArray);
