// creating promise under promise
//example promise chaining
let p1 = new Promise((resolve, reject) => {
    console.log("Created promise 1")
    resolve(1)
})

p1.then((value) => {
    console.log('Ended the promise with value ', value)

    // creating new promise using promise 
    return new Promise(function (resolve, reject) {
        console.log("Created the promise 2 under promise 1")
        resolve(2)
    })
}).then((value) => {
    console.log("Promise after promise 1  with value ", value)

    //creating promise using only return value
    return 3
}).then((value) => {
    console.log("Promise 3 with value created using only return value", value)
})