const reg = /very/g // regular expression should be declared between / and /
const text = "Prathamesh is very qute guy and very strong"

console.log(text.replace(reg, "not"))

const rg1 = /ver/g
console.log(text.replace(rg1, "a"))