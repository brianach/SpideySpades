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
let move = 0 ; //* flag to determine whether card is being moved from or to the respective array
let source_col = target_col = ""; //* to determine columnn in play area

setupCards();
setTable();

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

function runGame() {}

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
    
//* set up the initial facedown card rows and add to column array
function setTable() {

    row_deal.push(...face_down); //* clone face down deck to row_deal
    //* deal out each row of face down cards
    for ( let row = 0 ; row < 5 ; row ++ ) {
        let row_cards = row_deal.splice(0, 10);

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
                 * to the corresponding relative function to add that card to the column 
                 * array where that card is to be placed in
                 */
                columnArrayFill(colmn, colCard);
        }
}

/** play the face up cards until all moves are done or the deal button is clicked */
function playCards() {

    click_time ++ ;
    getClickCol(selected_col) ; //* get the selected card column id
    if ( click_time == 1 ) {
       card_1 = result ;  
       source_col = selected_col ; //* this is the first selected card
    }
    if ( click_time >= 2 ) {
        click_time = 0 ;
        card_2 = result ;
        target_col = selected_col ; //* this is the second selected card
        if ( card_1 < card_2 ) {
            alert('Legal move') ;
            moveCard(source_col, target_col) ; //* if the move is valid then push the smaller card to the column with the higher card
            card_1 = card_2 = source_col = target_col = "" ;
        } else if 
            ( card_1 >= card_2 ) {
                alert ('Illegal move'); //* if the second card is equeal to or of lower value to the first card then no move is possible
                card_1 = card_2 = source_col = target_col = "" ;
            }
        }
}

function moveCard() {

    move = 1 ;
    while ( move < 3 ) {
        if ( move == 1 ) {
            colmn = parseInt(source_col.slice(1,2)) ; //* this is the source column to take the card from
            colCard = card_1 ; //* this is the card to be removed
            columnArrayFill(colmn) ; //* function to add or remove card .. in this case the card is being removed from the source column array
            move = 2 ;
        } else if 
            ( move == 2 ) {
                colmn = parseInt(target_col.slice(1,2)) ;  //* this is the target column to move the card to
                colCard = popCard ;  //* this is the card to be moved
                columnArrayFill(colmn) ; //* function to add or remove card .. in this case the card is being moved to the target column array
                move = 3 ;
            }
        }
}

/** set the timer */
function incTimer() {}

/** set the score */
function incScore() {}

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
        errorAlert();
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
                errText = arguments.callee.name ;
                errorAlert(errText);
            }
}

//* function to to push and pull cards in and out of each columns as the game is being played 
function colmnZro(){
    if ( move == 0) {
        colmn_0.push(colCard);
    } else if ( move == 1 ) {
        popCard = colmn_0.pop();
        if (isNaN(colmn_0[colmn_0.length -1])) { //* If the last card is now NaN
            shiftCard = (colmn_0.splice(colmn_0.length -2, 1)) ; //* remove the card before the NaN
            colmn_0.push(shiftCard[0]) ; //* push the card into the back of the 
            shiftCard.pop() ; //* clear the array for the next operation
        }
    } else if ( move == 2 ) {
        colmn_0.push(colCard);
    } else {
        errText = arguments.callee.name ;
        errorAlert(errText);
    }
}

function colmnOne(){
    if ( move == 0 ) {
        colmn_1.push(colCard);      
    } else if ( move == 1 ) {
        popCard = colmn_1.pop();
        if (isNaN(colmn_1[colmn_1.length -1])) { //* If the last card is now NaN
            shiftCard = (colmn_1.splice(colmn_1.length -2, 1)) ; //* remove the card before the NaN
            colmn_1.push(shiftCard[0]) ; //* push the card into the back of the 
            shiftCard.pop() ; //* clear the array for the next operation
        }        
    } else if ( move == 2 ) {
        colmn_1.push(colCard);
    } else {
        errText = arguments.callee.name ;
        errorAlert(errText);
    }
}

function colmnTwo(){
    if ( move == 0 ) {
        colmn_2.push(colCard);
    } else if ( move == 1 ) {
        popCard = colmn_2.pop();
        if (isNaN(colmn_2[colmn_2.length -1])) { //* If the last card is now NaN
            shiftCard = (colmn_2.splice(colmn_2.length -2, 1)) ; //* remove the card before the NaN
            colmn_2.push(shiftCard[0]) ; //* push the card into the back of the 
            shiftCard.pop() ; //* clear the array for the next operation
        }
    } else if ( move == 2 ) {
    colmn_2.push(colCard);
    } else {
        errText = arguments.callee.name ;
        errorAlert(errText);
    }
}

