// creating promise
let prom = new Promise(function (resolve, reject) {
    console.log("Message form inside of promise")
    resolve(34)
})

// printing the resolve value of promise
console.log(prom)

// creating promise with resolve function
let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
        console.log("Promise working for p1")
        resolve("yes")
    }, 3000)
})

// creating promise with reject function
let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
        console.log("Promise working for p2")
        reject(new Error("Promise is declined"))
    }, 3000)
})

// console.log(p2)
console.log(p1)

// handling promise using then and catch
p1.then((value) => {
    console.log("Successfully executed p1 with value ", value)
})
p2.catch((error) => {
    console.log("Caught due to ")
})
p1.finally(() => {
    console.log("finally method of promise 1 is runing")
})

// multiple handler to promise runs independently
let func = () => {
    console.log("Working with promise 1 using 2nd handler")
}

p1.then(() => {
    console.log("Working with promise 1 using 1st handler")
})

p1.then(func)
