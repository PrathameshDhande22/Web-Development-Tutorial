// try and catch syntax
try {
    console.log(a)
}
catch (error) {
    console.log(error) // script will not stop 
}

// catching the specified error using try and catch
try {
    console.log(abbbb)
}
catch (ReferenceError) {
    console.log("ReferenceError")
}

// finally clause - these clause runs whenever the error appears or not
// finally clause when error appears
try {
    console.log(a)
}
catch (e) {
    console.log(e)
}
finally {
    console.log("This Runs")
}

// finally clause when error doesn't appear
try {
    console.log("a")
}
catch (e) {
    console.log(e)
}
finally {
    console.log("Without error finally is running")
}

// finally clause when function returns the value in try only
const fun = () => {
    try {
        console.log("a")
        return "a"
    }
    catch (e) {
        console.log(e)
    }
    finally {
        console.log("after Returning the function finally is running")
    }
}
console.log(fun())