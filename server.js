class Konto {
    constructor() {
      this.Kontonummer
      this.Kontoart
      this.Iban
    }
  }

//Klassendefinition


  class Kunde{
      constructor(){
          this.IdKunde
          this.Geschlecht
          this.Vorname
          this.Nachname
          this.Geburtsdatum
          this.Adresse
          this.Kennwort    
      }
  }

  //Deklaration und Instanziierung

let kunde = new Kunde()

//Initalisierung

kunde.IdKunde = 4711
kunde.Kennwort = "123"
kunde.Geschlecht = "weiblich"
kunde.Vorname = "Hildegard"
kunde.Nachname = "Schmidt"
kunde.Geburtsdatum = "1999-12-31"
kunde.Adresse = "Berlin"

const iban = require('iban')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

const server = app.listen(process.env.PORT || 3000, () => {

    // Ausgabe von 'server lauscht ...' im Terminal
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// get = über adresszeile
// Die app.get('/') wird abgearbeitet, wenn die Startseite im Browser aufgerufen wird.
app.get('/',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        res.render('index.ejs', {                              
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

// Wenn die Seite localhost:3000/impressum aufgerufen wird, ...

app.get('/impressum',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        
        // ... dann wird impressum.ejs gerendert.
        
        res.render('impressum.ejs', {                              
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

app.get('/login',(req, res, next) => {         
    res.cookie('istAngemeldetAls', '')       
    res.render('login.ejs', {                    
    })
})

app.post('/',(req, res, next) => {   
   
    //Der Wert des Inputs mit dem Name = "idkunde" wird über
    //den Request zugewiesen an die Konstante idkund
    const idKunde = req.body.idKunde
    const kennwort = req.body.kennwort
        
    //Wenn der Wert von idunde dem Wertr der Eigenschaft kunde.IdKunde 
    //entspricht UND der Wert von kennwort der Eigenschaft kunde.Kennwort 
    //entspricht, dann werden die Anweisungen im Rumpf der if-Kontrollstruktur
    //abgearbeitet.
    if(idKunde == kunde.IdKunde && kennwort == kunde.Kennwort){            
        console.log("Der Cookie wird gesetzt:")
        res.cookie('istAngemeldetAls', idKunde)
        res.render('index.ejs', {  
            kunde : idKunde          
        })
    }else{            
        console.log("Der Cookie wird gelöscht")
        res.cookie('istAngemeldetAls','')
        res.render('login.ejs', {                    
        })
    }
})

// Wenn die Seite localhost:3000/kontoAnlegen angesurft wird, ...

app.get('/kontoAnlegen',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        
        // ... dann wird kontoAnlegen.ejs gerendert.
        
        res.render('kontoAnlegen.ejs', {      
            meldung : ""                         
        })
    }else{
        res.render('login.ejs', {                        
        })    
    }
})

// Wenn der Button auf der kontoanlegen-Seite gedrückt wird, ...

app.post('/kontoAnlegen',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)

// let = Deklaration
// new = Instanziierung
// kann auch in eine Zeile geschrieben werden (sihe zeile 113)
        let konto = new Konto()


        // Der Wert mit dem Input mit dem Namen 'kontonummer'
        // wird zugewiesen (=) an die Eigenschaft kontonummer
        // des objekts namens konto.
        konto.Kontonummer = req.body.kontonummer
        konto.Kontoart = req.body.kontoart
        const bankleitzahl = 27000000
        const leandererkennung = "DE"
        konto.Iban = iban.fromBBAN(laendererkennung,bankleitzahl + " " + konto.Kontonummer)

        

        let errechneteIban = iban.fromBBAN("DE",bankleitzahl + " " + konto.Kontonummer)

console.log(errechneteIban)
        
        // ... dann wird kontoAnlegen.ejs gerendert.
        
        res.render('kontoAnlegen.ejs', { 
            meldung : "Das Konto mit der Kontonummer " + konto.Kontonummer + " " + konto.Kontoart + " wurde erfolgreich angelegt."                             
        })
    }else{
        // Die login.ejs wird gerendert und als response an den browser übergeben.
        res.render('login.ejs', {                    
        })    
    }
})