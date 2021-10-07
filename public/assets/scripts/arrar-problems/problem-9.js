// Write a JavaScript program to compute the sum and product of an array of integers.
// sample input : arr = [1,2,3,4,5]




/**
 * Algorithm
 * step1: define input arr
 * step2: define the variables are sum(contains value 0 ) and mul(contains value 1)
 * step3: iterate the array arr
 * step4: concat the arr element with sum
 * step5: multiply the arr element with mul
 * step6: print the sum and mul after iteration exist
 */





arr = [1, 2, 3, 4, 5]
var sum = 0;
var mul = 1;
for (let x in arr) {
    sum += arr[x]
    mul = mul * arr[x]
}
console.log("sum of array integers :" + sum)
console.log("multiplication of array integers :" + mul)