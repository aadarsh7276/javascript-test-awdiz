// var num = [1,2,3,4,5,6];
// var target = 6;

// function binarySearch(num,target){
//     let left =  0;
//     let right =  num.length - 1 ;

//     while (left <= right){
//         let midindex = Math.floor((left + right)  /2);
//         let midEle  = num[midindex];
//         if(target == midEle ){
//             return "element found";
//         }else if (target <= midEle){
//             right = midindex -1;
//         }else{
//             left = midindex + 1;
//         }
        
        
//     }
//     return "not found"
// }
// console.log(binarySearch(num,target))

// reverse a word

// function reverseWord(str){
//     let reversedword1 = "";
//     // let reversedword = "";

// for(let i= str.length -1 ;i>=0 ;i--){
//     if(str[i] == " "){
//         reverseWord += str[i];
//     }
// }
// return reversedword1
// }
// console.log(reverseWord("hello world"));

// find the missing number from an array 

// let array = [1,2,4,5];

// for (let i = 0 ; i<= array.length - 1;i++){
//     for(let j = 1;j<= array.length -1;j++){
//         if (array[i]- array[j] !== 1) {
//             console.log(i);
            
            
//         }

//     }
// }

// fimd the missing number in an array

function missingNumbers(array){
    let missingNum = 0;
    for(let i = 0;i<array.length;i++){
        for(let j= i + 1;j<array.length;j++){
            if(array[j]- array[i] > 1){
                missingNum =  array[j] + 1;
                

            }
        }
    }

    return missingNum;
}
console.log(missingNumbers([1,2,4,5]));

function missingNumbers(array) {
    let missingNum = null;

    // Outer loop iterates through each element in the array
    for (let i = 0; i < array.length; i++) {
        // Inner loop compares the current element with all subsequent elements
        for (let j = i + 1; j < array.length; j++) {
            // If there is a gap larger than 1 between consecutive numbers, the missing number is found
            if (array[j] - array[i] > 1) {
                missingNum = array[i] + 1;
                return missingNum;
            }
        }
    }
    
    // If no missing number is found, return null
    return missingNum;
}

console.log(missingNumbers([1, 2, 4, 5])); // Outputs: 2



// find the second smallest number in an array 

// implement a string compression algorithm


