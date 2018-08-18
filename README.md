# Word-Guess-Game
This is my first full attempt at a JavaScript project. \
\
What seemed like a fairly challenging task took nearly every bit of free time I had between the day it was assigned--and the night before it was due. Who knew a hangman game could be so complex?

# A Few Notes About This Assignment
Going into this bootcamp, JavaScript was a completely new concept to me. With that in mind, I'm sharing a few tweaks I had to make to my code to adapt and overcome (and return to later once I have a better grasp overall).\
\
**Press any key to get started.** I changed this to "Enter" because typing a letter not matching the word automatically decremented the remaining letters.\
\
**Wins/Losses.** Initially, each time the game reset, the win/lose message stayed in place until the end of the next round. The only way to clear it was to click the reset button, which would also clear the wins/losses. I tried a document.querySelector in the playAgain function to display "" upon starting a new game, but this seemed to override any previously displayed messages. I then moved it within the EventListener so that the message would clear on the next round, but the win/lose message would display at the appropriate time.\
\
**Choices.** Choices are limited to letters so that a number or other key doesn't count against the player.\
\
**Blank spaces.** I tried to use underscores with a space separating them (so the player can easily see how many letters are in each word), but underscores would get stuck at the end in that case. After quite a bit of experimenting and using undo/redo several times, I found that using dashes would show separation between the characters--and it wouldn't display any dashes out of place.
# Overall thoughts
With plenty of practice, a great deal of support from my instructional team and tutor, I was able to make it past several significant road blocks that no amount of googling could seem to solve. And, using console.log early and often has been instrumental in getting over those final obstacles. 
