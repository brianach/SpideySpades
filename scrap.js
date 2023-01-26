
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

console.log("Initial deck of cards : ", card_deck) ; /** test result */
card_deck.sort(() => Math.random() - 0.5) ; /** shuffle deck */
console.log("Shuffle deck of cards : ", card_deck) ; /** test result */
console.log("44th entry in array : ", card_deck[45]); /** test that cards are split in the correct location */

const spare_card = Array.from(card_deck);

console.log('\n', '\n');

//** split the face down and spare card deck 
for ( let spare = 0 ; spare < 44 ; spare ++ ) {
    face_down.push(spare_card.shift(spare)).toString();
}

console.log("Face down pile : ", face_down);
console.log("Spare card pile : ", spare_card);

console.log('\n');

console.log('\n');

//** This fuction will run once to display the first face up row on page load and then every time the spare deck is clicked afterwards */
for ( let face_up_row = 1 ; face_up_row < 7; face_up_row ++ ) {
    const face_up = []; //* array to hold displayed row
    for ( let flip = 0 ; flip < 10 ; flip ++ ) {
            face_up.push(spare_card.shift(flip)).toString();
    }
    console.log("Face up row : ", face_up);
}

