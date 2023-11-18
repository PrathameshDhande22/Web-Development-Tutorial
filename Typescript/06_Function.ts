// ? Function in typescript

/*
# Traditional Function with out return type
*/

// Declaring the Function
function greet(name: string, id: number): void {
    console.log(`Welcome ${name} your id is ${id}`)
}
// Calling the function
greet("Prathamesh", 123)


/*
# Arrow Function without Return type
*/
const greet1 = (name: string, id: number): void => {
    console.log(`Welcome ${name} your id is ${id}`)
}
greet1("Prathamesh", 123)


// # Function with return type
const sayHello = (name: string, id: number): string => {
    return `Welcome ${name} your id is ${id}`
}
console.log(sayHello("Prathamesh", 123))



/* 
# Exercise Question
*/
// ! Average of the numbers
const array: number[] = [4, 5, 3, 8, 1, 9]

function avg(arr: number[]): number {
    let su = 0
    for (let a of arr) {
        su += a
    }
    return Number(su / array.length)
}
console.log(`Average of array = ${array} is ${avg(array)}`)

// ! Max Numbers from the array
const maxNum = (arr: number[]): number => {
    let mx = Number.MIN_VALUE
    for (let a of arr) {
        if (mx < a) {
            mx = a
        }
    }
    return mx
}
console.log(`Max Number from array = ${array} is ${maxNum(array)}`)