/*  Copyright (C) Stephen James Morris - All Rights Reserved
 *  Unauthorized copying of this file, via any medium is strictly prohibited without writen permission
 *  Proprietary and confidential
 *  Written by Stephen James Morris <stephen.morris@outlook.de>, October 2016
 */

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
    if(Auswahl1 === Auswahl2) {                                 // Auswahl1 ist der User & Auswahl2 ist der Computer
        return "Es ist uentschieden!"                           // wenn beide die selbe Wahl haben ist es unentschieden

    } else if(Auswahl1 === "stein") {                           // wenn der User "Stein" wählt

        if(Auswahl2 === "schere") {                             // und der Computer "Schere" wählt
            return "Stein gewinnt";                             // gewinnt der User (Stein schlägt Schere)
        } else {
            return "Papier gewinnt";                            // sonst gewinnt der Computer (Stein schlägt Papier)
        }

    } else if(Auswahl1 === "papier") {                          // wenn der User "Papier" wählt

        if(Auswahl2 === "stein") {                              // und der Computer "Stein" wählt
            return "Papier gewinnt";                            // gewinnt der User (Papier schlägt Stein)
        } else {
            return "Schere gewinnt";                            // sonst gewinnt der Computer (Schere schlägt Papier)
        }

    } else if(Auswahl1 === "schere") {                          // wenn der User "Schere" wählt
        
        if(Auswahl2 === "stein") {                              // und der Computer "Stein" wählt
            return "Stein gewinnt";                             // gewinnt der Computer (Stein schlägt Schere)
        } else {
            return "Schere gewinnt";                            // sonst gewinnt der User (Schere schlägt Papier)
        }
    }
};

console.log("Computer: " + computerAuswahl);                    // Anzeige des Math.random() die der Computer zugeteilt bekommen hat
console.log("User: " + userAuswahl);                            // Anzeige des vom User eingegebene Auswahl
console.log(vergleiche(userAuswahl, computerAuswahl));          // hier wird ausgegeben wer gewonnen hat
