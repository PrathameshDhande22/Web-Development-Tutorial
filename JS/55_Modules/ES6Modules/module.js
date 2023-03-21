// creating module 
// exporting function as object in ES6 Modules using export keyword
'use strict'

export const hello = () => {
    console.log("Hello Prathamesh ")
}

export const sayHello = (name) => {
    console.log("Saying Hello to " + name)
}

const namehello = () => {
    console.log("Saying hello with namehello")
}

export default namehello // exporting module as without object