let first = document.getElementById("first")

// getting the list of attributes in the first id element
console.log(first.attributes)

// getting the specified attribute value
console.log(first.getAttribute("class"))

// checking if that attribute is present on the element or not
console.log(first.hasAttribute("style"))
console.log(first.hasAttribute("class"))

// setting the attribute for a particular element
let second = document.getElementsByClassName("container2")[0]
second.setAttribute("hidden", "true") //setting the hidden attribute for class container2

// removing the attribute from the element
// here we are going to remove the class attribute form the first id element
first.removeAttribute("class")

// creating custom attribute but it should start with data-attribname in the element declaration
let third = document.getElementsByClassName("custom")[0]
// printing all the custom attribute with value
console.log(third.dataset)

// accessing the particular value from the custom attribute
console.log(third.dataset.player)
console.log(third.dataset.name)
console.log(third.dataset.game) // returns undefined if not that attribute