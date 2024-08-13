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
 *  /

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
for (let i = 0; i < arr2.length; i++) {
  arr2[i] = "My " + arr2[i];
}
console.log(arr2);

let arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3[i].length; j++) {
    console.log(arr3[i][j]);
  }
}

// Write a function that takes 2 params x,y an array and a string, loop over the array and using your if statement, return the index of the array item thet matches the second parameter, if no match, return "Not Found"

function match(x, y) {
  for (let i = 0; i < x.length; i++) {
    if (y == x[i]) {
      return i;
    }
  }
  return "Not Found";
}

let ans = match([1, 2, 3, 4, 2], "2");
console.log(ans);

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random country
function getRandomCountry() {
  const countries = [
    "USA",
    "Canada",
    "Mexico",
    "India",
    "China",
    "Japan",
    "UK",
    "Germany",
    "France",
    "Australia",
  ];
  return countries[getRandomNumber(0, countries.length - 1)];
}

// Function to generate a random state
function getRandomState(country) {
  const states = {
    USA: ["New York", "California", "Texas", "Florida", "Illinois"],
    Canada: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba"],
    Mexico: ["Mexico City", "Jalisco", "Nuevo Leon", "Guanajuato", "Puebla"],
    India: [
      "Maharashtra",
      "Uttar Pradesh",
      "Tamil Nadu",
      "West Bengal",
      "Bihar",
    ],
    China: ["Shanghai", "Beijing", "Guangdong", "Shandong", "Henan"],
    Japan: ["Tokyo", "Kanagawa", "Osaka", "Aichi", "Saitama"],
    UK: ["London", "Birmingham", "Leeds", "Glasgow", "Sheffield"],
    Germany: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"],
    France: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"],
    Australia: [
      "New South Wales",
      "Victoria",
      "Queensland",
      "Western Australia",
      "South Australia",
    ],
  };
  return states[country][getRandomNumber(0, states[country].length - 1)];
}

// Function to generate a random email
function getRandomEmail(firstname, lastname) {
  const domains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "aol.com",
    "comcast.net",
  ];
  return `${firstname.toLowerCase()}.${lastname.toLowerCase()}@${
    domains[getRandomNumber(0, domains.length - 1)]
  }`;
}

// Function to generate a random phone number
function getRandomPhone() {
  return `${getRandomNumber(100, 999)}-${getRandomNumber(
    100,
    999
  )}-${getRandomNumber(1000, 9999)}`;
}

// Function to generate a random first name
function getRandomFirstname() {
  const firstnames = [
    "John",
    "Jane",
    "Emily",
    "Michael",
    "Sarah",
    "William",
    "Olivia",
    "James",
    "Ava",
    "George",
  ];
  return firstnames[getRandomNumber(0, firstnames.length - 1)];
}

// Function to generate a random last name
function getRandomLastname() {
  const lastnames = [
    "Doe",
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
  ];
  return lastnames[getRandomNumber(0, lastnames.length - 1)];
}

// Generate an array of 10 objects
const users = [];
for (let i = 0; i < 10; i++) {
  const firstname = getRandomFirstname();
  const lastname = getRandomLastname();
  const age = getRandomNumber(18, 100);
  const country = getRandomCountry();
  const state = getRandomState(country);
  const email = getRandomEmail(firstname, lastname);
  const phone = getRandomPhone();
  const isActive = Math.random() < 0.5;
  const isVerified = Math.random() < 0.5;
  users.push({
    firstname,
    lastname,
    age,
    country,
    state,
    email,
    phone,
    isActive,
    isVerified,
  });
}

console.log(users);

console.log(users[0].firstname);

for (let i = 0; i < users.length; i++) {
  // console.log(users[i].firstname + " " + users[i].lastname);
  if (
    users[i].firstname.startsWith("A") ||
    users[i].firstname.startsWith("a")
  ) {
    console.log(users[i].firstname);
  }
}

/**
 * For Of Loop
 * Syntax
 * for(const elem of array){
 *   ...expression
 * }
 */

const arr5 = ["John", "Mike", "Jane", "Smith"];
for (const item of arr5) {
  if (item === "Mike") {
    console.log(item + " Tyson");    
  } else {
    console.log(item);
  }
  
}
