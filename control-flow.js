// Control Flow in Java Script
/**
 * if
 * else
 * else if
 * switch
 * tenary operator(es6 - ECMA 2015)
 */

/**
 * IF Statement- This is used in logically comparing two (2) values and the underlying expression runs when the statement is true
 *
 * syntax
 * if(boolean expression){
 * ...underlying expression
 * }
 */

let day = "friday";
if (day == "Friday") {
  console.log(true);
}

if (10 == "10") {
  console.log(true);
}

/**
 * Else Statement
 *
 * Syntax
 * if(condition){
 * ... expression
 * } else{
 * ...expression
 * }
 */
if (day == "Friday") {
  console.log(true);
} else {
  console.log(false);
}

if (10 === "10") {
  console.log(true);
} else {
  console.log(false);
}

/**
 * else if
 *
 * Syntax
 *
 * if(condition){
 * ... expression
 *  } else if  (condition){
 * ...expression
 * }
 * ...
 * else{
 * ... expression
 * }
 */

if (day === "Friday") {
  console.log("Day is Friday");
} else if (day === "friday") {
  console.log("Day is friday");
} else if (typeof day === "number") {
  console.log(true);
} else {
  console.log("An error occured");
}

let ans;
let num = 10;

if (num > 20) {
  ans = num;
} else if (num === "10" && typeof num === "string") {
  num += 10;
  ans = num * 2;
} else if (num === "hello world" || "e" * num === NaN) {
  num = "Not Sure";
  ans = "I am" + num;
  console.log(ans);
} else {
  console.log(num);
}

/**
 * Switch Statement
 *
 * Syntax
 * switch (){
 *      case:
 *          expression
 *          break;
 *      case:
 *          expression
 *          break;
 *      default
 *          expression;
 * }
 */

let day2 = "Wednesday";
switch (day2) {
  case "Monday":
    console.log("The Day is Monday");
    break;
  case "Tuesday":
    console.log("The Day is Tuesday");
    break;
  case "Wednesday":
    console.log("The Day is Wednesday");
    break;
  case "Thursday":
    console.log("The Day is Thursday");
    break;
  case "Friday":
    console.log("The Day is Friday");
    break;
  case "Saturday":
    console.log("The Day is Saturday");
    break;
  default:
    console.log("The day is Sunday");
}
// Grading System
let grade = 62;

switch(true) {
  case grade > 100:
    console.log("Enter a Valid Score.")
  case grade >= 70:
    console.log("A")
    break;
  case grade >= 60:
    console.log("B")
    break;
  case grade >= 50:
    console.log("C")
    break;
  case grade >= 45:
    console.log("D")
    break;
  default:
    console.log("F")  
}

// Tenary Operator 
/**
 * Syntax:
 * condition ? true : false
 * condition ? truthy expression : falsy expression
 */



let val = 10;
let res = val > 13 ? "Hello" : "World"
console.log(res);

// Chaining Tenary Operator
res = 
val > 10 ? "Greater than 10" : 
grade < 10 ?  "Less than 10" : "Equal to 10";
console.log(res);

// Exercise 1
// Simulate a logi page using prompt

const db = {
  username: "John Doe",
  password: "qwertyuiop",
  isVerified: true,
};
let username = prompt("Enter your username: ")
let password = prompt("Enter your password")

if (username && username === db.username) {
  if (password && password === db.password && db.isVerified) {
    console.log("Login Succesful");
  } else{
    console.log("Invalid username or password");
  }
} else {
  console.log("Invalid username")
}