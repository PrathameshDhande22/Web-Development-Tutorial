// ? Interface Extras

/* 
$ You have seen the Interface in previous Tutorial but There are many functionality available with Interface lets see them
*/

interface Stud {
    id: number,
    rollno: number
}

// here we have created the Interface of the same name lets use it
interface Stud {
    name: string,
    school: string
}

// Using the Above interface using Extends
interface StudDetails extends Stud { }

const details: StudDetails = {
    id: 12,
    name: "Prathamesh",
    rollno: 34,
    school: "TVM"
}

console.log(details)

/* Lets extends the multiple interface */
interface College {
    cname: string,
    state: string
}

interface Complete extends Stud, College { }

const comDetails: Complete = {
    cname: "Hawkins College",
    id: 12,
    name: "John", rollno: 2,
    school: "kwn", state: "mh"
}

console.log(comDetails)

// Implementing the interface with methods
interface Color {
    name: string,
    // method with color parameter
    whichColor: (color: string) => void
}

// Implementing the interface in object
const paint: Color = {
    name: "Pink",
    whichColor: (color: string): void => {
        console.log("you selected color is ", color, "by chance color is ", paint.name)
    }
}
console.log(paint)
paint.whichColor("White")


// Implementing the interface in class
class Colorit implements Color {
    constructor(public name: string) {

    }
    whichColor = (color: string) => {
        console.log("color",color)
    };
}
const cs:Colorit=new Colorit("pink")
cs.whichColor("white")