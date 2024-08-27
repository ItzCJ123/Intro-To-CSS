const changeColor = () => {
  const box1 = document.getElementsByClassName("box1")[0];
  if (box1.style.backgroundColor == "red") {
    box1.style.backgroundColor = "blue";
  } else {
    box1.style.backgroundColor = "red";
  }
};

// Math.floor(Math.random() *(max-min +1) + min)
console.log(Math.floor(Math.random() * 10 - 0 + 1));

const colors = ["red", "blue", "cyan", "lightgreen", "gray", "purple"];
const changeH1 = () => {
  let rc = Math.floor(Math.random() * (colors.length - 0 + 1) + 0);
  const h1 = document.getElementById("demo");
  h1.style.color = colors[rc];
};
// Workingmwith box 2
// const changebox2 = function ()  {
// document.getElementsByClassName("box2")[0].style.backgroundColor = "red"
// };

// document.getElementsByTagName("button")[1].onclick = changebox2;

document.getElementsByTagName("button")[1].onclick = () => {
  document.getElementsByClassName("box2")[0].style.backgroundColor = "red";
};

// Handling form in DOM
const db = [
  { username: "johndoe", password: "john1234" },
  { username: "miketyson", password: "mike1234" },
  { username: "stevegerald", password: "steve1234" },
  { username: "georgemichael", password: "george1234" },
];

function handleSubmit(e) {
  e.preventDefault(); //Prevent Default Form Submission
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  if (!username.value) {
    username.style.border = "1px solid red";
  }
  if (!password.value) {
    password.style.border = "1px solid red";
  }

  // console.log(username.value);
  // console.log(password.value);

  const user = db.filter((item) => item.username === username.value);
  if (!user.length) {
    document.querySelector(".err").innerHTML = "Username does not exist!"
    document.querySelector(".err").style.display = "block"
    // alert("User does not exist!");
    return;
  }
  if (user[0].password !== password.value) {
      document.querySelector(".err").innerHTML = "Invalid Username or passowrd"
    document.querySelector(".err").style.display = "block"
    return;
  }
  document.querySelector(".login").style.display = "block"
  document.getElementById("form").style.display = "none"
  // alert("Sign In Successful!")

}

document.getElementById("form").onsubmit = (e) => {
  handleSubmit(e);
};

const arr = [5, 6, 8, 1, 134, 1, 45, 86, 20, 87, 36];
const filtered = arr.filter((x) => x % 2 !== 0);
console.log(filtered);

// Removing error Messages
const username = document.getElementById("username");
const password = document.getElementById("password");

username.onfocus = () => {
  username.style.borderColor = "#000";
  document.querySelector(".err").style.display = "none";
}
password.onfocus = () => {
  username.style.borderColor = "#000";
  document.querySelector(".err").style.display = "none";
}

document.querySelector("span").addEventListener("click", ()=>{
  if (password.type === "password") {
    password.type = "text"
  } else{
    password.type = "password"
  }
})

const search = document.querySelector("#search")
const dis = document.querySelector(".display")
search.addEventListener("keydown", (e) => {
  console.log(e.key);
  dis.innerHTML = search.value
})