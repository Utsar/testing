//Excercise 1
let myArray = [1,2,3,4,5]
console.log(myArray)

// Excercise 2

let myObject = {
    firstName: "Kristian",
    surName: "Utsar",
    age: 32,
    email: "Utsaru@gmail.com",
}

console.log(myObject)

// Excercise 3
myObject.DriverLicense = true

console.log(myObject)

// Excercise 4

delete myObject.age
console.log(myObject)

// Excercise 5
let mySecondObject = {
    firstname: "Ale",
    surname: "Musi",
    email: "ale.musi@gmail.com",
}
console.log(mySecondObject)

console.log(myObject.eamil === mySecondObject.email)

// Excercise 6

let totalShoppingCart = 51
let freeShipping = 50
let shippingCharge = 10

if (totalShoppingCart >= freeShipping){
    console.log("Your shopping is comes to", totalShoppingCart)
}
else {
    console.log("Your shoppings comes to: ", shippingCharge + totalShoppingCart)
}

// Excercise 7
let blackFridayDiscount = 0.2
if (totalShoppingCart - (totalShoppingCart * blackFridayDiscount) >= freeShipping){
console.log("Your shopping comes to:", totalShoppingCart)
}
else{
    console.log("Your shopping comes to:", (totalShoppingCart - (totalShoppingCart * blackFridayDiscount) + shippingCharge))
}

// Excercise 8

let myCar = {
    brand: "Tesla",
    model: "S",
    licensePlate: "Superman",
}
console.log(myCar)

let mySecondCar = Object.assign({}, myCar)
mySecondCar.licensePlate = "BatMan"
console.log(mySecondCar)
let myThirdCar = Object.assign({}, myCar)
myThirdCar.licensePlate = "IronMan"
console.log(myThirdCar)
let myFourthCar = Object.assign({}, myCar)
myFourthCar.licensePlate = "SPiderMan"
console.log(myFourthCar)
let myFifthCar = Object.assign({}, myCar)
myFifthCar.licensePlate = "Robin"
console.log(myFifthCar)

// Excercise 9

let carsForRent = [{myCar}, {mySecondCar}, {myThirdCar}, {myFourthCar}, {myFifthCar}]
console.log(carsForRent)

// Excercise 10

console.log(carsForRent.slice(1,4))

// Excercise 11
let typeOfCars = carsForRent
console.log(typeOfCars)

// Excercise 12

let carsForSale = ["Tesla", "Lucid", "Nio"]
let totalCars = carsForRent.length + carsForSale.length
console.log(totalCars)

// Excercise 13
console.log(carsForSale)