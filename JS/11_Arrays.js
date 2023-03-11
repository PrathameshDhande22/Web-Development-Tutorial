// creating arrays its just like the list in python
let marks = [10, 20, 39, 40]
// printing the arrays
console.log(marks)

// in js the arrays are considered as objects
console.log(typeof marks)

// printing the length of the arrays
console.log(marks.length)

// accessing the particular value in arrays
console.log(marks[2])

// changing the particular value in arrays
marks[2] = 10
console.log(marks)

// defining null,true,false and undefined value in arrays
let arr = [null, true, false, undefined]
console.log(arr)

// printing every element in the arrays using for of loopp
for (let a of marks) {
    console.log(a)
}

//for loops in arrays
console.log("Arrays using for in loops")
const loops = [10, 20, 30, 50]
// this loops will print the index keys of the arrays
for (let a in loops) {
    console.log(a)
}

// this loops will print the elements from the arrays.
for (let a of loops) {
    console.log(a)
}

// to create array from any other element but it should be iterable
console.log(Array.from("Prathamesh"))

//for each loop
// this loops will square element from the loops
loops.forEach((a) => {
    console.log(a ** 2)
})