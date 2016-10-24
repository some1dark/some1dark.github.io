/*  Copyright (C) Stephen James Morris - All Rights Reserved
 *  Unauthorized copying of this file, via any medium is strictly prohibited without writen permission
 *  Proprietary and confidential
 *  Written by Stephen James Morris <stephen.morris@outlook.de>, October 2016
 */

"use strict"

let choices = ["stein", "papier", "schere"];                    // die möglichen Auswahlen die getroffen werden dürfen

let auswahl = () => {
    let auswahl = Math.floor(Math.random() * 3 +1);             // mit Math.random() * 3 +1 wird die Zahl von 0.01 - 0.99 mit 3 multipliziert & darauf wird 1 addiert. Math.floor() nimmt alle Dezimalstellen weg um eine gerade Zahl zu erhalten

    switch(auswahl) {
        case 1: auswahl = "stein";                              // bei 1 wird "Stein" gewählt
            break;
        case 2: auswahl = "papier";                             // bei 2 wird "Papier" gewählt
            break;
        case 3:  auswahl = "schere";                            // bei 3 wird "Schere" gewählt
            break;
    }
    return auswahl;                                             // die Ausgabe der Auswahl
}

let eingabe = () => {
    let userAuswahl = "";
    while (!choices.includes(userAuswahl)) {                    // solange der boolean "true" bleibt die Funktion in der Schleife
        if(userAuswahl.length !== 0) {                          // wenn der User eine falsche Eingabe gemacht hat
            alert("Sie haben eine falsche Auswahl getroffen.\nBitte versuchen sie es erneut!");
        }                                                       // hier werden die vom User eingegebe Eingabe klein gestellt
        userAuswahl = prompt("Wähle: Stein, Papier oder Schere").toLowerCase();
    }
    return userAuswahl;
}

let vergleiche = (Auswahl1, Auswahl2) =>  {                     // vergleiche die Auswahlen in der function()
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

let computerAuswahl = auswahl();                                // ausgabe der eingabe Funktion (Computer)
let userEingabe = eingabe();                                    // ausgabe der eingabe Funktion (User)

console.log("Computer: " + computerAuswahl);                    // Anzeige des Math.random() die der Computer zugeteilt bekommen hat
console.log("User: " + userEingabe);                            // Anzeige des vom User eingegebene Auswahl
console.log(vergleiche(userEingabe, computerAuswahl));          // hier wird ausgegeben wer gewonnen hat
