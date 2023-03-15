let timer = document.getElementsByClassName("timer")[0]
setInterval(() => {
    let date = new Date()
    let hrs = date.getHours()
    let median = hrs > 12 ? "PM" : "AM"
    hrs = hrs >= 13 ? hrs - 12 : hrs
    let min = date.getMinutes()
    let sec = date.getSeconds()
    timer.innerText = `${hrs}:${min}:${sec} ${median}`
}, 1000)

