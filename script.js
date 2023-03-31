/* define some selectors and the game state: */

const selectors = {
    boardContainer: document.querySelector('.board-container'),
    board: document.querySelector('.board'),
    moves: document.querySelector('.moves'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('button'),
    win: document.querySelector('.win')
}

/* track number of card slips--only two cards at a time, if a match they stay facing up, if not a match flipped back over */
/* flips and time tracks time and moves made in current game
loops game every 1 second*/
// did game start? button or card clicked (boolean) */
const state = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null
}

/* GENERATING THE GAME BOARD....even number cards=even number dimensions
generate random array of wutang characters (how to get character images in array)==> pickRandom and shuffle the array (shuffle algorithm)
TRY THIS...
-- To shuffle an array a of n elements (indices 0..n-1):
for i from n−1 downto 1 do
   j ← random integer such that 0 ≤ j ≤ i
   exchange a[j] and a[i] */
   /* From i to the <length of the array> - 1, all the way down to 1, we want to:
create a random integer, one that is greater than 0, but less than the index. Let’s call it j
then exchange the random index with i so that array[i] = array[j] and array[j] = array[i] */
/* So we get a descending for loop, in which we create a random index using Math.random and Math.floor (since Math.random returns a random number between 0 and 1). This can be used to switch the position of two items in the array. */

const shuffle = array => {
    const clonedArray = [...array]

    for (let index = clonedArray.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1))
        const original = clonedArray[index]

        clonedArray[index] = clonedArray[randomIndex]
        clonedArray[randomIndex] = original
    }

    return clonedArray
}

const pickRandom = (array, items) => {
    const clonedArray = [...array]
    const randomPicks = []

    for (let index = 0; index < items; index++) {
        const randomIndex = Math.floor(Math.random() * clonedArray.length)
        
        randomPicks.push(clonedArray[randomIndex])
        clonedArray.splice(randomIndex, 1)
    }

    return randomPicks
}

const generateGame = () => {
    const dimensions = selectors.board.getAttribute('data-dimension')

    if (dimensions % 2 !== 0) {
        throw new Error("The dimension of the board must be an even number.")
    }
 
    // GETTING IMAGES ON CARDS: declare an array object and push the URLs to your images to it.

    // const member = [
    //     { name: 'ODB', image: 'ODB.jpg' }, 
    //     { name: 'Method', image: 'Method.jpg' }, 
    //     { name: 'RZA', image: 'RZA.jpg' },
    //     { name: 'Raekwon', image: 'Raekwon.jpg' }, 
    //     { name: 'Ghostface', image: 'Ghostface.jpg' }, 
    //     { name: 'GZA', image: 'GZA.jpg' },
    //     { name: 'Deck', image: 'Deck.jpg' }, 
    //     { name: 'Masta', image: 'Masta.jpg' } 
    //   ]
    // const member = ['ODB.jpg', 'Method.jpg', 'RZA.jpg', 'Raekwon.jpg', 'Ghostface.jpg', 'GZA.jpg', 'Deck.jpg', 'Masta.jpg']
    const member = ['ODB', 'Method', 'RZA', 'GZA', 'Chef', 'GF', 'Deck', 'Masta', 'UGod', 'Cappa']
    const picks = pickRandom(member, (dimensions * dimensions) / 2) 
    const items = shuffle([...picks, ...picks])
    const cards = `
        <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
            ${items.map(item => `
                <div class="card">
                    <div class="card-front"></div>
                    <div class="card-back">${item}</div>
                </div>
            `).join('')}
       </div>
    `
    
    const parser = new DOMParser().parseFromString(cards, 'text/html')

    selectors.board.replaceWith(parser.querySelector('.board'))
}

/* HOW WILL THE GAME START AND RUN???
Start game function */

const startGame = () => {
    state.gameStarted = true
    selectors.start.classList.add('disabled')

    state.loop = setInterval(() => {
        state.totalTime++

        selectors.moves.innerText = `${state.totalFlips} moves`
        selectors.timer.innerText = `${state.totalTime} seconds`
    }, 1000)
}


/* FLIPPING THE CARDS
Adding event listeners: for cards and for start button)
flipCard with the .card itself. Only call this function if the card not flipped yet.
startGame, if the “Start” button is clicked, and not disabled. */

const flipBackCards = () => {
    document.querySelectorAll('.card:not(.matched)').forEach(card => {
        card.classList.remove('flipped')
    })

    state.flippedCards = 0
}
/* update the state. Every time there is a flip, increment both flippedCards and totalFlips. */

const flipCard = card => {
    state.flippedCards++
    state.totalFlips++

   /* Then define individual if statements: */

   /* check if the game has already started. */

    if (!state.gameStarted) {
        startGame()
    }

    /*If not, call the startGame function. player can also start the game by clicking on a card. */
    if (state.flippedCards <= 2) {
        card.classList.add('flipped')
    }

    /* check if flippedCards is less than, or equal to two. don’t allow the player to flip more than 2 cards at a time. If no more than two cards are flipped, we can flip it by adding the .flipped class to the card that we pass to the function. */

    /* check if there are exactly two cards flipped over. Either it's a match, or a mismatch:first, if not matched already, check the wu member inside the first card against wu member inside the second card using innerText. If they match, we match the cards by adding a .matched class to them. then, flip back all cards after 1 second. funtion gets all cards not matched and sets flippedCards back to 0 so we can keep flipping only two cards at a time*/

    if (state.flippedCards === 2) {
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)')

        if (flippedCards[0].innerText === flippedCards[1].innerText) {
            flippedCards[0].classList.add('matched')
            flippedCards[1].classList.add('matched')
        }
/* need loop to run every 1 sec to update UI with total card flips ==> state.loop */

        setTimeout(() => {
            flipBackCards()
        }, 1000)
    }

    // If there are no more cards that we can flip, we won the game

    // create the winning state for the game by extending flipCard function using if statement: checks if all cards flipped already, if no more cards then game is done and entire game board is seen, then clear loop at end of function. 

    if (!document.querySelectorAll('.card:not(.flipped)').length) {
        setTimeout(() => {
            selectors.boardContainer.classList.add('flipped')
            selectors.win.innerHTML = `
                <span class="win-text">
                    Mental Agility Challenge Successful!<br />
                    with <span class="highlight">${state.totalFlips}</span> moves<br />
                    in <span class="highlight">${state.totalTime}</span> seconds
                </span>
            `

            clearInterval(state.loop)
        }, 1000)
    }
}

const attachEventListeners = () => {
    document.addEventListener('click', event => {
        const eventTarget = event.target
        const eventParent = eventTarget.parentElement

        if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
            flipCard(eventParent)
        } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
            startGame()
        }
    })
}
/* add reset button*/

generateGame()
attachEventListeners()
