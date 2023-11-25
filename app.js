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
    newDiv.style.backgroundColor = color

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(e) {
 if (sessionStorage.length < 3){
    // sessionStorage.setItem('targetOne', JSON.stringify(e.target))
    sessionStorage.setItem('colorOne', JSON.stringify(e.target.getAttribute('class')));
    sessionStorage.setItem  ('idOne', JSON.stringify(e.target.getAttribute('id')));

} else if (sessionStorage.length > 3 < 5) {
    // sessionStorage.setItem('targetTwo', JSON.stringify(e.target))
    sessionStorage.setItem('colorTwo', JSON.stringify(e.target.getAttribute('class')));
    sessionStorage.setItem('idTwo', JSON.stringify(e.target.getAttribute('id')));
        if (sessionStorage.getItem('colorOne') !== sessionStorage.getItem('colorTwo') || sessionStorage.getItem('idOne') == sessionStorage.getItem('idTwo')){
            // setTimeout(function{
            //     e.target
            // })
            
        }
   
}


console.log(sessionStorage)
console.log(sessionStorage.length)

}


// sessionStorage.clear();
// localStorage.setItem('pairs',JSON.stringify(data));

// let localStorageLength = JSON.parse(localStorage.getItem('toDoList')).length

// if (((JSON.parse(localStorage.getItem('toDoList'))[k]) === check)) {
//     let updated = data.indexOf((JSON.parse(localStorage.getItem('toDoList'))[k]))
//     data.splice(updated,1)
//     localStorage.setItem('toDoList',JSON.stringify(data))    
// }

// if (turnedOver <= 2) {
//     setTimeout(function(){
//         event.target.style.backgroundColor = 'white'
//         }, 2000) 
    
//     event.target.style.backgroundColor = event.target.getAttribute('class');
//         if (turnedOver === 1) {
//             let first = event.target
//             colorOne = event.target.getAttribute('class')
//             idOne = event.target.getAttribute('Id')
//         } else if (turnedOver === 2) {
//             let second = event.target
//             colorTwo = event.target.getAttribute('class')
//             idTwo = event.target.getAttribute('Id') 
//         } 
//         console.log(first)
//         console.log(second)
        
       
        
//     }

// when the DOM loads
createDivsForColors(shuffledColors);
