"use strict"
let choices = ["stein", "papier", "schere"];                // die möglichen Auswahlen die getroffen werden dürfen
let userChoice = "";                                        // 


let computerChoice = Math.random();                         // 0.00 bis 1.00.

if (computerChoice < 0.34) {                                // ab 0.00 bis 0.33 wird Stein gewählt
    computerChoice = "stein";
} else if(computerChoice <= 0.67) {                         // ab 0.34 bis 0.66 wird Papier gewählt
    computerChoice = "papier";
} else {                                                    // ab 0.67 bis 1.00 wird Schere gewählt
    computerChoice = "schere";
} 

let userEingabe = function() {
    while (!choices.includes(userChoice)) {                 // solange der boolean "true" bleibt die Funktion in der Schleife
        if(userChoice.length !== 0) {
            alert("Sie haben eine falsche Auswahl getroffen.\nBitte versuchen sie es erneut!");
        }
        userChoice = prompt("Wähle: Stein, Papier oder Schere").toLowerCase();
    }
}
userEingabe();

let compare = function(choice1, choice2) {                  // vergleiche die Auswahlen
    if(choice1 === choice2) {
        return "Es ist uentschieden!"

    } else if(choice1 === "stein") {

        if(choice2 === "schere") {
            return "Stein gewinnt";
        } else {
            return "Papier gewinnt";
        }

    } else if(choice1 === "papier") {

        if(choice2 === "stein") {
            return "Papier gewinnt";
        } else {
            return "Schere gewinnt";
        }

    } else if(choice1 === "schere") {
        
        if(choice2 === "stein") {
            return "Stein gewinnt";
        } else {
            return "Schere gewinnt";
        }
    }
};

console.log("Computer: " + computerChoice);
console.log("User: " + userChoice);

console.log(compare(userChoice, computerChoice));
