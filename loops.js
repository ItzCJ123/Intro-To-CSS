// For general Iteration
/**
 * While Loop
 * For Loop
 * Do While Loops
 */

// For Array Iterations
/**
 * For Of Loops
 * For In Loops
 */

// while llop
/**
 * Syntax
 * while(condition){
 * ...expressions
 * }
 */

let num = 0;
while (num < 10) {
  console.log(num);
  num++;
}

let num2 = 0;

while (num2 < 11) {
  console.log(num2);
  num2++;
}

let num3 = 10;
let store = []
while (num3 > 0) {
//   console.log(num3);
 store.push(num3);
  num3--;
}
console.log(store);

let arr = ["food", "goods", false, {name:"john, doe"}]
let idx = 0
while (idx < arr.length) {
    console.log(arr[idx]);
    idx++
}