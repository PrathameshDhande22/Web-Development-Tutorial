// ? Generics in TS

/* 
$ Concept are similar to java if you have studied passing the datatype in the function
*/

// Syntax : <T>

// Consider these are the arrays and we want to loop through it we can't create multiple functions for it.so to minimize these work we will use Generics

type ObjectCon = {
    name: string
}

const arr1: number[] = [4, 5, 2, 66, 88, 3]
const arrstr: string[] = ["a", "b", "c", "d"]
const arrbool: boolean[] = [true, false, true, false]
const arrobj: ObjectCon[] = [{
    name: "Prathamesh"
}, {
    name: "John"
}]

function loopOverArray<T>(arr: T[]): void {
    for (let a of arr) {
        console.log(a)
    }
}
loopOverArray<string>(arrstr)
loopOverArray<object>(arrobj)
loopOverArray<number>(arr1)
loopOverArray(arrbool)

// Generics using Arrow Function
const looping = <T>(arr: T[]): void => {
    console.log("Looping over the array ", arr)
    for (let a of arr) {
        console.log(a)
    }
}
looping<string>(arrstr)
looping(arrbool)
looping<object>(arrobj)


// # Multiple Variable type in Generics
/* 
Passing more than one variable in generics
*/
const add = <T, U>(a: T, b: U): void => {
    console.log(typeof a, typeof b)
}
add<string, number>("hello", 24)
add<number, boolean>(23, true)