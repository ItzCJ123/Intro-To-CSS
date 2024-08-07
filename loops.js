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
let store = [];
while (num3 > 0) {
  //   console.log(num3);
  store.push(num3);
  num3--;
}
console.log(store);

let arr = ["food", "goods", false, { name: "john, doe" }, 87, 15];
let idx = 0;
while (idx < arr.length) {
  console.log(arr[idx]);
  idx++;
}

// Do While Loop
/**
 * This loop runs once before checking if the condition is true or false
 * Syntax
 * do{
 *
 * } while(condition)
 */

let num4 = 0;

do {
  console.log(num4);
  num4++;
} while (num4 < 10);

// The For Loop
/**
 * for(init; condition; incr/decr)
 * {
 *  ...expression
 * }
 */

for (let i = 10; i > 0; i--) {
  console.log(i);
}

let arr2 = ["pen", "book", "bag", "shoe"];
let store2 = [];
for (let i = 0; i < arr2.length; i++) {
  arr2[i] = "My " + arr2[i];
}
console.log(arr2);
