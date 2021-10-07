// Write a JavaScript program which prints the elements of the following array. Go to the editor
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------


/**
 * Algorithm
 * step1: declare the nested array named as a
 * step2: assign empty string named as res
 * step3: iterate the array a till lesser of the array length
 * step3.1: concat string row ,index of a and new line with res
 * step4: again iterate the first index array of a till of the first index array length
 * step4.1: concat the array nested elements and new line with res
 * step5: complete the both iterations print res
 */



var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];
var res = "";
for (let i = 0; i < a.length; i++) {
    res += "row " + i + '\n';
    for (let x = 0; x < a[i].length; x++) {
        res += a[i][x].toString() + "\n";
    }
}

console.log(res)