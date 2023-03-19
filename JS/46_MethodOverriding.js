class Child {
    constructor(childname) {
        this.childname = childname
    }

    cry() {
        console.log("Child is Crying")
    }

    eating(type) {
        console.log("Child is eating " + type + " of vegetables")
    }
}

// overriding methods works only when any class is extended 
class Parent extends Child {
    parenting() {
        console.log("Parenting the Child")
    }

    // overridng the parent method
    cry() {
        console.log("Parent is crying some kind of funny")
    }

    // overriding the method with super keyword
    eating(type) {
        super.eating(type)
        console.log("Parents are happy")
    }
}

// creating new object of parent and child
let parent = new Parent("baccha")
let child = new Child("bada hai baccha")

// calling the cry method of parent class
parent.cry()

// calling the parenting method of parent class
parent.parenting()

// calling the eating method of parent class
parent.eating(4)

// calling the eating mehtod of child class
child.eating(1)