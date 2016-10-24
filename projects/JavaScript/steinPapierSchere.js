"use strict"
let choices = ["stein", "papier", "schere"];                    // die möglichen Auswahlen die getroffen werden dürfen
let userAuswahl = "";                                           // die Variable um die vom User eigabe zu speichern
let computerAuswahl = Math.random();                            // 0.00 bis 1.00.

if (computerAuswahl < 0.34) {                                   // ab 0.00 bis 0.33 wird Stein gewählt
    computerAuswahl = "stein";
} else if(computerAuswahl <= 0.67) {                            // ab 0.34 bis 0.66 wird Papier gewählt
    computerAuswahl = "papier";
} else {                                                        // ab 0.67 bis 1.00 wird Schere gewählt
    computerAuswahl = "schere";
} 

let userEingabe = function() {
    while (!choices.includes(userAuswahl)) {                    // solange der boolean "true" bleibt die Funktion in der Schleife
        if(userAuswahl.length !== 0) {                          // wenn der User eine falsche Eingabe gemacht hat
            alert("Sie haben eine falsche Auswahl getroffen.\nBitte versuchen sie es erneut!");
        }                                                       // hier werden die vom User eingegebe Eingabe klein gestellt
        userAuswahl = prompt("Wähle: Stein, Papier oder Schere").toLowerCase();
    }
}
userEingabe();

let vergleiche = function(Auswahl1, Auswahl2) {                 // vergleiche die Auswahlen
    if(Auswahl1 === Auswahl2) {
        return "Es ist uentschieden!"

    } else if(Auswahl1 === "stein") {

        if(Auswahl2 === "schere") {
            return "Stein gewinnt";
        } else {
            return "Papier gewinnt";
        }

    } else if(Auswahl1 === "papier") {

        if(Auswahl2 === "stein") {
            return "Papier gewinnt";
        } else {
            return "Schere gewinnt";
        }

    } else if(Auswahl1 === "schere") {
        
        if(Auswahl2 === "stein") {
            return "Stein gewinnt";
        } else {
            return "Schere gewinnt";
        }
    }
};

console.log("Computer: " + computerAuswahl);                    // Anzeige des Math.random() die der Computer zugeteilt bekommen hat
console.log("User: " + userAuswahl);                            // Anzeige des vom User eingegebene Auswahl
console.log(vergleiche(userAuswahl, computerAuswahl));          // hier wird ausgegeben wer gewonnen hat
