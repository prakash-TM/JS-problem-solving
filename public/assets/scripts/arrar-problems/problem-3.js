// Write a JavaScript function to get the first element of an array. 
//Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []


/**
 * Algorithm
 * step1: get the input array as arr and first element as index
 * step2: check if the array is not empty and index is undefined 
 * step2.1: then return the first element of the array
 * step3: if step 2 is not exist then check array is empty and index is defined and index is greater then 0
 * step3.1: then return empty array
 * step4: if step 2 and 3 not exist then check array is not empty and index is defined and index is greater then 0
 * step4.1: then slice the arr withe the limits are 0 and index
 * step4.2: return the sliced array
 * step5: if step 2,3 and 4 not exist then check is the index in lesser then 0
 * step5.1: then return empty array
 */


first = (arr, index) => {
    // console.log(arr, index);
    if (arr !== [] && index === undefined) {
        return arr[0];
    } else if (arr.length === 0 && index !== undefined && index > 0) {
        return '[]';
    } else if (arr.length > 0 && index !== undefined && index > 0) {
        return arr.slice(0, index);
    } else if (index < 0) {
        return '[]';
    }

}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));