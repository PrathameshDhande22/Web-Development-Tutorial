// destructuring example
let arr = [1, 2, 3]
let [a, b, c] = arr
console.log(a, b, c) // stores the 1 in a,2 in b and 3 in c

// another example
let arr1 = [1, 2, 3, 4, 5]
let [x, y] = arr1
console.log(x, y) // stores 1 in x,2 in y and rest are ingnored but it we

let [p, q, r, s] = arr
console.log(p, q, r, s) // here s will return undefined bcoz there is no 4th value in the arr

// another example to store the remaining values when 2 variables are given
let [m, n, ...rest] = arr1
console.log(m, n, rest) // as usual stores 1 in m,2 in n and rest returns the array of the remaining no i.e [3,4,5]

// another example to store the first value and store values from 4 to 5 in the array
let [d, , , ...rem] = arr1
console.log(d, rem) // so there it will store 1 in d and in blank we will not consider that elements 
// we are forgetting the 2 values from the arr which are denoted by 2 blank[2,3]  ,[4,5] are stored in rem variable in the form of array

// another example with object
let obj = { l: 1, t: 2, u: 3 }
let { l, t, u } = obj
console.log(l, t, u) // the key should be same while destructing object it returns the specified key ka value otherwise undefined if not given in object
// if ...res then it will give remaining value as the object with their values