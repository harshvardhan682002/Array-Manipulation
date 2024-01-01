// . *Question: Combine an array of file extensions into a single string.*
//    - Example Question: Given ['.jpg', '.png', '.gif', '.svg'], create a function to concatenate these file extensions into a single string.

function singleString(extensions){
    return extensions.join(' ');
}
const single =['.jpg', '.png', '.gif', '.svg'];
const strings = singleString(single);
console.log(strings);