// accessing all the cookies in the website
console.log(document.cookie) // result will be empty string because no cookies has been set

// setting the cookie
document.cookie = "name=prathamesh"
document.cookie = "cllg=stjohncllgofengineeriing"
document.cookie = "rollno=uu"

// accessing the all cookie
console.log(document.cookie)

// we cannot store the special characters as a cookie so to do it we use encodeURIComponent
document.cookie = "A#;#=prath!#@_"
console.log(document.cookie)
document.cookie = encodeURIComponent("A#;#=prath!#@_")

console.log(document.cookie)

// to access the encoded cookie we will use decodeURIComponent method
console.log(decodeURIComponent("A#;#=prath!#@_"))