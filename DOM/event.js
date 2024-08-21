document.getElementsByClassName("box1")[0].style.backgroundColor = "red";



const changeColor = () => {
    const box1 = document.getElementsByClassName("box1")[0]
    if (box1.style.backgroundColor == "red") {
        box1.style.backgroundColor = "blue"
    } else {
        box1.style.backgroundColor = "red"
    }

};



// Math.floor(Math.random() *(max-min +1) + min
console.log(Math.floor(Math.random()*10 - 0 +1)); 

const colors = ["red", "blue", "cyan", "lightgreen", "gray", "purple"]
const changeH1 = () => {
    let rc = Math.floor(Math.random() * (colors.length -0 +1) + 0)
    const h1 = document.getElementById("demo")
    h1.style.color = colors[rc]
}
// Workingmwith box 2
// const changebox2 = function ()  {
// document.getElementsByClassName("box2")[0].style.backgroundColor = "red"
// };

// document.getElementsByTagName("button")[1].onclick = changebox2;

document.getElementsByTagName("button")[1].onclick = () => {
    document.getElementsByClassName("box2")[0].style.backgroundColor = "red"
}