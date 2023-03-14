// console.dir() function simply returns the element as an object with its properties
console.dir(document.getElementById("first"))

// tagName and nodeName
console.log(document.getElementById("first").nodeName) // returns the nodename
console.log(document.getElementById("first").tagName) // returns the tagname

// innerHtml
console.log(document.getElementById("first").innerHTML) // prints the html + text inside the specified element

// changing the inner html
let doc = document.getElementById("first")
doc.innerHTML = "<i>Hey bro</i>"

// outerhtml
console.log(doc.outerHTML) // returns the whole html with the specified element

// changing the outerhtml
doc.outerHTML = '<span id="first">Hey Baby<b>This is the Prathamesh</b></span>'

// data property
console.log(doc.firstElementChild.data)

// text content property
console.log(document.body.textContent) // returns the text of the specified element/tag

// hidden property
let doc1 = document.getElementById("second")
console.log(doc1)

// changing the hidden property
doc1.hidden = false;