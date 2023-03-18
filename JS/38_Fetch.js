// fetch method - returns the promise of the response
let prom = fetch("https://kontests.net/api/v1/sites")
prom.then((value) => {
    // the first then returns the Response object containing several properties
    console.log(value)

    // returns the headers for the response for the given url
    console.log(value.headers)

    // returns the status of the response
    console.log(value.status)

    // boolean returns true if no error in the server
    console.log(value.ok)

    // json() method returns the another promise
    return value.json()
}).then((value) => {
    console.log(value)
}).catch((err) => { // if error occur while parsing the json this will be run
    console.log("Error appeared while parsing")
})

// fetch method with headers
let pe = fetch('url', {
    headers: {
        Authentication: "hell"
    }
}).then((val) => {
    console.log(val)
}).catch((err) => {
    console.log("Error appeared")
})

// post request with fetch using async and await keyword 
// async and await always return a promise
const getData = async () => {
    // options to be given to the fetch method
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            title: "Prathamesh",
            body: "dhande",
            user: 33
        })
    }
    let repsonse = await fetch("https://jsonplaceholder.typicode.com/posts", options) // this returns the response
    let js = await repsonse.json() // this return the json
    console.log(js)
}

getData()