// Write a JavaScript function to check whether an `input` is an array or not. 
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

/**
 * Algorithm
 * step1: get the input in the function
 * step2: check if the input is array or not
 * step3: return the boolean value
 */

is_array = input => {
    return Array.isArray(input)
}


console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));