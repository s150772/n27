// Das ist ein einzeiliger Kommentar
/*Das ist ein mehrzeiliger Kommentar*/

//Das Express-Frameword wird eingebunden.
//Ein Framework soll die Programmierung erleichtern.
//Das Framework muss mit npm installiert werden:
//im Terminal: npm istall express --save

const express = require('express')

// Das app-Objekt wird initialisiert
// Das app-Objekt reprensentiert den Server
//Auf das app-Objekt werden im Folgeneden Methoden aufgerufen.

const app = express()

// Mit der ejs-View-Engine werden Werte von der server.js zur index-datei gegeben.
// Muss wieder im Terminal installiert werden (npm install ejs --save)

app.set('view engine', 'ejs')

/* Gibt an wo meine Statischeninhalte sind. Sucht diese im Ordner 
Bublic.*/

app.use(express.static('public'))

// Der Wert darf sich während der Programm Laufzeit nicht ändern 
// Bereitet die Daten aus dem html-Formular für die Übergabe an die server.js vor
// Dann npm installieren (npm install --save)
const bodyParser = require('body-parser')

// Das bindet den Bodyparser ein und der Wert soll wahr sein

app.use(bodyParser.urlencoded({extended: true}))

// Startet den Server
//Der Server lauscht auf Befehle vom client (desewegen listen)
// Port kann vom Dienst selbst ausgesucht werden
/* Unser Rechner hat Port 3000 vorgegeben. Im Browser muss die 3000 angegeben werden.*/

const server = app.listen(process.env.PORT || 3000, () => {        console.log('Der Server ist erfolgreich gestartet auf Port %s', server.address().port)    })

// Server kann durch GET-Request ereicht werden.

app.get('/',(req, res, next) => {
    res.render('index.ejs', {
        
    })
})