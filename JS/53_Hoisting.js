//hoisting
// declaring variable before initialization is called hoisting
console.log(a) // doesnot throw error returns the undefined
var a = 9 // initializing the variable a with 9
console.log(a) // return 9

// hoisting function
greet() // calls the function without throwing the error
function greet() {
    console.log("hello prathamesh")
}

/*
Note : Hoisting doesnot work with let and const keyword also with function expression and class expression
*/

// function expression is defined as
const name = function (variable) {
    console.log("Called the function expression with variable " + variable)
}

name(3)// calling the function expression

// class expression is defined as
const Rect = class {
    constructor(variable) {
        console.log("Called the class expression with variable " + variable)
    }
}

// creating object of class expression 
let rc = new Rect(3)