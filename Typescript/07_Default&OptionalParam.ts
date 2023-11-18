// ? Default & Optional Parameters in Function

// # Default Parameters
const greet3 = (name: string, id: number = 1): string => {
    return `Welcome ${name} id = ${id}`
}
console.log(greet3("Prathamesh"))
console.log(greet3("Prashant", 23))

// # Optional Parameters
/* 
$ Optional Parameters are given using ? symbol  
*/
const greet4 = (name: string, id?: number): void => {
    if (id) {
        console.log(`Welcome ${name} id = ${id}`)
    }
    else {
        console.log(`Welcome ${name}`)
    }
}
greet4("Prathamesh")
greet4("Nidhi", 34)