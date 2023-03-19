class MathCalculation {
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    // setter using the set keyword -> this function sets the value of a
    set valueA(aval) {
        this.a = aval
    }

    // getter using the get keyword -> this function gets the value of a
    get valueA() {
        return this.a
    }

    // same goes with this as setter setting the b value
    set valueB(bval) {
        this.b = bval
    }

    // same goes with this as getter getting the value of b
    get valueB() {
        return this.b
    }
}

let mat = new MathCalculation(1, 2)
// value of a and b before setting 
console.log(`a=${mat.a},b=${mat.b}`)

// setting the value of a
mat.a = 4
// setting the value of b
mat.b = 5

// values of a and b after setting
console.log(`a=${mat.a},b=${mat.b}`) // you can also get this value using obj.variablename 
console.log(`a=${mat.valueA},b=${mat.valueB}`) // using getter method or property

// instance of operator whether the object is of that specified class or not
console.log(mat instanceof MathCalculation)
let a = 0
console.log(a instanceof MathCalculation)