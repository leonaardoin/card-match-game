
/* define some selectors and the game state: */


/* track number of card slips--only two cards at a time, if a match they stay facing up, if not a match flipped back over */
/* flips and time tracks time and moves made in current game
loops game every 1 second*/
// did game start? button or card clicked (boolean) */


// CREATING THE GAME



/* GENERATING THE GAME BOARD....even number cards=even number dimensions
generate random array of wutang characters (how to get character images in array)==> pickRandom and shuffle the array (shuffle algorithm)
-- To shuffle an array a of n elements (indices 0..n-1):
for i from n−1 downto 1 do
   j ← random integer such that 0 ≤ j ≤ i
   exchange a[j] and a[i] */
   /* From i to the <length of the array> - 1, all the way down to 1, we want to:
create a random integer, one that is greater than 0, but less than the index. Let’s call it j
then exchange the random index with i so that array[i] = array[j] and array[j] = array[i] */
/* So we get a descending for loop, in which we create a random index using Math.random and Math.floor (since Math.random returns a random number between 0 and 1). This can be used to switch the position of two items in the array. */


// GETTING IMAGES ON CARDS: declare an array object and push the URLs to your images to it.

/* FLIPPING THE CARDS
Adding event listeners: for cards and for start button)
flipCard with the .card itself. We only call this function if the card hasn’t been flipped yet.
startGame, if the “Start” button is clicked, and it is not disabled. */

/* STARTING THE GAME
Start game function */

const startGame = () => {
    /* set the gameStarted flag to true */
    state.gameStarted = true
}

/* need loop to run every 1 sec to update UI with total card flips ==> state.loop */


/* update the state. Every time there is a flip, we want to increment both flippedCards and totalFlips. Then for the rest of the logic, we need to define individual if statements: */

/* check if the game has already started. If not, we can call the startGame function. optional, but the player can also start the game by clicking on a card. */

/* check if flippedCards is less than, or equal to two. don’t allow the player to flip more than 2 cards at a time. If no more than two cards are flipped, we can flip it by adding the .flipped class to the card that we pass to the function. */

/* check if there are exactly two cards flipped over. Either it will be a match, or a mismatch:
first, if not matched already, then check the member inside the first card against member inside the second card using innerText. If they match, we match the cards by adding a .matched class to them. then, we flip back all cards after 1 second. funtion gets all cards not matched and sets flippedCards back to 0 so we can keep flipping two cards at a time*/


// create the winning state for the game by extending flipCard function with if statement: checks if all cards flipped already, if no more cards game done and show entire game board, clear loop at end of function. 