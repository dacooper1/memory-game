const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
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
 let picks = {};

// TODO: Implement this function!
function handleCardClick(e) {
    e.target.style.backgroundColor = e.target.getAttribute('class')
    console.log(e.target.getAttribute('class'))
    
 if (Object.keys(picks).length == 0){
    picks.colorOne = (e.target.getAttribute('class'))
    picks.idOne = (e.target.getAttribute('id'))
} else if (Object.keys(picks).length > 2 <5) {
    picks.colorTwo = (e.target.getAttribute('class'))
    picks.idTwo = (e.target.getAttribute('id'))
    let first =  document.getElementById(picks.idOne);
    let second = document.getElementById(picks.idTwo)

        if (picks.colorOne !== picks.colorTwo || picks.idOne == picks.idTwo){
            setTimeout(function(){
                first.style.backgroundColor = 'white'
                second.style.backgroundColor = 'white'
            }, 1000)
              
        } else if (picks.colorOne == picks.     colorTwo && picks.idOne != picks.idTwo) {
           first.style.backgroundColor = picks.colorOne
            second.style.backgroundColor = picks.colorTwo
        }
   
}
console.log(picks)
    console.log(Object.keys(picks).length)
}



// when the DOM loads
createDivsForColors(shuffledColors);
