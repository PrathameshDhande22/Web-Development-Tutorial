// IIFE stands for Immediately Invoked Functions
// we create function name(){} and call it name() it becomes annoying using this we can create the function and directly them
(() => {
    setTimeout(function () {
        console.log("Printing")
    }, 4000)
})()

// (function(){
//     console.log("calling from IIFE")
// }
// )()