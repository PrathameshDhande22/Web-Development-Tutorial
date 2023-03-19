// creating the base class
class Base {
    constructor(name, id) {
        this.name = name
        this.id = id
    }
    run() {
        console.log("Running the base Class with id " + this.id + ' and name as ' + this.name)
    }
}

// creating the mainclass using the baseClass
class MainClass extends Base {
    walk() {
        console.log(this.name + " is walking")
    }
}

// creating the objects of base class and mainclass
let base = new Base("prathamesh", 344)
let mainclass = new MainClass("prathame", 122)

// calling run mehtod from mainclass
mainclass.run()

// calling the run method from base class
base.run()

// calling the walk method from mainclass
mainclass.walk()

// but you cannot call the walk method using base class
base.walk()