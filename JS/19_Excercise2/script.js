const obj = { 1: "s", 2: "g", 3: "w" }
let canPlay = true;
let score = 0;
while (canPlay) {
    let computer = Math.floor(Math.random() * 100 / 25)
    computer = computer == 0 ? computer + 1 : computer
    console.log(computer)
    const choice = prompt("Make a Choice [s-snake,g-gun,w-water]: ")
    if (choice == obj[computer]) {
        alert("Match Tied !")
    }
    // computer winning
    else if (choice == "s" && obj[computer] == "g") {
        alert("You Lost")
    }
    else if (choice == "g" && obj[computer] == "w") {
        alert("You Lost")
    }
    else if (choice == "w" && obj[computer] == "s") {
        alert("You Lost")
    }
    // user winning
    else if (choice == "s" && obj[computer] == "w") {
        alert("You Win")
        score += 1;
    }
    else if (choice == "g" && obj[computer] == "s") {
        alert("You Win")
        score += 1;
    }
    else if (choice == "w" && obj[computer] == "g") {
        alert("You Win")
        score += 1;
    }
    else {
        alert("You entered Some Wrong Text")
    }
    canPlay = confirm("Do You Want to Play Again")

}
alert(`Your Score is ${score}`)
document.getElementsByClassName("winner")[0].innerHTML = `Your Score is ${score}`