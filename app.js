let userCount = 0;
let comCount = 0;
let ties = 0;
const resultDiv = document.getElementById("result");
document.getElementById("user-btns").addEventListener("click", (e) => {
  const userHand = Number(e.target.name);
  const comHand = Math.floor(Math.random() * Math.floor(3)) + 1;
  var hands = document.getElementsByClassName("hand");
  for (var i = 0; i < hands.length; i++) {
    hands[i].style.opacity = 0.2;
  }

  const userEl = document
    .getElementById("user-hand")
    .getElementsByClassName(userHand)[0];
  const comEl = document
    .getElementById("com-hand")
    .getElementsByClassName(comHand)[0];

  userEl.style.opacity = 1;
  comEl.style.opacity = 1;
  if (userHand === comHand) {
    ties++;
    document.getElementById("ties").innerText = ties;
    resultDiv.innerHTML = "IT'S A TIE!";
  } else {
    if (
      (userHand == 1 && comHand == 3) ||
      (userHand == 2 && comHand == 1) ||
      (userHand == 3 && comHand == 2)
    ) {
      userCount++;
      document.getElementById("user-score").innerText = userCount;
      resultDiv.innerHTML = "USER WINS!";
    } else {
      comCount++;
      document.getElementById("com-score").innerText = comCount;
      resultDiv.innerHTML = "COMPUTER WINS!";
    }
  }
});
