const hello = () => {
    console.log("Saying Hello")
}

const sayHello = (name) => {
    console.log("Saying Hello to You " + name)
}

// exporting the module as object of function
module.exports = { hello, sayHello }