const myNumers = [1,2,3,4,5,6,7,8,9,10];
const newNums=myNumers.map  ((num) => { return num + 10})
const newNums = myNumers
                .map((num) => num * 10)
                .map((num) => num + 1)
console.log(newNums);

//1

const numbers = [1,4,2,8];
const myNUms = numbers.map((num) => {return num*2})
console.log(myNUms);

//2

const names = ["Alice", "Bob", "Charlie"];
const myName = names.map((nam) => {return nam.toUpperCase()})
console.log(myName);

//3

const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 }
];
const myName = users.map((nam) => {return nam.name})
console.log(myName); 

//4

const firstNames = ["John", "Jane"];
const lastNames = ["Doe", "Smith"];
const myName = firstNames.map((firstName,index) => firstName + " " + lastNames[index]);
console.log(myName);

//5

const strings = ["hello", "world", "JavaScript"];
const myName = strings.map((size) => size.length);
console.log(myName);

//6

const prices = [12.99, 19.95, 35.50];
const money = prices.map((curr)=> `$${curr.toFixed(2)}`);
console.log(money);

//7

const numbers = [1, 2, 3, 4, 5];
const square = numbers.map((num)=> num ** 2);
console.log(square);

//8

const count = 10;
const arrayOfNymbers = Array.from({length: count}, () => Math.random());
console.log(arrayOfNymbers);

//9

const items = ["apple", "banana", "orange"];
const listItems = items.map(item => `<li>${item}</li>`);
console.log(listItems);

