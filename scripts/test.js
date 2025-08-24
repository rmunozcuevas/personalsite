function add(a,b){
    a + b;

    return a;
} 

function greet(name){
    console.log("hello" + name + "!")
}

alert('hello world');


function gettype(value){
    return typeof value;
}


const myImage = document.querySelector('img');

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/cman.webp") {
        myImage.setAttribute("src","images/luv.webp");
    } else {
        myImage.setAttribute("src", "images/cman.webp");
    }
});


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Trap is cool, ${myName}`;
    }
}

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.innerHTML = `Trap is cool, ` + storedName;
}

myButton.addEventListener("click", () => {
    setUserName();
  });






  
  
