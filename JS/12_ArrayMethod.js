let nums = [1, 2, 3, 4, 5]
console.log(nums)

//converting the array to string
console.log(nums.toString())

// join method joins all the array elements using a separator
console.log(nums.join("-"))

// pop method removes the last element from the array and returns the removed element
console.log(nums.pop(), nums)

// push method adds the element to the end of the array and returns the new array length
console.log(nums.push(34), nums)

// shift method - removes the first element and returns it
console.log(nums.shift(), nums)

//unshift method - adds the element to the begining and return the new arrays lenght
console.log(nums.unshift(45), nums)

// delete operator - deletes the element from the array but returns the empty item
delete nums[0]
console.log(nums)

// concat method - used to join the arrays to the given arrays
let a = [1, 2, 3, 4, 5]
let b = [6, 7, 8, 5]
let c = [10, 20, 30]
console.log(a.concat(b))

// you can concat more than one arrays
console.log(a.concat(b, c, nums))
console.log(a)

// sort method in arrays
b.sort()
console.log(b)
// sort method takes one argument that is function used to compare
// this function sort in descending order
let compare = (a, b) => {
    return b - a
}
b.sort(compare)
console.log(b)

// reverse method - reverses the arrays
nums.reverse()
console.log(nums)

// splice method- to add new items to an array
console.log(a)
let deleted = a.splice(0, 6, 10, 20)
console.log(a, deleted)

// slice method - cut out a peice from array and creates a new arrays
console.log(b)
console.log(b.slice(2)) //slices from index 2 to b.length-1 
console.log(b.slice(1, 4)) // slices from index 1 to index 3 , 4th index is not included