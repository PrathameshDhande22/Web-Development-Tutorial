let a = document.getElementsByClassName("container")[0]

// basic insertion using appendChild
let span = document.createElement("span")
span.className = "basicinfo"
span.innerHTML = "<h2>Basic</h2>"
a.appendChild(span)

// append method
let b = document.getElementsByClassName("first")[0]
let div = document.createElement("div")
div.className = "elementcreate"
div.innerHTML = "<b>This is div element inserted using Append Method</b>"
b.append(div)

// prepend method
let c = document.getElementsByClassName("second")[0]
let elem = document.createElement("span")
elem.innerHTML = "<h2>this is span element inserted in beginning of the element using prepend method</h2>"
c.prepend(elem)

// before method
let classes = document.getElementsByTagName("div")
let newelem = document.createElement("span")
newelem.innerHTML = "<h6>This is the span element used before method and its not inside the class name third</h6>"
classes[4].before(newelem)

// after method
let elemmentnew = document.createElement("span")
elemmentnew.className = "aftermethod"
elemmentnew.innerHTML = "<b><i>This is the span element, used after method and its not inside the class name fourth and it is after the class is declared </i></b>"
classes[5].after(elemmentnew)

// replaceWith method
let newelement = document.createElement("div")
newelement.className = "replacemethod"
newelement.innerHTML = "<h3>This is the text which is going to be replace with fifth class</h3>"
classes[6].replaceWith(newelement)

// removing the element from the document or removing the node from the document or dom using remove method
classes[7].remove()

// insertAdjacent html/element/text method
classes[7].insertAdjacentHTML("afterbegin", "<div>After begin</div>")
classes[7].insertAdjacentHTML("afterend", "<div>After End</div>")
classes[7].insertAdjacentHTML("beforeend", "<div>Before End</div>")
classes[7].insertAdjacentHTML("beforebegin", "<div>Before Begin</div>")