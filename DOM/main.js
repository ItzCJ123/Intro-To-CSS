// Document Object Model - DOM

// Write to the document
document.write("Hello, World!");
document.write("<h1>Hello, World!<h1>");

// To Change Document Title
document.title = "Document Object Model";

// Navigating the document
console.log(document.head);
console.log(document.body);

// Navigating Childnodes
const cn = document.body.childNodes;
console.log(cn[1]);
console.log(cn[5].childNodes[7]);

// Navigating With Children
const clt = document.body.children;
console.log(clt[0]);
console.log(clt[1].children[2]);

// FirstChild, LastChild
console.log(document.body.firstChild); //Returns First Node
console.log(document.body.lastChild); //Returns Last Node

// FirstElementChild and LastElement Child
console.log(document.body.firstElementChild); //Returns First Element
console.log(document.body.lastElementChild); //Returns Last Element

console.log(document.body.children[2].lastElementChild);

// Searching DOM
// .getElementByTagName()
// .getElementByClassName()
// .getElementById()
// .querySelector()
// .querySelectorAll()

// .getElementByTagName() - Returns the HTML Collection of all the Elements searched from the document
const liTags = document.getElementsByTagName("li");
console.log(liTags);

console.log(liTags[4]);
console.log(liTags[0]);

// .getElementByClassName - Returns the HTML Collection of all the Elements that match the class
const classElements = document.getElementsByClassName("DOM");
console.log(classElements[2]);

// .getElementsByID - returns a single element that matches the search criteria
const idElement = document.getElementById("h2");
console.log(idElement);

const fig = document.getElementById("fig");
console.log(fig);

// querySelector
const elem = document.querySelector("section p");
console.log(elem);

// querySelectorAll
const elem2 = document.querySelectorAll("h2, li, DOM, p");
console.log(elem2);

// Manipulating or Modifying the DOM