// spread syntax example
// consider we want to convert the array to objects
let arr = [1, 2, 3, 4]
console.log({ ...arr }) // it will return the object with key as index,value as array index 0 value

// passing variable
function sum(a, b, c) {
    return a + b + c
}

// passing all the arguments in a single statement
// the function requires 3 argument then it will take the first 3 value form the arr and then perform the function
console.log(sum(...arr)) // prints 6 bcoz 1+2+3=6

// playing with object 
let obj = {
    name: "newcommer",
    desc: "not",
    company: "TCS"
}
console.log(obj)
// overriding the key:value
console.log({ ...obj, name: "Prathamesh" }) // this will simply override it but doessnot change the object like this you can ovveride many key as given in the object
console.log(obj) // doesnot change

// overriding before ...obj
console.log({ company: "Wipro", ...obj }) //doesnot override 
console.log(obj)

// this type is mostly used in react
// if we try to declare the key which is not present in the object then it will add to it but doesnot change the object
console.log({ ...obj, def: "naht" })
console.log(obj)
