/**
 * Hier können sie if und else trainieren.
 * Am besten dazu den nodemon starten: 
 * 
 *       .\node_modules\.bin\nodemon training\if-else-training.js
 * 
 * Dann die Ausgabe im Terminal beoachten.
 */

// Deklaration und Initialisierung
//Lies: "Der Wert 0 wird zugewiesen
//      an eine Variable namens x"

let x = 0
let y = 1

if(""){
    console.log("Die Prüfung ist WAHR. Es werden die Anweisungen im Rumpf von IF ausgeführt")
}else{
    console.log("Die Prüfung ist FALSCH. Es werden die Anweisungen im Rumpf von ELSE ausgeführt")
}

//FÄLLE: 

// 22. if()

// 21. if("GW11A".endswith("A"))  Der Ausdruck ist wahr.Die Funktion prüft, ob eine Zeichenkette mit einer anderen endet.

// 20. if("GW11A".includes("11"))  Der Ausdruck ist wahr. Die Funktion prüft, ob eine Zeichenkette eine andere Zeichenkette enthält.

// 19. if("GW11A".startsWith("G")) Die Funkton prüft, ob eine zeichenkette mit einer aderen Zeichenkette beginnt.

// 18. if("GW11A".length === 5) Der ausdruck ist wahr. Die Eigenschaft length gibt die Anzahl der Zeichen einer Zeichenkette.

// 17. if(undefinded)   Der Ausdruck ist falsch. Ein Objekt ist undefinded, wenn sie nicht existiert

// 16. if(1 > 2 || 1 == 1) Der Ausdruck ist wahr, weil eine der beiden Prüfungen wahr ist.

// 15. if(1 > 2 && 1 == !) Der Ausdruck ist falsch, weil die erste Prüfung falsch ist. Alle mit && verketteten Prüfungen müssen wahr sein, damit die Prüfung insgesamt wahr wird.

// 14. if(false)     Der Ausdruck ist falsch.

// 13. if(true)      Der Ausdruck ist wahr.

// 12. if(0)         Die Zahl ist falsch.

// 11. if(-123)      Zahlen sind wahr bis auf 0.

// 10. if("")        leere Zeichenketten in javascript sind falsch

// 9. if("ah")       nicht leere Zeichenketten in javascript sind wahr

// 8. if(1 != 0)     Vergleichsoperator: "ungleich"       Der Ausdruck ist wahr.

// 7. if(1 <= 1)    Vergleichsoperator: "kleiner gleich" Der Ausdruck ist wahr.

// 6. if(1 >= 1)    Vergleichsoperator: "größer gleich" Der Ausdruck ist wahr.

// 5. if(1 === "1") Vergleichsoperator: "gleich"       Der Ausdruck ist falsch.
//                  Das 3fache "===" prüft auf Gleiuchheit des Wertes und des Tys.
//                  "1" : String / Zeichenkette
//                   1  : Zahl

// 4. if(1 == "1")  Vergleichsoperator: "gleich"       Der Ausdruck ist wahr.
//                  Das doppelte "==" prüft auf Gleichheit des Wertes,
//                  aber nicht auf Gleichheit des Types.

// 3. if(0 == 1)    Vergleichsoperator: "gleich"       Der Ausdruck ist falsch.

// 2. if(0 > 1)     Vergleichsoperator: "größer als"   Der Ausdruck ist falsch.

// 1. if(0 < 1)     Vergleichsoperator: "kleiner als"  Der Ausdruck ist wahr.
