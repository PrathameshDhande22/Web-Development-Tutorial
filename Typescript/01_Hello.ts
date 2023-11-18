// First Program using Typescript

let message: string = "First Program in Typescript"
console.log(message)


const prom = require("prompt-sync")()

// Program to add two Numbers
const sum = (first: number, second: number): number => {
    return Number(first) + Number(second)
}

const first: number = prom()
const second: number = prom()
console.log(`Sum of ${first} and ${second} is ${sum(first, second)}`)