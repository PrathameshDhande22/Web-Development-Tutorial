let d = document.getElementById("id1")

// matches method return true if it matches the given css selector
console.log(d.matches(".box"))
console.log(d.matches(".class"))

// contains method returns true if that element is inside that element
let sp1 = document.getElementById("sp1")
console.log(d.contains(sp1))
console.log(sp1.contains(d))
console.log(d.contains(d))

// closest method
console.log(sp1.closest(".box"))
console.log(d.closest("body"))