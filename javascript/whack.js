// var random=0,score=0;
// function start(){
//    setInterval(randomselect(),600);
// }
// function randomselect(){
//      let random=Math.floor(Math.random()*8)+1;
//      let btn=document.getElementById(random.toString());
//      let span=btn.querySelector("span");
//      span.classList.toggle("hide");
//      setTimeout(()=>{
//           span.classList.toggle("hide");
//      },500);
// }
// start();
// let btns = document.querySelectorAll("button");
// btns.forEach((btn)=>{
//      btn.addeEventlistener('click',(e)=>{
//           let btnid=e.currentTarget.getAttribute("id");
//           if(btnid==random){
//                score++;
//      console.log(score);}
// })
// });

var random = 0;
var score = 0;
var time = 30;
var gameInterval;
var timerInterval;
var gameStarted = false;

var buttons = document.querySelectorAll(".hole");

function randomselect() {
    // Hide the mole from all holes
    buttons.forEach(function(btn) {
        btn.innerHTML = "🕳️";
    });

    // Select a random hole from 0 to 8
    random = Math.floor(Math.random() * 9);

    // Show the mole in that hole
    buttons[random].innerHTML = "🐹";
}

document.getElementById("start").addEventListener("click", function() {
    if (gameStarted) {
        return;
    }

    gameStarted = true;
    score = 0;
    time = 30;

    document.getElementById("score").innerHTML = score;
    document.getElementById("timer").innerHTML = time;

    randomselect();

    // Change the mole every 600 milliseconds
    gameInterval = setInterval(randomselect, 900);

    // Decrease the timer every second
    timerInterval = setInterval(function() {
        time--;
        document.getElementById("timer").innerHTML = time;

        if (time === 0) {
            clearInterval(gameInterval);
            clearInterval(timerInterval);

            buttons.forEach(function(btn) {
                btn.innerHTML = "🕳️";
            });

            alert("Game Over! Your score is " + score);
            gameStarted = false;
        }
    }, 1000);
});

// Check which hole the player clicks
buttons.forEach(function(btn, index) {
    btn.addEventListener("click", function() {
        if (gameStarted && index === random && btn.innerHTML === "🐹") {
            score++;
            document.getElementById("score").innerHTML = score;

            btn.innerHTML = "🕳️";
        }
    });
});
