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
  let count = 0;
  for (let color of colorArray) {
    count ++
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color,'white');
    newDiv.id = ('n' + count)

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(e) {
  let count = 0;
  const pick1 = {
    class: undefined,
    id: undefined,
  }
  const pick2 = {
    class: undefined,
    id: undefined,
  }
  // background color toggle
  e.target.classList.toggle('white')

  for (){
    if (i =1) {
      pick1.class = e.target.getAttribute('class')
      pick1.id = e.target.getAttribute('id')
     else if (i=2) {
      pick2.class = e.target.getAttribute('class')
      pick2.id = e.target.getAttribute('id')
    }
   
  }
  

    pick1.class = e.target.getAttribute('class')
    pick1.id = e.target.getAttribute('id')
  }
}
  
  //e.target.classList.toggle('color');
  //console.log(e.target.getAttribute('class'))


//e.target.getAttribute('class')
// when the DOM loads
createDivsForColors(shuffledColors);
