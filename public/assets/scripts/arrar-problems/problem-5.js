// Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"


/**
 * Algorithm
 * step1: declare the myColor array
 * step2: apply toString method on array and print
 * step3: apply join method on array and print
 * step4: apply join method and given the separator symbol to array and print 
 */
myColor = ["Red", "Green", "White", "Black"];

//easy method
console.log(myColor.toString())
console.log(myColor.join())
console.log(myColor.join('+'))



// my method of solving
// var res1 = '';
// var res3 = '';
// for (let i = 0; i < myColor.length; i++) {
//     res1 += myColor[i] + ',';
//     res3 += myColor[i] + '+';
// }
// res1 = res1.slice(0, res1.length - 1);
// res3 = res3.slice(0, res3.length - 1);
// console.log(res1)
// console.log(res1)
// console.log(res3)