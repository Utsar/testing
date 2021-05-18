// Excercise 1
const area = function(l1,l2) {
    return l1*l2
    }
console.log(area(12,13))

// Excercise 2

const crazySum = function (int1,int2){
  if (int1 === int2){
      return (int1+int2)*3}
    else 
    {return int1+int2}   
  }
console.log(crazySum(10,10))

// Excercise 3

const crazyDiff = function(randomNumber, givenNumber=19){
  if (randomNumber > givenNumber){
     return sum =(randomNumber%givenNumber*3)
     }
     else{ return givenNumber%randomNumber}
   
}
console.log(crazyDiff(25,19))

// Excercise 4

const boundary = function(n){
    if (n >20 && n <= 100 || n === 400){
       return true
    }else {return false}
}
console.log(boundary(150))

// Excercise 5

const strivify = function (anystring) 
{if (anystring === "Strive"){ return anystring}
else {return "Strive " + anystring}
}
console.log(strivify("is Awesome"))

// Excercise 6

const check3and7 = function (number) {
    if (number % 3 === 0){console.log("The number " + number + ", is a multiple of 3!")}
    else if (number % 7 === 0){
        console.log("The number " + number + ", is multiple of 7!")}
    else{console.log("Your selected number (" + number + "), is neither multiple of 3 nor 7!")}
    
}
console.log(check3and7(10))

// Excercise 7

const reverseString = function (str1) {
   return str1.split("").reverse().join("")
   }
console.log(reverseString("Hello"))

// Excercise 8

const upperFirst = function (str2) {
    let words = str2.tolowercase().split(""); 
    for (let i = 0; i<words.lenght;i++)
{
    words[i] = words[i][0].toUppercase() + words[i].slice(1)
}
return words.join("")
}
console.log(upperFirst("mellow yellow super trooper"))

// Excercise 9

const cutString = function (str3) {
    return str3.split("").splice([0],[-1]).join("")
}
console.log(cutString("Hello"))

// Excercise 10

const giveMeRandom = function (n) {
    return n = Math.random(0,10)
    
}
console.log(giveMeRandom(7)
)