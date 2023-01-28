// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

/** define arrays for storing card values */
const card_deck = []; //* full deck
const face_down = []; //* face down deck
const spare_card = []; //* clone of card deck
const row_deal = []; //* clone of face down cards
const row_cards = []; //* temporary array for current face up cards

//* arrays for each column
const colmn_0 = [];
const colmn_1 = [];
const colmn_2 = [];
const colmn_3 = [];
const colmn_4 = [];
const colmn_5 = [];
const colmn_6 = [];
const colmn_7 = [];
const colmn_8 = [];
const colmn_9 = [];

let click_time = 0 ; //* flag for mouse clicks

setupCards();

document.addEventListener("DOMContentLoaded", function() {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(e) {
            console.log(e.currentTarget.id); //* get the id of the object
            selected_col =  e.currentTarget.id ;
            if (this.getAttribute("data-type") === "playcard") {
                playCards(); //* call function if click is in playing area
            } else {
                let newDeal = this.getAttribute("data-type");
                dealCards(); //* call function to deal new row of cards
            }
        });
    }
});

setTable();

function runGame() {}

//* set up the initial facedown card rows and add to column array
function setTable() {
    //* console.log(`face down deck in set table fuction ${face_down}`);
    row_deal.push(...face_down); //* clone face down deck to row_deal
    //* deal out each row of face down cards
    for ( let row = 0 ; row < 5 ; row ++ ) {
        let row_cards = row_deal.splice(0, 10);
        //* console.log(`This is the array for row ${row} and contains ${row_cards}`);
        //* populate the face down columns while array contains cards
        for ( let colmn = 0 ; colmn < row_cards.length ; colmn ++ ) { 
            var curr_colmn = "c".concat(colmn) ;
            colCard = row_cards[colmn];
            columnArrayFill(colmn, colCard);
        }
        }
        //* add a null entry to differenciate the face down and face up cards
        for ( let colmn = 0 ; colmn < 10 ; colmn ++ ) { 
                colCard = NaN;
                columnArrayFill(colmn, colCard);
            }        

    /** place the first row of playing cards */
    dealCards();
}

/** deal the face up cards row */
function dealCards () { 

    /** NOTE: At this point the face up row must be pushed into the face down array as that 
    array will be referenced during the course of play for calculating moves and scores */

    //* split the first 10 entries in the spare card array to place face up on the table
        let flip_cards = spare_card.splice(0, 10);
        for ( let colmn = 0 ; colmn < flip_cards.length ; colmn ++ ) {
                var curr_flipcard = "c".concat(colmn) ;
                document.getElementById(curr_flipcard).textContent = flip_cards[colmn];
                colCard = flip_cards[colmn];
                /** The following if else loop sends the card value of the current row
                 * to the corresponding relative function to add that card to an array
                 * for the column where that card is placed
                 */
                columnArrayFill(colmn, colCard);
        }
}

/** play the face up cards until all moves are done */
function playCards() {

    click_time ++ ;
    getClickCol(selected_col) ;
    if ( click_time == 1 ) {
       card_1 = result ;  
    }
    if ( click_time >= 2 ) {
        click_time = 0 ;
        card_2 = result ;
        if ( card_1 < card_2 ) {
            alert('Legal move') ;
            card_1 = card_2 = "" ;
        } else if 
            ( card_1 >= card_2 ) {
                alert ('Illegal move');
                card_1, card_2 = "" ;
            }
        }
}


/** set the timer */
function incTimer() {}

/** set the score */
function incScore() {}

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
        face_down.push(spare_card.shift(spare)).toString(); //* push the first 44 cards to array
    }
}

/** return the value from the currenttly selected card */
function getClickCol(selected_col) {

    if ( selected_col === "c0" ) {
        result = colmn_0[colmn_0.length -1 ];
    } else if ( selected_col === "c1" ) {
        result = colmn_1[colmn_1.length -1 ];
    } else if ( selected_col === "c2" ) {
        result = colmn_2[colmn_2.length -1 ];
    } else if ( selected_col === "c3" ) {
        result = colmn_3[colmn_3.length -1 ];
    } else if ( selected_col === "c4" ) {
        result = colmn_4[colmn_4.length -1 ];
    } else if ( selected_col === "c5" ) {
        result = colmn_5[colmn_5.length -1 ];
    } else if ( selected_col === "c6" ) {
        result = colmn_6[colmn_6.length -1 ];
    } else if ( selected_col === "c7" ) {
        result = colmn_7[colmn_7.length -1 ];
    } else if ( selected_col === "c8" ) {
        result = colmn_8[colmn_8.length -1 ];
    } else if ( selected_col === "c9" ) {
        result = colmn_9[colmn_9.length -1 ];
    } else {
        alert(`Error in ${arguments.callee.name} function at line ${err.lineNumber}`);
    }

}

function columnArrayFill(colmn) {
            /** The following if else loop sends the card value of the current row
             * to the corresponding relative function to add that card to an array
             * for the column where that card is placed
             */
            if (colmn == 0) {
                colmnZro(colCard);
            } else if (colmn == 1) {
                colmnOne(colCard);
            } else if (colmn == 2) {
                colmnTwo(colCard);
            } else if (colmn == 3) {
                colmnThr(colCard);
            } else if (colmn == 4) {
                colmnFre(colCard);
            } else if (colmn == 5) {
                colmnFiv(colCard);
            } else if (colmn == 6) {
                colmnSix(colCard);
            } else if (colmn == 7) {
                colmnSev(colCard);
            } else if (colmn == 8) {
                colmnEgt(colCard);
            } else if (colmn == 9) {
                colmnNin(colCard);
            } else {
                alert(`Error in ${arguments.callee.name} function at line ${err.lineNumber}`);
            }
}


//* function to to push and pull cards in and out of each columns as the game is being played 
function colmnZro(){
    colmn_0.push(colCard);
}
function colmnOne(){
    colmn_1.push(colCard);
}
function colmnTwo(){
    colmn_2.push(colCard);
}
function colmnThr(){
    colmn_3.push(colCard);
}
function colmnFre(){
    colmn_4.push(colCard);
}
function colmnFiv(){
    colmn_5.push(colCard);
}
function colmnSix(){
    colmn_6.push(colCard);
}
function colmnSev(){
    colmn_7.push(colCard);
}
function colmnEgt(){
    colmn_8.push(colCard);
}
function colmnNin(){
    colmn_9.push(colCard);
}


