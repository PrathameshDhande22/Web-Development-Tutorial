// ? Static Keyword in TS

/* 
$ It refers to accessing the variable and method without the creating the object of that class.
*/

class Work {
    // creating the static variable
    public static workHour: number = 10

    // creating the static method
    public static countinueWork(currTime: number): number {
        return this.workHour + currTime
    }
}

// Calling the static variable and method without creating the object
console.log(Work.workHour)
console.log(Work.countinueWork(11))