const prompt = require("prompt-sync")()
let a = prompt("Enter your Age :") //returns the string
//lets convert it into integer or number
a = Number.parseInt(a);
//checking the age and status of young using nested if else
if (a > 0 && a <= 10) {
    console.log("You are child")
}
else if (a > 10 && a <= 20) {
    console.log("You are Teenager")
}
else if (a > 20 && a <= 40) {
    console.log("You are Job Seeker")
}
else {
    console.log("You are retired")
}

//switch statement
let b = 34
switch (b) {
    case 1:
        console.log("One")
        break;
    case 2:
        console.log("Two")
        break;
    case 3:
        console.log("Three")
        break;
    default:
        console.log("Not a Number")
}

//this all are basic for the programmer