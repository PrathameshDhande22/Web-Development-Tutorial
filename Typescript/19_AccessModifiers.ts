// ? Access Modifiers in TS

/* 
# same concept like in java which have public, private and protected access modifier
*/

/* Implmenting those Modifier class */
class Car {
    protected chasis: number
    private company: string
    public carName: string

    constructor(chasis: number, company: string, carName: string) {
        this.carName = carName
        this.chasis = chasis
        this.company = company
    }

    private CarDoc() {
        console.log("This car belongs to company",this.company)
    }

    /**
     * PrintCar
     */
    public PrintCar() {
        console.log("Car will be Ready")
    }
}

const car1:Car=new Car(12344,"Fiat","Racing")
car1.PrintCar()