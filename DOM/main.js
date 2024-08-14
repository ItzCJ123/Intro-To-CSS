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