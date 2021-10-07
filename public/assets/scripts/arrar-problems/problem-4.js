// Write a JavaScript program to find the most frequent item of an array. Go to the editor
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )




/**
 * Algorithm
 * step1: define the input array as arr1
 * step2: define two empty arrases named as arr2 and arr3
 * step3: declare a for loop and iterate till lesser arr1 length
 * step4: check if the arr1 elements are present in the arr2
 * step4.1: if no then push the arr1 elements into the arr2
 * step4.2: if yes then iterate the next element of the arr1
 * step5: iterate the arr2 elements for the limit till lesser of arr2 length
 * step5.1: count the number of occurrence of the arr2 elements.
 * step5.2: stored to the arr3
 * step6: find the maximum value number in the arr3
 * step7: find the index of maximum value number in the arr3
 * step8: return step 7 index value of arr2  
 */




var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

arr2 = [];
arr3 = [];

//removing all duplicate values
for (let i = 0; i < arr1.length; i++) {
    let che = arr2.includes(arr1[i]);
    if (che === false) {
        arr2.push(arr1[i])
    }
}
// console.log(arr2)


//counting the elements occurrence
for (let i = 0; i < arr2.length; i++) {
    var cou = arr1.filter(x => x == arr2[i]).length;
    arr3.push(cou);

}

//finding maximum value(highest repeated element count)
var maxi = Math.max.apply(null, arr3);

//finding the maximum repeated element index in arr3 and same index for arr2 contains same  
let index = arr3.findIndex(max_index => max_index === maxi);
console.log(arr2[index]);