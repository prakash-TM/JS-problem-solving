// Write a JavaScript function to merge two arrays and removes all duplicates elements. Go to the editor

// Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
var array3 = []
var array4 = array1.concat(array2)
for (let x in array4) {
    if (!array3.includes(array4[x])) {
        array3.push(array4[x])
    }
}
console.log(array3)