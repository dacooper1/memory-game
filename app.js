const gameContainer = document.getElementById("game");

let card1 = null;
let card2 = null;
let cardsMatched = 0;
let selected = false;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "pink",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "pink"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
    let uniqueId = 0
  for (let color of colorArray) {
    uniqueId ++
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.id = (uniqueId)
    // Only to help me implement the handleCardClick function, will be removed
    newDiv.innerText = color

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
 

// TODO: Implement this function!
let flipped = document.querySelectorAll('.flipped')
let matched = document.querySelectorAll('.matched');

let check1 = undefined;
let check2 = undefined;

function handleCardClick(e) {
  if (selected) return;
  if ((e.target.classList[1]) === "flipped")return;
  e.target.classList.add('flipped')
  e.target.style.backgroundColor = e.target.classList[0]

  if (!card1) {
  card1 = e.target
  check1 = card1.classList[0]
  console.log('one' + check1)
  } else {
    card2 = e.target
    check2 = card2.classList[0]
    selected = true
    console.log('two' + check2)
    if (check1 === check2 && card1.id != card2.id) {
      card1.classList.add('matched')
      card2.classList.add('matched')
      cardsMatched += 2
      card1 = null;
      card2 = null;
      setTimeout(function(){
        selected = false
      }, 500)
    } else if (check1 !== check2){
      setTimeout(function(){
      card1.style.backgroundColor = 'white';
      card2.style.backgroundColor = 'white';
      card1.classList.remove('flipped')
      card2.classList.remove('flipped')
      card1 = null;
      card2 = null;
      selected = false
      },1000)
      console.log('no match')
    }
  }
   gameOver();
}

let resetButton = document.createElement('button')

function gameOver(){
 if (cardsMatched === COLORS.length) {
    resetButton.innerText = "PLAY AGAIN"
    resetButton.id = 'reset'
    gameContainer.append(resetButton)
    }
   }


 function resetGame(){
  document.location.reload()
    }

resetButton.addEventListener("click",function(){
  resetGame();
    })




    



// when the DOM loads
createDivsForColors(shuffledColors);
