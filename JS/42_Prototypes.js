// setting the prototypes using __proto__ property.

let a = {
    name: "Prathamesh",
    rollno: "08"
}

console.log(a)

// making the prototype for object a
let p = {
    run: () => {
        console.log("From p oject this is running")
    }
}

// setting the prototype for a as p
a.__proto__ = p

// running the run method from a object
a.run()

// setting the prototype for object p
let pkaproto = {
    cllg: "St.john",
    degree: "BE"
}

p.__proto__ = pkaproto

// getting the degree from the pkaproto using a object
console.log(a.name)
console.log(a.degree)