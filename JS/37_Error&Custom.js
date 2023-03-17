// error three properties
try {
    console.log(a)
}
catch (erro) {
    // name property - returns the name of the error
    console.log("Name of the Error is ", erro.name)
    // message property - returns the message of the error
    console.log("Message of the Error is ", erro.message)
    // stack property
    console.log("Stack of the Error is ", erro.stack)
}

// throwing Custom Error
try {
    let a = 10
    if (a > 5) {
        // throwing the error using throw keyword
        throw new Error("a should be less than 5")
    }
}
catch (e) {
    console.log(e)
}

// throwing Reference Error - you can throw as many Types of Error using the above syntax by replacing the Error
try {
    console.log(a)
    throw new ReferenceError("a is not defined")
}
catch (e) {
    console.log(e)
}