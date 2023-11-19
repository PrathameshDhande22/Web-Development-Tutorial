// ? Tuples

/* 
# Tuples are data structure that store data of given type and has fixed elements
*/

// Declaring the tuples
// $ This means that the array can store the value of string, number and boolean
type ViewPerson = [string, number, boolean]

const personv1: ViewPerson = ["Prathamesh", 12, true]
console.log(personv1)

// ? Readonly Property

// $ Declaring the tuples as readonly property as we don't want any elements inside the array to change
type ViewPersonRead = readonly [string, number, boolean]
const personv2: ViewPersonRead = ["Prashant", 34, false]
console.log(personv2)