// Exercise 1 : Guess the Number Game
const rand = Math.floor(Math.random() * 100) + 1;
let choice = 0
console.log(rand)
const prompt = require("prompt-sync")({ sigint: true })
while (true) {
    choice++;
    console.log("Choice no.", choice)
    let no = prompt("Enter a Number between [1-100] > ")
    console.log("You Selected ", no, ' Number')
    if (no < rand) {
        console.log("Number is Less, Please Select Another Number")
    }
    else if (no > rand) {
        console.log("Number is Greater Please Select Another Number")
    }
    else if (no == rand) {
        break;
    }
}
console.log(`Yeah ! You Found the Number in ${choice} Choices`)