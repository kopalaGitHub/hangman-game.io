const words = [
  "actor",
  "brain",
  "camera",
  "card",
  "education",
  "fashion",
  "finger",
  "guard",
  "head",
  "holiday",
  "impact",
  "job",
  "justice",
  "knife",
  "king",
  "male",
  "market",
  "partly",
  "quit",
  "quiet",
  "rank",
  "seat",
  "talk",
  "tea",
  "user",
  "volume",
  "war",
  "year",
  "yard",
  "zone",
];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const maxNumOfRandom = Object.keys(words).length;

const secretWord = document.getElementById("secretWord");
const guessWord = words[getRandomInt(maxNumOfRandom)];
console.log(guessWord);
let lifeCount = document.getElementById("lifeCounter");
lifeCount.innerHTML = 10;
for (let i = 0; i < guessWord.length; i++) {
  secretWord.innerText += " _";
}
function check() {
  const inputElement = document.getElementById("input");
  const value = inputElement.value;
  const index = guessWord.indexOf(value);
  console.log(secretWord.innerHTML);

  if (index > -1) {
    let newSecretWord = secretWord.innerText.split(" ");
    newSecretWord[index] = value;
    secretWord.innerText = newSecretWord.join(" ");
    if (secretWord.innerText.indexOf("_") == -1) {
      let winOrLoose = document.getElementById("winOrLoose");
      winOrLoose.innerHTML = "you win";
      winOrLoose.style.background = "green";
    }
  } else {
    if (lifeCount.innerHTML > 0) {
      lifeCount.innerHTML -= 1;
    } else {
      let winOrLoose = document.getElementById("winOrLoose");
      winOrLoose.innerHTML = "you loose";
    }
  }

  document.getElementById("input").value = "";
}
