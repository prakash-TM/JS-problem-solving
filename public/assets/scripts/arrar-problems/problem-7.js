// Write a JavaScript program which accept a string as input and swap the case of each character. 
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'


/**
 * Algorithm
 * step1: define the input string as str
 * step2: assign one empty array as arr and empty string as res
 * step3: convert str string to array, stored in arr
 * step4: iterate the arr array
 * step5: check if the arr element is upper case or not
 * step5.1: if yes then convert into lower case and concat with res
 * step6: if step 5 no exist then check if the arr element is lower case or not
 * step6.1: if yes then convert into upper case and concat with res
 * step7: if both steps 5 and 6 not exist then simply concat with res
 * step8: iteration is complete then print the res
 * 
 */


var str = 'The Quick Brown Fox 7';
var arr = [];
var res = "";
arr = str;
for (let i in arr) {
    if (arr[i] === arr[i].toUpperCase()) {
        res += (arr[i].toLowerCase());
    } else if (arr[i] === arr[i].toLowerCase()) {
        res += (arr[i].toUpperCase());
    } else {
        res += arr[i];
    }
}
console.log(res)