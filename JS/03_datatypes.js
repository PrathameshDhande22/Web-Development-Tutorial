//primitive data types 7 types
let a = 344; //denotes the normal integer
let b = "Prathamesh" //denotes the string data type
let c = BigInt(455); //denotes the biginteger datatype
let d = null; //denotes nothing
let e = undefined; //denotes it is undefined you can also defined the undefined using 
let h; //this also denotes the undefined datatype
let f = Symbol("This is symbol") //denotes the symbol datatype
let g = true; //denotes the boolean datatype

console.log(a, b, c, d, e, f, g, h)

//non primitive data types
const item = { "Prathamesh": 20, "Nidhi": 14, 34: 10 } //denotes the object datatype just like the dictionary in python
console.log(item) //printing the object
console.log(item["Prathamesh"]) //printing specified value of the key prathamesh from the object
console.log(item[45]) //prints undefined bcoz the key is not present in the object
console.log(item.Prathamesh) //you can also print the value of the key using the dot operator

//to determine that variable is of which type we use typeof varname
console.log(typeof item)