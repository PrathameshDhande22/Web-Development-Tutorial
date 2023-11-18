// ? Method Call Signature

/* 
# Method call signature is simply defining the method or function structure in the type of the name.
*/

//$ Creating the Method call signature
type Student = {
    name: string;
    age: number;
    // here we defined the method structure having the greet method name country as parameter and return type as string
    greet: (country: string) => string;
    sayhello: () => void
}

//$ Implmenting the type
const st1: Student = {
    age: 21,
    name: "Prathamesh",
    //$ implemented the function
    greet(country) {
        return `Welcome ${st1.name} to ${country}`
    },
    sayhello: () => {
        console.log("Hello " + st1.name)
    },
}

// $ Calling the function

console.log(st1.greet("India"))
st1.sayhello()