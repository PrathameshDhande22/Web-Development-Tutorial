const arr = [10, 4, 51, 11, 34, 1]
// map method takes 3 argument value,index,array
let returnedarr = arr.map((value, index, array) => {
    console.log(value, index, array)
})

//this function simply returns the square of all the elements from array
returnedarr = arr.map((value) => {
    return value ** 2
})
console.log(returnedarr)

//filter method - filter the element according to given function
returnedarr = arr.filter((no) => {
    return no < 15
})
console.log(returnedarr)

//reduce method - reduces the array to a single value
returnedarr = arr.reduce((previous, current) => {
    return current + previous
})
console.log(returnedarr)