function colmnThr(){
    if ( move == 0 ) {
        colmn_3.push(colCard);
    } else if ( move == 1 ) {
        popCard = colmn_3.pop();
        if (isNaN(colmn_3[colmn_3.length -1])) { //* If the last card is now NaN
            shiftCard = (colmn_3.splice(colmn_3.length -2, 1)) ; //* remove the card before the NaN
            colmn_3.push(shiftCard[0]) ; //* push the card into the back of the 
            shiftCard.pop() ; //* clear the array for the next operation
        }
    } else if ( move == 2 ) {        
        colmn_3.push(colCard);
    } else {
        errText = arguments.callee.name ;
        errorAlert(errText);
    }
}

function colmnFre(){
    if ( move == 0 ) {
        colmn_4.push(colCard);
    } else if ( move == 1 ) {
        popCard = colmn_4.pop();
        if (isNaN(colmn_4[colmn_4.length -1])) { //* If the last card is now NaN
            shiftCard = (colmn_4.splice(colmn_4.length -2, 1)) ; //* remove the card before the NaN
            colmn_4.push(shiftCard[0]) ; //* push the card into the back of the 
            shiftCard.pop() ; //* clear the array for the next operation
        }
    } else if ( move == 2 ) {
        colmn_4.push(colCard);
    } else {
        errText = arguments.callee.name ;
        errorAlert(errText);
    }
}

function colmnFiv(){
    if ( move == 0 ) {
        colmn_5.push(colCard);
    } else if ( move == 1 ) {
        popCard = colmn_5.pop();
        if (isNaN(colmn_5[colmn_5.length -1])) { //* If the last card is now NaN
            shiftCard = (colmn_5.splice(colmn_5.length -2, 1)) ; //* remove the card before the NaN
            colmn_5.push(shiftCard[0]) ; //* push the card into the back of the 
            shiftCard.pop() ; //* clear the array for the next operation
        }
    } else if ( move == 2 ) {
        colmn_5.push(colCard);
    } else {
        errText = arguments.callee.name ;
        errorAlert(errText);
    }
}

function colmnSix(){
    if ( move == 0 ) {
        colmn_6.push(colCard);
    } else if ( move == 1 ) {
        popCard = colmn_6.pop();
        if (isNaN(colmn_6[colmn_6.length -1])) { //* If the last card is now NaN
            shiftCard = (colmn_6.splice(colmn_6.length -2, 1)) ; //* remove the card before the NaN
            colmn_6.push(shiftCard[0]) ; //* push the card into the back of the 
            shiftCard.pop() ; //* clear the array for the next operation
        }
    } else if ( move == 2 ) {    
        colmn_6.push(colCard);
    } else {
        errText = arguments.callee.name ;
        errorAlert(errText);
    }
}

function colmnSev(){
    if ( move == 0 ) {
        colmn_7.push(colCard);
    } else if ( move == 1 ) {
        popCard = colmn_7.pop();
        if (isNaN(colmn_7[colmn_7.length -1])) { //* If the last card is now NaN
            shiftCard = (colmn_7.splice(colmn_7.length -2, 1)) ; //* remove the card before the NaN
            colmn_7.push(shiftCard[0]) ; //* push the card into the back of the 
            shiftCard.pop() ; //* clear the array for the next operation
        }
    } else if ( move == 2 ) {
        colmn_7.push(colCard);
    } else {
        errText = arguments.callee.name ;
        errorAlert(errText);
    }
}

function colmnEgt(){
    if ( move == 0 ) {
        colmn_8.push(colCard);
    } else if ( move == 1 ) {
        popCard = colmn_8.pop();
        if (isNaN(colmn_8[colmn_8.length -1])) { //* If the last card is now NaN
            shiftCard = (colmn_8.splice(colmn_8.length -2, 1)) ; //* remove the card before the NaN
            colmn_8.push(shiftCard[0]) ; //* push the card into the back of the 
            shiftCard.pop() ; //* clear the array for the next operation
        }
    } else if ( move == 2 ) {
        colmn_8.push(colCard);
    } else {
        errText = arguments.callee.name ;
        errorAlert(errText);
    }
}

function colmnNin(){
    if ( move == 0 ) {
        colmn_9.push(colCard);
    } else if ( move == 1 ) {
        popCard = colmn_9.pop();
        if (isNaN(colmn_9[colmn_9.length -1])) { //* If the last card is now NaN
            shiftCard = (colmn_9.splice(colmn_9.length -2, 1)) ; //* remove the card before the NaN
            colmn_9.push(shiftCard[0]) ; //* push the card into the back of the 
            shiftCard.pop() ; //* clear the array for the next operation
        }
    } else if ( move == 2 ) {
        colmn_9.push(colCard);
    } else {
        errText = arguments.callee.name ;
        errorAlert(errText);
    }
}

function errorAlert() {
    /**alert(`Error in ${errText}`);    */
}

