
//let hasBlackjack = false;
//let isAlive = true;
let msg = document.getElementById("message-el");
let startBtn = document.getElementById("strt-btn");
let hitBtn = document.getElementById("hit-btn");
let resultMsg = document.getElementById("res");
let player = 0;
let dealer = 0;
let count = true;

function startGame() {
  console.log(player);
  hitBtn.style.display = "inline";
  startBtn.style.display = "none";
  if(count) {
    let firstCard = Math.random() * 10;
    let secondCard = Math.random() * 10;
    let thirdCard = Math.random() * 10;
    let fourthCard = Math.random() * 10;
    player = Math.floor(firstCard + secondCard);
    dealer = Math.floor(thirdCard + fourthCard);
    count = false;
    res.textContent = "Your Sum: "+ player + " | Dealer's Sum: " + dealer
  }
  else {
    player += Math.floor(Math.random() * 10);
    dealer += Math.floor(Math.random() * 10);
    res.textContent = "Your Sum: "+ player + " | Dealer's Sum: " + dealer
  }
  // Checking Dealers status
  if (checkStatus(dealer) == 1) {
    msg.textContent = "Dealer Wins! 😭. Want to play another round?";
    playAgain();
  }
  else if (checkStatus(dealer) == 2) {
    msg.textContent = "Dealer Went Bust! 🥳. Want to play another round? ";
    playAgain();
  }
  else {
      //Checking Player Status
      if (player < 21) {
        msg.textContent = "So far, so good 🧐";
      }
      else if (player == 21) {
        msg.textContent = "Wohoo! You got Backjack! 🥳. Want to play another round?";
        playAgain();
        //hasBlackjack = true;
      }
      else {
        msg.textContent = "You went Bust! 😭. Want to play another round?";
        playAgain();
        //isAlive = false;
      }
  }
}

function playAgain() {
  player = 0;
  dealer = 0;
  count = true;
  hitBtn.style.display = "none";
  startBtn.style.display = "inline";
}

function checkStatus(sum) {
  if (sum < 21) {
    return 0;
  }
  else if (sum == 21) {
    return 1;
  }
  else {
    return 2;
  }
}
