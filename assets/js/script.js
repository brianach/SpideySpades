// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

/** define arrays for storing card values */
const card_deck = []; //* full deck
const face_down = []; //* face down deck
const spare_card = [];

setupCards();

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

setTable();

function runGame() {

}

/** set up the initial facedown card rows */
function setTable() {

    /** place the first row of playing cards */
    placeCards();
}

/** deal the face up cards row */
function placeCards () { 
    card = 0 ;
    colmn = 0 ;
    for ( let row = 0 ; row < 4 ; row ++ ) {
        alert(`laying down row ${row}`);
        card = card + colmn ;
        let row_cards = face_down.slice(card, card + 10);
        for ( let colmn = 0 ; colmn < 10 ; colmn ++ ) {
            var curr_colmn = "c".concat(colmn) ;
            alert(`current card is ${colmn} and card value is ${row_cards[colmn]}`);
            document.getElementById(curr_colmn).textContent = row_cards[colmn];
        }
    }        
}


/** play the face up cards until all moves are done */
function playCards() {

}

/** set the timer */
function incTimer() {

}

/** set the score */
function incScore() {

}

/** create the card deck */
function setupCards() {

//**  create a desk of 8 suits 
for ( let suits = 0 ; suits < 8 ; suits ++ ) {
	for (let cards = 0 ; cards < 13 ; cards ++ ) {
	    card = cards + 1 ; 	    
	    card_deck.push(card).toString();
  }
}

card_deck.sort(() => Math.random() - 0.5) ; /** shuffle deck */

spare_card.push(...card_deck); //* clone card_deck to spare_card

//** split the face down and spare card deck 
for ( let spare = 0 ; spare < 44 ; spare ++ ) {
    face_down.push(spare_card.shift(spare)).toString();
}
}

/** create an array for the face up cards 
for ( let face_up_row = 1 ; face_up_row < 7; face_up_row ++ ) {
    const face_up = []; //* array to hold displayed row
    for ( let flip = 0 ; flip < 10 ; flip ++ ) {
            face_up.push(spare_card.shift(flip)).toString();
    }
}
}*/