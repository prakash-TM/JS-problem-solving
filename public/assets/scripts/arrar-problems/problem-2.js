// Write a JavaScript function to clone an array. Go to the editor
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

/**
 * Algorithm
 * step1:get the array as input
 * step2: declare a variable out
 * step3: use map function to clone the input and stored in out
 * step4: return out 
 */
array_Clone = input => {
    var out = input.map((x) => x);
    return out;
}


console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));