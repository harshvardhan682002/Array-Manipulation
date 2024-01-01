// 3. *Question: Join an array of strings into a sentence.*
//    - Example Question: You have an array ['Hello', 'world', 'from', 'JavaScript']. Write a function that combines these words into a sentence.

function stringToSentence(){
    return sentence.join(' ');
}
const sentence = ['Hello', 'world', 'from', 'JavaScript'];
const strings = stringToSentence(sentence);
console.log(strings);