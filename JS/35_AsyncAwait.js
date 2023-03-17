// async function creation using basic or simple function
async function pratham() {
    return 2
}

// the above function returns the promise means async declared function always returns promise
pratham().then((value) => {
    console.log("The value of async function pratham is ", value)
})

// async function creation using arrow function
let func = async () => {
    return 3
}
func().then((value) => {
    console.log("The value of async function func is ", value)
})

// creating the another function to runs the program simultaneously
const cherry = async () => {
    console.log("Cherry function is running")
}

// async function with await keyword
const Fetch = async () => {
    // creating first promise
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Value of P1")
        }, 2000);
    })

    // creating second promise
    let p2 = new Promise((resolve, reject) => {
        setTimeout(function val() {
            resolve("Value of P2")
        }, 3000)
    })
    cherry()

    // await keyword - in this case this waits for the promise 1 to resolve or fullfilled but javascript is not wait it executes the other code till 
    let details1 = await p1
    cherry()
    let detials2 = await p2
    return { details1, detials2 }
}

// async function always returns the promise 
// this prints the value of the resolve in fetch method
Fetch().then((value) => {
    console.log("Value of the Fetch method details ", value)
})