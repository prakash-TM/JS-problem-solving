// Write a JavaScript program to sort the items of an array. Go to the editor
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8


// simple way

var arr1 = [3, 8, 7, 6, 5, -4, -3, 2, 1];
console.log(arr1.sort(function(a, b) { return a - b }))


//complex way


// var arr2 = [];
// var arr3 = [];
// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] >= 0) {
//         arr2.push(arr1[i])
//     } else {
//         arr3.push(arr1[i])
//     }
// }

// arr2 = arr2.sort();
// arr3 = arr3.sort();
// arr3.reverse();
// console.log(arr3.concat(arr2))