//function without parameter
function sayHello() {
    console.log("Hello Programmer")
}

//calling the sayHello() function
sayHello()

//function with parameter
function sum(a, b) {
    return a + b;
}

//calling the sum function
console.log(sum(1, 2))

//creating the arrow function without parameter
const say = () => {
    console.log("Calling the say arrow function")
}

//calling the arrow function say
say()

//creating the arrow function with parameter
const max = (a, b) => {
    if (a < b) {
        return b;
    }
    return a;
}

//calling the arrow function max
console.log(max(10, 4))