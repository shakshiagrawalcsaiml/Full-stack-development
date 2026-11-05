let randomNumber = Math.floor(Math.random() * 100) + 1;
function checkNumber(){
 let guess = Number(document.getElementById("guess").value);

    if (guess < 1 || guess > 100) {
        document.getElementById("result").innerHTML =
            "Please enter a number between 1 and 100";
    }
    else if (guess === randomNumber) {
        document.getElementById("result").innerHTML =
            "🎊Yupppppy!🥳🎉🎊 You guessed the correct number!🏆";
    }
    else if (guess < randomNumber) {
        document.getElementById("result").innerHTML =
            "🤏☝️Too low!😉 try next time  a bigger number📉⬆️";
    }
    else {
        document.getElementById("result").innerHTML =
            "🤯Too high!😉 try next time  a smaller number👇📈⬇️";
    }
}