// ? Abstract Class in TS

// Defining the Abstract Class
abstract class Coach {
    constructor(protected type: string) { }
    abstract displayCoach(): void
    abstract totalSeats: () => number
}

// Extending the Abstract Class and implementing all methods inside the abstract class
class SleeperCoach extends Coach {
    constructor(protected type: string, protected seats: number) {
        super(type)
    }
    displayCoach(): void {
        console.log(`These Sleeper Coach Consists of ${this.seats} Seats`)
    }
    totalSeats = (): number => {
        return 100 * this.seats
    }
}

const s1:SleeperCoach=new SleeperCoach("sleeper",12)
s1.displayCoach()
console.log(s1.totalSeats())