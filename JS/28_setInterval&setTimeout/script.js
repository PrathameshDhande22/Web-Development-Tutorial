// example of settimeout
let a = setTimeout(function () {
    alert("This is the message")
}, 5000)

console.log(a)  //returns the timer id
clearTimeout(a) // removes the execution of the settimeout

// settimeout with argument
let b = setTimeout((a, b, c) => {
    console.log(a + b + c)
}, 2000, 1, 2, 3)
console.log(b)

// setinterval example
let c = setInterval(() => {
    alert("this is the message after every 3s")
}, 3000)
console.log(c) //returns timer id

clearInterval(c) // removes the execution of the interval

// setinterval with argument
let d = setInterval((a, b, c) => {
    alert(a + b + c)
}, 2000, 2, 2, 2);
console.log(d)