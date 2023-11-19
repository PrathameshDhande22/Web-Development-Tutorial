// ? Class and Constructor in TS

/* 
Object Oriented Programming already covered in many Tutorial
*/

interface Address {
    city: string,
    country: string
}

// Class we created here
class Building {
    name: string
    address: Address

    // we initialized the constructor over here
    constructor(name: string, address: Address) {
        this.address = address
        this.name = name
    }

    // we defined the method over here
    print(): void {
        console.log(`${this.name} ${this.address.city}`)
    }

    // method using arrow function
    check = (): void => {
        console.log("Checking")
    }
}

// Creating the object of the class
const blg1 = new Building("Krishna", { city: "Boisar", country: "India" })
// calling the method
blg1.print()
blg1.check()
