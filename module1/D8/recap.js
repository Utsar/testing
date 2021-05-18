
// // selectiong element by specific element by id
// let x = document.getElementById("demo")
// let x = document.getElementById("article-container")
// // get child item of parent X
// x.children
// // get elements by tag - will always return you Array
// let articles = document.getElementsByTagName("article")
// // to access certain element you need to specify the position
// articles[0]
// // you need to use the below to get
// articles[0].children
// // you can also use QuerySelector
// let y = document.querySelector("article") // for id "#"
// let y = document.querySelectorAll("article")

// // to select multiple elements with class of Demo
// let allTheDemoClass = document.getElementsByClassName("demo")
// let allTheDemoClass1 = document.querySelectorAll(".demo")
// using queryselector you can decend down by using space. 
// selected UL inside More complex, then point to children property, then specify the second item in the lost of children. the value can change, it become an array/
// let ul1 = document.querySelector("#more-complex ul").children[0].style.backgroundcolor = "red"
// .parentElement ---> goes up
// a loop is a structure that allows you to repeat portion of code many times. for lood declaration:
// 1) initialize the counter from 0
// 2) set stopping condition
// 3) 
// for(let x = 0; x<5;x++){
//     console.log("I'm in the loop", x)
// }
// let arrayOfStudent = ["kris", "kris2", "Kris3", "Kris4", "Kris5"]
// // access an index of an array
// console.log(arrayOfStudent[0])
// for(let i = 0; i<arrayOfStudent.length; i++){
//     console.log(arrayOfStudent[i])

// }

// let heading = document.getElementsByTagName("h1")[3].parentElement.innerHTML // all html contained in the element
// parentElement.innerText // only the text

// let div = document.getElementById("more-complex") // returns div 
// div.innerHTML = "<ul></ul>" // rewrited the whole html element

// //Adding an element to 
// let myUl = document.getElementsByTagName("ul")[0];
// myUl.innerHTML = myUl.innerHTML + "<li>new one</li>"
// myUl.innerHTML += "<li>new one</li>"

// let's append one with appendChild method

// let newLi = document.createElement("li")

// newLi.innerText = "New one with appendChild"
// MediaQueryList.appendChild(newLi)
// let myArray = [1,2,3,4,5]

// for (item of myArray){

// }

// events are something we csn grab onto for triggering our portions of code at specific moment
// button with event listener, every evenet listener starts with: on
/* <button onclick="buttonFunction(event)">Button</button>
<input onketdown="inputFunction(event)"/>
const buttonFunction = function(event){
    console.log("event")
}
const inputFunction = function(event)
console.log(event) */

// way of attatching event listener to the button via JS
// let button = document.getElementsByTagName("button")[0]
// button.onlick = buttonfunction

// let b = document.createElement("button")
// b.innerText = "New button"
// document.getElementsByTagName("body")[0].insertBefore(b, document.getElementsByTagName["h1"][0])
// inserted the button before h1

// linking tabs
// script src="js"
// head <link rel="stylesheet" type"text/css" href="style.css" />


// ######################Game##############

const prepareGame = function(){
    // let generate two snumbers for my two cells
    let firstNumber = Math.floor(Math.random() *10)
    let secondNumber = Math.floor(Math.random() *10)
    // put the numbers somewhere, so i need to select html element where to put them
    let firstCell = document.getElementById("first-number")
    let secondCell = document.getElementById("second-number")

    firstCell.innertext = firstNumber
    secondCell.innertext = secondNumber

    let inputField = document.getElementById("guess")
    inputField.value = ""
}
const check = function(){
    let firstCell = document.getElementById("first-number")
    let secondCell = document.getElementById("second-number")

    let firstNumber = firstCell.innertext
    let secondNumber = secondCell.innertext

    let total = parseInt(firstNumber) + parseInt(secondNumber)

    let inputfield = document.getElementById("guess")
    let myGuessedNumber = inputField.value // this is a string

    if(total === parseInt(myGuessedNumber)){
        // if they are the same it means we are correct
        alert(`correct`)// annoying message (a box pops out)
        prepareGame()
    } else {
        alert(`Incorrect, the rigt number was` + total)
    }
}


const assScroe = function(result){
    let scoreSection = document.getElementById("score")
    let score = document.createElement("div")// makes new div
    if(result ==="win"){
        score.innertext = "correct"
    } else {
        score.innertext = "not correct"
    }
    score.innertext = "correct not correct"
}
scoreSection.appendchild(score)

window.onload = function(){
    prepareGame()
}