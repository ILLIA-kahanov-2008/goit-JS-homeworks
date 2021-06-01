// function getExtremeElements(array) {
//   // Change code below this line
//  const newArray = [array[0], array[array.length - 1]];
// return newArray;
  

//   // Change code above this line
// }

// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function calculateTotal(number) {
//  // Change code below this line

//   let total = 0;
  
//   for (let i = 1; i <= number; i += 1) { 
  
//     total += i;
// }

//   return total;
//   // Change code above this line
// }

// console.log(calculateTotal(8));

const string = "May the force be with you";

const array = string.split(" ");
console.log(array);
let longestWord = array[0];


for (i = 0; i < array.length; i +=1) {
    if (longestWord.length < array[i].length) {
      longestWord = array[i];
    }
}
  
  console.log(longestWord);
