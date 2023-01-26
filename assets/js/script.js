// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "playcard") {
                alert("You clicked playcard!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

function runGame() {

}

/** set up the initial facedown card rows */
function setTable() {

}

/** set a face up cards row */
function placeCards () {

}

/** play the face up cards until all moves are done */
function dealCards() {

}

/** set the timer */
function incTimer() {

}

/** set the score */
function incScore() {

}

/** create the card deck */
function setupCards() {

/** define arrays for storing card values */
const card_deck = []; //* full deck
const face_down = []; //* face down pile

//**  create a desk of 8 suits 
for ( let suits = 0 ; suits < 8 ; suits ++ ) {
	for (let cards = 0 ; cards < 13 ; cards ++ ) {
	    card = cards + 1 ; 	    
	    card_deck.push(card).toString();
  }
}

const spare_card = Array.from(card_deck);

//** split the face down and spare card deck 
for ( let spare = 0 ; spare < 44 ; spare ++ ) {
    face_down.push(spare_card.shift(spare)).toString();
}

/** create an array for the face up cards */
for ( let face_up_row = 1 ; face_up_row < 7; face_up_row ++ ) {
    const face_up = []; //* array to hold displayed row
    for ( let flip = 0 ; flip < 10 ; flip ++ ) {
            face_up.push(spare_card.shift(flip)).toString();
    }
}
}