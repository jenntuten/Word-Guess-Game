
let teams = ["heat", "spurs", "clippers", "pistons", "jazz", "timberwolves", "nuggets", "suns", "sixers", "grizzlies", "knicks", "raptors", "celtics", "warriors", "trailblazers", "bulls", "cavaliers","magic", "lakers", "kings", "pacers", "nets", "rockets", "mavericks", "thunder", "bucks", "pelicans", "hawks", "hornets", "wizards"];
let team = teams[Math.floor(Math.random() * teams.length)];
//choices are limited to letters so that a number or other key doesn't count against the player.
let choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let blanks = []; //show letters
let remainingLetters = 10; //each game will start with 10 guesses
let wrongAnswers = []; //show letters
let wins = 0;
let losses = 0; 
for (let i = 0; i < team.length; i++) {
  blanks = blanks + "-";//tried to use underscores with a space separating them, but underscores would remain at the end in that case. Used dashes to show separation between the characters.
};
function swap(blanks, i, userKey) {
    if(i > blanks.length-1) {
      return blanks;
    }
    return blanks.substr(0, i) + userKey + blanks.substr(i + 1);
}


document.addEventListener('keyup', function(event){
    
        let userKey = event.key;
        let correct = false;
        
        //console.log(team); <--to show answer for testing
        if (event.keyCode == 13) {
            //console.log("enter",userKey);
            //added this because typing a letter not matching the word automatically decremented the remaining letters
        }
        document.querySelector(".incorrect").innerText = wrongAnswers.join(", ");
        document.querySelector(".remaining").innerText = remainingLetters;
        document.querySelector(".correct").innerText = blanks;
        if ((team.includes(userKey) === false) && (choices.includes(userKey) === false)){
            console.log("letters only");//tests whether user input was logged
        }
        if ((team.includes(userKey) === false) && (choices.includes(userKey) === true)){
            remainingLetters--; 
            console.log("wrong");//tests whether user input was logged
            console.log(wrongAnswers.push(userKey));
            //console.log(remainingLetters);
            //console.log(wrongAnswers);
            document.querySelector(".incorrect").innerText = wrongAnswers.join(", ");
            document.querySelector(".remaining").innerText = remainingLetters;
        }
        if (team.includes(userKey) === true){
            console.log("correct");//tests whether user input was logged
            
            //create variable to store index #; determines index # of correctly guessed letter
            let indexOfCorrectLetter = team.indexOf(userKey);
            //console.log("indexofcorrectletter", indexOfCorrectLetter);
            
            for ( let j = 0; j < team.length; j++ ) {
                if (team[j] === blanks) {             
                }
                if (j === indexOfCorrectLetter) {
                    j = userKey;
                    //console.log("blanks", blanks);
                    //console.log("userkey", j);
                }
            }
            for (let i = 0; i < team.length; i++) {
                if (userKey == team[i]) {
                blanks = swap(blanks, i, userKey);
                document.querySelector(".correct").innerText = blanks;
                correct = true;
                }       
            }
            }
        if (blanks.includes(team)) {
            //alert("Slam dunk! The team is " + team[0].toUpperCase() + team.substring(1) + ".");
            document.querySelector(".final").innerText = "Slam dunk! The team is " + team[0].toUpperCase() + team.substring(1) + ".";
            //wins++;
        }
        if (remainingLetters < 1) {
            document.querySelector(".final").innerText = "Oh no! The answer is " + team[0].toUpperCase() + team.substring(1) + ". Better luck next time!";
            //alert("Oh no! The answer is " + team[0].toUpperCase() + team.substring(1) + ". Better luck next time!");
        }
})

function refreshPage(){
    window.location.reload();
} 

