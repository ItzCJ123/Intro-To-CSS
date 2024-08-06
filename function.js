/**
 * Syntax:
 * function functionName(...parameters){
 *      expression
 * }
 */

function sum2() {
  console.log(5 + 5);
}

sum2();
sum2();
sum2();

function sum3(a, b) {
  console.log(a + b);
}

sum3(10, 4);
sum3(3, 6);
sum3(11, 2);

sum3(5); //NaN because only one argument is given.

function greet(name) {
  console.log(`Hello ${name}, Welcome to my site`);
}

greet("John");
greet("Mike");
greet("Tony Stark");
greet(); //This will append undefined to the string
//default params
function mean(x = 0, y = 0) {
  console.log((x + y) / 2);
}
mean(10, 20);
mean(60);

function greet2(name = "user") {
  console.log(`Hello ${name}, Welcome to my site`);
}

greet2();
greet2("Emma");

const greet3 = function (name) {
  console.log(`Hello ${name}, Welcome to my site`);
};

greet2();
greet2("Emma");

// Return Statement - Thos is used to return the value of a function computation to the program

function validator(val) {
  let cleanVal = val.toLowerCase();
  cleanVal = cleanVal.trim();

  return cleanVal;
}

let val = validator("John dOe");

const validator2 = function (val2) {
  let cleanVal2 = val2.toLowerCase();
  cleanVal2 = cleanVal2.trim();

  console.log(cleanVal2);
};

let val2 = validator2("John dOe");
  

// Wrie a function that takes an array parameter named arr and returns the last item in the array

function lastitem(arr) {
    return arr[arr.length - 1]
}

let x = lastitem([5, 10, 69, 10])
let y = lastitem(["pen", "book", "car"])
let z = lastitem([true,  false, null])
console.log(x, y, z)


// write a function getItem that takes an array parameter named arr and a number param named n. The function sholud return the item that matches the index n in the array


function getItem(arr,n){
    return arr[n]
}
let xx = getItem(["pen", "book", "car"], 2)
let yy = getItem([5, 10, 69, 10], 0)
let zz = getItem([true,  false, null, 3, 7], 1)
console.log(xx, yy, zz)


// Arrow Function In JavaScript - es6
/**
 * Syntax
 * const varname = () => ()
 */

// const  varname = function(){}
const validator3 = (val2) => {
  let cleanVal2 = val2.toLowerCase();
  cleanVal2 = cleanVal2.trim();

  console.log(cleanVal2);
};

 const simple = (a,b) => {
  return a > b
 }

 const simpler = (a,b) => a > b

 console.log(simple(5, 10));
 console.log(simpler(5, 10));
