// ? Getter and Setter in TS

class Laptop {
    private ram: number = 0

    private checkFirst(ram: number) {
        if (ram <= 0) {
            throw new Error("Ram cannot be Less than Zero")
        }
    }

    // setter 
    public set setRam(ram: number) {
        this.checkFirst(ram)
        this.ram = ram
    }

    // getter
    public get getRam(): number {
        this.checkFirst(this.ram)
        return this.ram
    }

}

const lp: Laptop = new Laptop()
// console.log(lp.getRam)
lp.setRam = 2
console.log(lp.getRam)