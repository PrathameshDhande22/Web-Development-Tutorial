// getting the className for the element
let doc = document.body.firstElementChild
console.log(doc)
console.log(doc.className)

// getting the classlist
console.log(doc.classList)

//changing the class 
doc.className = "yellow"

// adding and removing the class in classlist
doc.classList.remove("yellow")  // removed the yellow class
doc.classList.add("red") // adding the red class

// toggle method 
doc.classList.toggle("red")
doc.classList.toggle("yellow")

// contains method
console.log(doc.classList.contains("first"))
console.log(doc.classList.contains("yellow"))