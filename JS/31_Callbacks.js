// asynchronous programming
console.log("Start")
// settimeout let understand and runs the other script and after the 3s if executes
setTimeout(() => {
    console.log("Settimeout function")
}, 3000)
console.log("End")

// callback function without parameter
const a = (src, callback) => {
    console.log("Src is being loaded")
    callback()
    console.log("Src is loaded")
}

let call = () => {
    console.log("Inside the callback function")
}
a("src", call)

// callback function with parameter
function name(src, callback) {
    console.log("Calling the main name fuction")
    callback("prathamesh")
    console.log("Outside the main name function")
}

function greet(n) {
    console.log("Calling the callback function with argument as " + n)
}

name("src", greet)

// handling error in callback function
function say(src, callback) {
    console.log("Calling the main say function")
    if (src == "s") {
        callback(new Error("The s was passed"), "prathamesh")
    }
    else {
        callback(null, "prathamesh")
    }
}

function grr(err, nam) {
    if (err) {
        // handling error
        console.log("Error occured due to passing of s")
        // printing error
        console.log(err)
        return
    }
    console.log("Error was passed and not passed by " + nam)
}

say("s", grr)