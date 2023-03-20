// closures means creating function inside function with its lexical environment
// consider the example 1
function func1() {
    let message = "String 1"
    console.log(message)
    function func2() { // function inside function
        console.log(message) // message variable is the variable that is creating when the parent function was called
    }
    // calling the function 2
    func2()
}
// calling the function 1
func1()

// closure with return function
function outerfunction() {
    let a = 0
    console.log("a with outer function " + a)
    function innerFunction() {
        let a = 11
        console.log("a with inner function " + a)
    }
    // returning the inner function 
    return innerFunction
}
outerfunction()() // second parenthesis is for the 2nd function calling

// closure with arguments -> similarly you can create the closure function with arrow functions
const functiinner = (a) => {
    console.log("Outer function with variable a value as " + a)
    const functouter = (a) => {
        console.log("Inner function with variable a value as " + a)
    }
    // returning only the funcouter without parenthesis or passing the arguments
    return functouter
}

functiinner(1)(3) // passing the function as the parameter

// creating multiple closure or multiple function inside the function
function mainFunct() {
    let a = 0
    console.log("Calling the main function with a " + a)
    const f1 = () => {
        console.log("Calling the f1 function with a " + a)
        const f2 = () => {
            console.log("Calling the f2 function with a " + a)
            const f3 = () => {
                console.log("Calling the f3 function with a " + a)
            }
            a = 4
            return f3()
        }
        a = 3
        return f2()
    }
    a = 2
    return f1
}
mainFunct()()

// multiple function with parameters
function mainPart(a) {
    console.log("calling the main part of the function with a " + a)
    const callF1 = (a) => {
        console.log("Calling the function f1 with a " + a)
        const callF2 = (a) => {
            console.log("Calling the function f2 with a " + a)
        }
        return callF2
    }
    return callF1
}

// calling the mainPart function with only one function as calling
let c = mainPart(2)(3)
