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

// .createElement()
//.createTextNode()
const h1Elem = document.createElement("h1");
const h1Text = document.createTextNode("Bye World");
h1Elem.append(h1Text);
console.log(h1Elem);

// .appendChild()
document.body.appendChild(h1Elem);

// Create an Element li and insert it into our HTML Document at the ul elementt before the li with the class DOM
const liElem = document.createElement("li");
liElem.textContent = "C++"; //innerHTML, innerText

const existingli = document.getElementsByClassName("DOM")[0]; //This is where we specify where the element will be inserted before

const ulElem = document.getElementsByTagName("ul")[0]; //This is where the element will be inserted into

ulElem.insertBefore(liElem, existingli);

const img = document.createElement("img");
img.src = "./image.png";

document.getElementsByTagName("figure")[0].append(img);

const countries = [
  "",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo (Kinshasa)",
  "Costa Rica",
  "Côte d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "North Korea",
  "South Korea",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Lithuania",
  "Luxembourg",
  "Macedonia (FYROM)",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste (East Timor)",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
];
const select = document.createElement("select");
select.id = "country";

countries.forEach((country) => {
  const option = document.createElement("option");
  if (!country) {
    option.innerText = "---Select your Country---";
    option.selected = true;
    option.disabled = true;
    select.append(option);
  } else {
    option.innerHTML = country;
    option.value = country.toLowerCase();
    select.append(option);
  }
});

const putselect = document.getElementsByClassName("putselect")[0];

document.getElementById("form").insertBefore(select, putselect);

// Accessing Attributes from elements in DOM
const heading = document.querySelector("h2");
const elemID = heading.getAttribute("id")
const elemClass = heading.getAttribute("class")
heading.setAttribute("id", "heading2")
heading.setAttribute("title", "A Heading Element")
heading.setAttribute("style", "color:red; border: 2px solid black")

// Setting Attributes using assignment operator
heading.id = "headings"
heading.style = 'color: blue; background-color: gray; border: 2px solid green;'
heading.style.color = 'yellow'
heading.style.backgroundColor = "#fff"




console.log(elemID);
console.log(elemClass);
