// creating the class
class FormData {

    // creating the method
    submit() {
        console.log("Submitted the form")
    }

    cancel() {
        console.log("Called the cancel method so form is canceled")
    }

    // method with parameter
    fillDetails(name, id) {
        // storing the name and id in the this.name and id which can be used any where in the class
        this.name = name
        this.id = id
    }

    getDetails() {
        // using this in the method
        console.log(`${this.name} Initiated the Form filling Process with ${this.id}`)
    }
}

// creating two different objects from class Fromdata
let prathamesh = new FormData()
let nidhi = new FormData()
// note : prathamesh and nidhi are now objects for the FormData class and they have separate methods

// calling the fillDetails method for both objects
prathamesh.fillDetails("Prathamesh", 102)
nidhi.fillDetails("Nidhi", 101)

// calling the getDetails method
prathamesh.getDetails()
nidhi.getDetails()

// calling the submit method for prathamesh and cancel method for nidhi
console.log(prathamesh)  // represents the class as the object
prathamesh.submit()
nidhi.cancel()