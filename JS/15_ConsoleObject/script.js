//tutorial on console object
console.log(console) //used for viewing what are the console methods

//loging in the console
console.log("Logging in console")

//printing the error in console
console.error("This is the error")

//assert in console if condition is false then assertion failed error will be called
console.assert(5 > 34)
// assert in console if condition is true
console.assert(5 > 2)

//clearing the console
console.clear() //prints in the console of chrome "console is cleared"

// printing the contents in the table order
obj = { a: 1, b: 2, c: 3, d: 4 }
console.table(obj)

// showing the warning
console.warn("This is the warning")

// showing the info note this and log are similar
console.log("this is log")
console.info("This is info") //only change is that gives the info symbol

// to calculate the time required for loop or any event using time and timeend method of console
console.time("p1") //here p1 is the label should be given in a string
for (let a = 0; a < 10; a++) {
    console.log(a)
    console.timeLog("p1")
}
console.timeEnd("p1")