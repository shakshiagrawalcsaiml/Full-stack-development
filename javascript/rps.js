function checkgame() {
    let player = document.getElementById("guess").value.toLowerCase();
    let result = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random()*3);
    let computer = result[random];
    if (player == computer) {
        console.log("tie!");
    }
    else if (
        (player == "rock" && computer == "scissors") ||
        (player == "paper" && computer == "rock") ||
        (player == "scissors" && computer == "paper")
    ) {
        document.getElementById("result").innerHTML="yuuppppy!🥳🎉🎊 you win🥳🎉🎊";
    }
    else {
        document.getElementById("result").innerHTML="oppppps!😉Better luck next time😉😉";
    }
}