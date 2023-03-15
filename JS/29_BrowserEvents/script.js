// handling onclick event using javascript
let a = document.getElementsByClassName("second")[0]
a.onclick = () => {
    alert("Calling using js file")
}

// addevent listener
let x = (ev) => {
    alert("Message by using event handler first")
}

let b = (ev) => {
    alert("Message by using event handler second")
}

// both event will be called
let btn = document.getElementById("btn")
btn.addEventListener("click", x)
btn.addEventListener("click", b)

// example of event object
let btn1 = document.getElementById("btn1")
let d = function (e) {
    console.log(e)  //printing the event object
    console.log(e.target) // gets the target element on which the event is handled
    console.log(e.clientX) // returns the cursor x position when the btn is clicked
}
btn1.addEventListener("click", d)

// removeeventlistener
let prom = prompt("Enter yes or no ")
if (prom == "no") {
    btn.removeEventListener("click", b) // removing the event listener if no is given as input
}

// there are more events refer mdn docs