const myNums = [1,2,3,4,5,6,7,8];
const newNums = myNums.filter((num) => num > 3)
console.log(newNums); 
const newNums = myNUms.filter((num) =>{
    return num > 4
} )
const newNums = []
myNums.forEach((num) => {
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums);

//1 
const numbers = [1, 4, 2, 5, 8];
const newNums = numbers.filter((num) => num%2);
console.log(newNums);

//2

const names = ["Alice", "Bob", "Charlie", "David"];
const startingLetter = "C";
const newNames = names.filter((name)=> name.startsWith(startingLetter));
console.log(newNames);

//3

const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Mike", age: 30 }
  ];
  const ageToFilter = 30;
  const filteredUsers = users.filter(user => user.age === ageToFilter);
console.log(filteredUsers);

//4

const strings = ["hello", "", "world", ""];
const filteredStrings = strings.filter(string => string);
console.log(filteredStrings);

//5

const strings = ["short", "longer", "very long"];
const minLength = 6;
const filteredStrings = strings.filter(string => string.length > minLength);
console.log(filteredStrings);

//6

const dates = ["2023-12-20", "2024-01-05", "2023-11-28"];
const startDate = "2023-12-01";
const endDate = "2023-12-31";
const filteredDates = dates.filter(dateString => {
    const date = new Date(dateString);
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    return date >= startDateObj && date <= endDateObj;
  });
  console.log(filteredDates);