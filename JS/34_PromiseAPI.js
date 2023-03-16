// usage of 6 static promise methods
// creation of 3 promise
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1")
    }, 1000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 2")
    }, 2000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 3")
    }, 3000)
})

// creation of promise with reject
// let p4=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(new Error("Error of value 4"))
//     },3000)
// })

// promise.all() method -> runs all the promises once and returns the resolve value in the form of array if error occurs then game over.
let alllprom = Promise.all([p1, p2, p3])
alllprom.then((value) => {
    console.log(value)
})

// promise.allsettled() method -> return the promises with status and value of object even if errors occured
let allprom = Promise.allSettled([p1, p2, p3])
allprom.then((value) => {
    console.log(value)
})

// promise.race() -> method Returns the first resolved promise value
let alprom = Promise.race([p1, p2, p3])
alprom.then((value) => {
    console.log(value)
})

// promise any()-> method 
let alprom1 = Promise.any([p1, p2, p3])
alprom1.then((value) => {
    console.log(value);
})

// promise.resolve(value)-> method
let prm1 = Promise.resolve(45)
prm1.then((value) => {
    console.log(value)
})

// promise.reject(value) -> method
let prm2 = Promise.reject(new Error("Hey this is the error"))
prm2.then((value) => {
    console.log(value)
}).catch((err) => {
    console.log("Error occured")
})