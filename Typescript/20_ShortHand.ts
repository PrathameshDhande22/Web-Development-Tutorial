// ? Shorthand Property 

/* 
# You know when we where creating the constructor or creating the class we need to define first it's properties/variable then call the constructor then assiging the variable to the class variable using this.variable. 
# But consider we need to add more variable we can't write multiple times so to overcome these we implement the variable in the constructor parameter only.
*/

class Example {
    // No need to define the properties
    // Implementing directly into the constructor
    constructor(public exno: number, private exname: string) { }
}

const ex1: Example = new Example(1, "hello")
console.log(ex1.exno)