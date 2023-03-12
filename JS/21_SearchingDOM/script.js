// getting the element by class name
const c = document.body.getElementsByClassName("first div")
console.log(c)

// changing the color and text of the first div 
c[0].style.color = "red"
c[0].style.fontSize = "20px"

// getting the element by its id
const d = document.getElementById("sometext")
console.log(d)

// changing its style
d.style.backgroundColor = "black"
d.style.color = "white"

// getting the element by its query selector all
const e = document.querySelectorAll(".big")
console.log(e)

// changing the first element header style
e[0].style.fontSize = "10px"

// getting the element by its query selector
const f = document.querySelector(".big")
console.log(f)

// changing its text
f.innerText = f.innerText + " New Header"

//getting the element by tag Name
const g = document.getElementsByTagName("span")
console.log(g)

// changing the style of the 2nd element
g[1].style.border = "1px solid black"

// getting the element by the input name
const h = document.getElementsByName("name")
console.log(h)

//changing the style
h[0].style.color = "black"
h[0].style.backgroundColor = 'grey'