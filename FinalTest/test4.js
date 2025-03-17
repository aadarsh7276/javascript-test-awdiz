// solved question

// var is global scoped
// we can reassign var
// var can be hoisted

// let is blocked scope
// we can reassign  let
// let cannot be hoisted

// const is blocked scope
// we cannot reassign const its value is alwways constant
// const cannot be hoisted

// closure is when we assign another function inside the function and acces their value (parameters) from their outer scope

// function outer(){
//     let outerfunc = "outer function";
//     function inner(){
//       console.log(outerfunc);

//     }
//     return inner

// }

// hoisting in js move code to the top of their scope before its executed

// console.log(myVar);
// var myVar = "hii"
// console.log(myVar);

// == it compare only value
// === it compare both type and value

// null is intentionally given the value for its absence

// undefined is when variable is decalred but not defined any value

// nan is not a number

// call immitieadly invoke the function
// call and apply are same but in apply arguments passed as an array
// bind it does invoke function immidieatly

// synchronous is line by line execution
//in asynchronous the execution is random

// promises is js have three stage
// pending fullfilled and rejected
// pending  in which the code execution is still in progress
// fullfilled in which the execution is complete
// rejected when we get an error

// handling error in promises is easy due to their inbuilt method like .then() and .catch() but in callback handling error is much difficult

// async await :_the value which is return from asyn is come in promises and await can only be used inside async and its use is to hold the execution until the promise resolve or fail

// async and await  execute its function in promises and and await hold its execution until the promise reolve or fail  because of promise inbuilt method its helpful to improve asynchrnous code

// dsa question
//1st reverse
// let string = "hello"
// let reversed = ""
// for (let i = string.length -1;i>= 0;i--){
//   reversed += string[i]
// }
// console.log(reversed);

// let string = "javascript"
// let reversed = ""
// for (let i = string.length -1;i>= 0;i--){
//   reversed += string[i]
// }
// console.log(reversed)


// 2nd find first 
// var string = "aabbccd";

// for (let i = 0; i < string.length; i++) {
//   let count = 0;
//   for (let j = 0; j < string.length; j++) {
//     if (string[i] === string[j]) {
//       count++;
//     }
//   }
//   if (count === 1) {
//     console.log(string[i]);
//     break;
//   }
// }
// var string = "abcabcde";

// for (let i = 0; i < string.length; i++) {
//   let count = 0;
//   for (let j = 0; j < string.length; j++) {
//     if (string[i] === string[j]) {
//       count++;
//     }
//   }
//   if (count === 1) {
//     console.log(string[i]);
//     break;
//   }
// }


//3rd find the intersection of two array 

// let array1 = [1,2,2,1];
// let array2 = [2,2];

// for (let i = 0;i<=array1.length-1;i++){
//   for (let j=0;j<=array2.length-1;j++){
//     if(array1[i]==array2[j]){
//       console.log(array1[i]);
//       break;
      
//     }
//   }
// }
// let array1 = [4,9,5];
// let array2 = [9,4,9,4,8,4];

// for (let i = 0;i<=array1.length-1;i++){
//   for (let j=0;j<=array2.length-1;j++){
//     if(array1[i]==array2[j]){
//       console.log(array1[i]);
//       break;
      
//     }
//   }
// }

//  4th two sum problems 

// let array1 = [2,7,11,15];
// let target = 9;

// for (let i = 0;i<=array1.length;i++){
//   for(let j= i+ 1;j<=array1.length-1;j++){
//   if(array1[i] + array1[j] == target){
//     console.log([i,j]);
    
//   }
//   }
// }

// 5th merge array 
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
let result = arr1.concat(arr2).sort();

console.log(result)
