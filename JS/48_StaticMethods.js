class Home{
    constructor(name){
        this.name=name
    }

    // creating static method using static keyword
    static HomecanRun(id){
        console.log("No Home , run static method")
    }

    // creating static method without arguments or parameters
    static Simplemethod(){
        console.log("Called the simple static method" + this.name)
    }
}

// calling the static method
Home.HomecanRun(343)
Home.Simplemethod()