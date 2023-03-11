//creating the string variable
let name1 = "Prathamesh" //using double quotes
let name2 = 'nidhi' //using single quotes
let name3 = `dhande`//using backticks
console.log(name3)
console.log(name1)
console.log(name2)

//printing the length of the string
console.log("Length of name1 variable is ", name1.length)

//printing the specific character from the variable string just like the python string
console.log(name1[3]) //accessing the 4th character from variable name1

//template literals just like the python f string
let sen = `${name2} is sister of ${name1}`
console.log(sen)

//Methods
let user = "Prathamesh"

// converts the variable value string to Lowercase
console.log(user.toLowerCase())
// converts the variable value string to Uppercase
console.log(user.toUpperCase())
// prints the length of the user variable
console.log(user.length)
// return the string from the specified part only
console.log(user.slice(2, 4))
// return the remaining string from 5 to length
console.log(user.slice(5))
// return the string after replacing with user variable
console.log(user.replace('mesh', "m"))
let a = "    Dhande    "
console.log(a)
// returns the new string that removes the spaces from the 
console.log(a.trim())
//concatating the string with variable a
console.log(user.concat(a))
// another approach for concating the string
console.log(user + a)