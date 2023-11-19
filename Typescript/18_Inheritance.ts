// ? Inheritance

/* 
Inheriting the property and methods of base class
*/
interface Address {
    city: string,
    country: string
}

class Building1 {
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

    buldingmethod(): void {
        console.log("Called from building method")
    }
}

// Inheriting the Building1 class
class Flat extends Building1 {
    flat: number
    floor: number

    constructor(flat: number, floor: number, name: string, address: Address) {
        super(name, address)
        this.flat = flat
        this.floor = floor
    }

    print(): void {
        console.log("Called from flat class", this.address.city)
    }

    flatmethod(): void {
        console.log("Method called from flat own method")
    }
}

const ft: Flat = new Flat(1, 1, "Building", { city: "Boisar", country: "India" })
ft.print()
ft.buldingmethod()
ft.flatmethod()