class Parent {
    // ...args -> represents that you can give many as much as possible arguments to the function/constructor/method it returns the array of arguments
    constructor(...args) {
        console.log(args)
    }
}

// passing the many parameters
let parent = new Parent(1, 2, 3, 4)

class Employee {
    // employee constructor or you can say parent constructor
    constructor(name) {
        console.log("Called the Employee Constructor")
    }
}

class Programmer extends Employee {
    // if constructor is not defined in the this class tnen it will use the parent class constructor which is Employee class
    // overriding the constructor
    constructor(name) {
        super(name) // need to call this line in order to override the constructor this will call the employee constructor
        console.log("Called the Programmer Constructor")
        this.name = name
        console.log(name)
    }
}

// creating object of class Programmer
let program = new Programmer("Prathamesh")
