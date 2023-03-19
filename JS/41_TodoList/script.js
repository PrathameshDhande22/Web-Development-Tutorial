function addTodo(todo) {
    let todos = document.getElementsByClassName("todos")[0]
    let mainspan = document.createElement("span")
    mainspan.className = "tod"

    let span = document.createElement("span")
    span.className = "todoname"
    span.innerText = `${todo}`

    let successbtn = document.createElement("button")
    successbtn.className = "btn btn-success"
    successbtn.innerHTML = `&#x2713;`

    let delbtn = document.createElement("button")
    delbtn.className = "btn btn-danger"
    delbtn.innerText = "Delete"

    let editbtn = document.createElement("button")
    editbtn.className = "btn btn-info bord"
    editbtn.innerText = "Edit"

    mainspan.appendChild(span)
    mainspan.appendChild(successbtn)
    mainspan.appendChild(delbtn)
    mainspan.appendChild(editbtn)

    todos.appendChild(mainspan)
}

const loading = () => {
    let count = localStorage.getItem("count")
    if (count == null) {
        localStorage.setItem("count", 0)
    }
    for (let i = 0; i < localStorage.getItem("count"); i++) {
        addTodo(localStorage.getItem(`todo${i}`))
    }
}

let addbtn = document.getElementsByName("todoadder")[0]
addbtn.addEventListener("click", (e) => {
    let count = localStorage.getItem("count")
    if (count == null) {
        count = 0
        console.log(count)
    }
    let todotext = document.getElementById("txt").value
    if (todotext == "") {
        alert("There should be some text to add todo")
    }
    else {
        addTodo(todotext)
        localStorage.setItem(`todo${count}`, todotext)
        count++;
        localStorage.setItem("count", count)
        document.getElementById("txt").value = ""
    }
})

let todoclear = document.getElementsByName("todoclear")[0]
todoclear.addEventListener("click", (e) => {
    let todos = document.getElementsByClassName("todos")[0]
    todos.innerHTML = ""
    localStorage.clear()
    location.reload()
})

var previous = ""
function todohandle(e) {
    const target = e.target.className
    if (target == "btn btn-success") {
        const todoname = e.target.parentElement.childNodes[0].classList
        todoname.toggle("checked")
    }
    else if (target == "btn btn-danger") {
        let tvalue = e.target.parentElement.childNodes[0].innerText
        e.target.parentElement.remove()
        let count = localStorage.getItem("count")
        for (let i = 0; i < count; i++) {
            if (localStorage.getItem(`todo${i}`) == tvalue) {
                localStorage.removeItem(`todo${i}`)
                localStorage.setItem("count", count - 1)
                break
            }
        }
    }
    else if (target == "btn btn-info bord") {
        let tvalue = e.target.parentElement.firstElementChild
        let last = e.target.parentElement.lastElementChild
        let todoText = e.target.parentElement.firstElementChild.innerText
        if (tvalue.className == "remove") {
            last.innerText = "Edit"
            let span = document.createElement("span")
            span.className = "todoname"
            span.innerText = `${tvalue.value}`
            console.log(previous)
            for (let i = 0; i < localStorage.getItem("count"); i++) {
                if (localStorage.getItem(`todo${i}`) == previous) {
                    localStorage.setItem(`todo${i}`, tvalue.value)
                }
            }
            tvalue.remove()
            e.target.parentElement.prepend(span)
        }
        else {
            previous = todoText
            tvalue.outerHTML = `<input type='text' value='${todoText}' class="remove">`
            last.innerText = "Update"
        }
    }
}
const checktodo = document.querySelector(".todos")
checktodo.addEventListener('click', todohandle)