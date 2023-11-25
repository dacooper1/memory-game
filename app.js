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

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
let colorOne = undefined;
let idOne = undefined;
let colorTwo = undefined;
let idTwo = undefined;
turnedOver ++




    if (turnedOver <= 2) {
        setTimeout(function(){
            event.target.style.backgroundColor = 'white'
            }, 2000) 
        
        event.target.style.backgroundColor = event.target.getAttribute('class');
            if (turnedOver === 1) {
                let first = event.target
                colorOne = event.target.getAttribute('class')
                idOne = event.target.getAttribute('Id')
            } else if (turnedOver === 2) {
                let second = event.target
                colorTwo = event.target.getAttribute('class')
                idTwo = event.target.getAttribute('Id') 
            } 
            console.log(first)
            console.log(second)
            
            // if (pickOne.color !== pickTwo.color || pickOne.id === pickTwo.id){
            //     setTimeout(function(){
            //         event.target.style.backgroundColor = 'white'
            //         }, 2000)
            // } else if (pickOne.color === pickTwo.color && pickOne.id === pickTwo.id){
            //     event.target.style.backgroundColor = event.target.getAttribute('class')
            // }
            console.log(turnedOver)
            // console.log(colorOne)
            // console.log(idOne)
            // console.log(colorTwo)
            // console.log(idTwo)
            // colorOne = '';
            // idOne = '';
            // colorTwo = '';
            // idTwo = '';
            
        }
        
        
       
}


// when the DOM loads
createDivsForColors(shuffledColors);
