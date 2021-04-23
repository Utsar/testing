// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"

let x = "John"
let y = "Doe"

console.log(x + " <> " + y )

// 22) Create an object with properties such name, surname, email

let myObj = {name: "Kristian", surname: "Utsar", email: "utsaru@gmail.com"}

// 23) Delete Email from the previously created object

delete myObj.email

// 24) Create an array with 10 strings in it

let myArr = ["string1", "string2", "string3", "string4", "string5", "string6", "string7", "string8", "string9","string10"]

// 25) Print in the console every string in the previous array

console.log(myArr)

// 26) Create an array with 100 random numbers in it

let randArr = []
let randNum = Math.floor(Math.random()*100)

for (let num = 0; num <= 100; num++) {    
    if(randArr !== randNum)
    randArr.push(randNum)
    
}
        


    
console.log(randArr)


// 27) Wrote a function to get the MAX and the MIN from the previously created array

const maxMin = function(){
    console.log(Math.max(randArr))
    console.log(Math.min(randArr))
}
maxMin()

// 28) Create an array of arrays, in which every array has 10 random numbers

let arrOfArr = [1,2,3,4,5,6]

// 29) Create a function that gets 2 arrays and returns the longest one

let a  = [1,2,3,4]
let b = [1,2,3,4,5]
const longestArray = function(arr1,arr2){
    return Math.max(arr1.lenght, arr2.lenght)

}

console.log(longestArray(a,b))

// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values


//  31) Get element with ID "container" from the page

const getElement = function(){
    let element = document.getElementById("container")
    console.log(element)
}