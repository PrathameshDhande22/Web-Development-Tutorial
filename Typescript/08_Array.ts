// ? Array in Typescript

/* 
Array can be declared using 3 ways and to use the array type annotations use
? datatype[]
simple 
*/

// # Array using Square Brackets
const arr: number[] = [1, 2, 3, 4] // Number array
console.log(arr)
const bools: boolean[] = [true, false, true] // Boolean Array
const nos: [number, number] = [1, 4]  // Array with how many elements

// # Arrays using Array Constructor
const ar = new Array(1, 2, 3, 4, 5)

// # Arrays using Array.of method
const ar1 = Array.of("a", 'b', 'c')

// Typescript automatically assigns the datatype to the variable using type inference
// Same operations and methods just like the javascript

console.log(ar)
// # Maps in Typescript
const square: number[] = ar.map((value: number) => {
    return value ** 2
})
console.log(square)

// # Filter in Typescript
const gethan3: number[] = ar.filter((value: number) => {
    return value > 3
})
console.log(gethan3)

// # Reduce in Typescript
const reex: number = ar.reduce((prev: number, curr: number) => {
    return curr * prev
})
console.log(reex)