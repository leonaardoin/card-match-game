<h2> 36 Chambers Mental Agility Game (Memory) </h2>

<h3>Project Summary</h3> 
This is my Module 1 DOM project for Per Scholas Software Engineering Intensive. In this project I was tasked with creating a 2 person game using html, css and javascript. <br>
<br>
I created a memory card matching game with a take on one of my favorite rap groups, Wu-Tang Clan. In this variation, you will participate in a mental agility test for entry into the 36 chambers. You must correctly match each Wu-Tang member to successfully complete your challenge and flex your skills.
<br>
<br>

![gameboard image](https://user-images.githubusercontent.com/126014224/229874621-733ae376-e2d0-495a-b644-5391a37b66f0.JPG)

<h3>How to Play</h3>
To begin play, click the "Accept Challenge" button to begin the timer<br>
<br>
1. click on a square to flip a card a reveal a Wu-Tang member<br>
<br>
2. choose another square to flip that card to reveal a Wu-Tang member: if it is a match to the first Wu-Tang member revealed the cards will remain revealed on the game board OR if it is not a match, the cards will flip back over and you will choose another card to reveal another member <br>
<br>
3. continue to flip cards and match all of the members of the Wu-Tang Clan until you have revealed all of the cards on the board!
Ready to test your mental agility skills? <br>
<br>
Hit the "Accept Challenge" button to begin!


<h3>Technologies Used</h3>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>

<h3>How I Built My Game</h3>

Before beginning my game, I needed to pinpoint the object of the game as well as the steps players would need to take to play. I mapped out the steps to the game and determined the following to create a functioning game:
<ol>
<li>How many cards I would need to display</li>
<li>How will I randomize the display of cards</li>
<li>Show back of card initially and flip on select</li>
<li>Only allow for two cards to be flipped at a time</li>
<li>Determine if the two flipped cards match or if not, flip back over</li>
<li>Add time interval delay to flip card back over</li>
<li>End game when all cards are flipped and matched, with no cards left</li>
<li>Display winning text box</li>  
</ol>

<br>

![Win Game](https://user-images.githubusercontent.com/126014224/229876016-01fdf906-5382-4e82-93d8-bdc1d76c8bf3.JPG)


<h3>Main Coding Function</h3>
In creating the game, the main coding function I needed to create was flipping cards and only allowing for two cards to be flipped at a time, then checking for a match and if no match flipping the cards back without resetting the cards on the gameboard. The following code proved to be the most useful. 
<br>
<br>

![Card Flip Code](https://user-images.githubusercontent.com/126014224/229875121-085dd173-4ade-4a6c-9196-731d96f9d40f.JPG)







