const PromptSync = require("prompt-sync")

// simple for loop
console.log("Simple for loop")
for (let a = 0; a <= 10; a++) {
    console.log(a)
}

//printing table of entered number
console.log("Multiplication Table")
const prompt = require("prompt-sync")()
const no = prompt("Enter the Number : ")
for (let a = 1; a <= 10; a++) {
    console.log(no + "x" + a + "=" + no * a);
}

//for in loop
console.log("Example of for in loop")
const obj = { a: 2, b: 3, c: 4, d: 5 }
for (let a in obj) {
    console.log(a)
}

//for of loop
console.log("Example of For of Loop")
let s = "Prathamesh"
for (let a of s) {
    console.log(a)
}