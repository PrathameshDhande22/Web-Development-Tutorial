// setting the key and value in the localstorage
localStorage.setItem("name", "prathamesh")
localStorage.setItem("rollno", "08")
localStorage.setItem("cllg", "st.john")
localStorage.setItem("0", "name kya hai")

// getting the value of the given key from the localstorage
console.log(localStorage.getItem("name"))
// returns null if the given key is not in the localstorage
console.log(localStorage.getItem("st"))

// removing the key and value from the local storage
localStorage.removeItem("0")

// clearing the localstorage using clear method
localStorage.clear()

// setting the localstorage value
localStorage.setItem("name", "prathamesh")
localStorage.setItem("rollno", "08")
localStorage.setItem("cllg", "st.john")

// return the total no of key-value pair in the local storage
console.log(localStorage.length)

// get the key from the localstorage at a given position
console.log(localStorage.key(2))
// returns null if no key is present at a particular index position
console.log(localStorage.key(4))

// sessionstorage is same as localstorage only difference is it stores the data till the tab is open after tab is close gone data