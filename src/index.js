import emojipedia  from "./emojipedia";
var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// ############################################################
// Type:1

// function double(x){
//     return x*2;
// }
// const newNumber = numbers.map(double);
// console.log(newNumber);
// ############################################################
// type:2
// var newNumber = [];

// function double(x){
//     return newNumber.push(x*3);
// }
// numbers.forEach(double);
// console.log(newNumber);
// ############################################################
// type:3
// const newNumber = numbers.map( function (x){
//         return x*5;
//     });
// console.log(newNumber);
// ############################################################
//Filter - Create a new array by keeping the items that return true.

// var newNumber = numbers.filter(function (num){
//     return num < 10;
// })

// console.log(newNumber);
//Reduce - Accumulate a value by doing something to each item in an array.


// var newNumber = numbers.reduce(function (Accumulate, currentNumber){
//     return Accumulate+currentNumber;
// })
// console.log(newNumber);
//Find - find the first item that matches from an array.

// var newNumber = numbers.find(function (num){
//     return (num > 10)
// })
// console.log(newNumber);

// //FindIndex - find the index of the first item that matches.
// var newNumber = numbers.findIndex(function (num){
//     return (num > 10)
// })
// console.log(newNumber);

//#########################################################################

// truncate the strng to 100 words

console.log(emojipedia);
var newName = emojipedia.map(function(name){
    return name.meaning.substring(0, 100 );
})
newName.forEach(function(name){
    console.log(newName);
})
console.log(newName);
