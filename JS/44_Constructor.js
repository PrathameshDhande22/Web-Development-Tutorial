class Game {
    // defining the constructor without arguments
    // constructor(){
    //     console.log("game initiated")
    // }

    // defining the constructor with arguments you can give as many arguments
    constructor(name) {
        this.name = name
    }

    whichGame() {
        console.log(`${this.name} is playing GTA V`)
    }

    play() {
        console.log("you started playing")
    }
}

let player = new Game()
player.play()
player.whichGame() // without passing the parameter to the Game is say as undefined

//passing the arguments to the class
let player2 = new Game("Prathamesh")
player2.whichGame()
player2.play()
console.log(player2.name)