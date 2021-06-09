// stabilire se la parola inserita è palindroma o no

var parola = prompt("inserisci parola");

function parolaPalindroma(str){
    var strInversa = str.split('').reverse().join('');  
    return strInversa;
}

var parolaInversa = parolaPalindroma(parola);

if(parola == parolaInversa){
    document.getElementById("risultato").innerHTML = 'la parola è palindroma';
} else {
    document.getElementById("risultato").innerHTML = 'la parola non è palindroma';
}


//__________________________________________________________________________________

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Infine, dichiariamo chi ha vinto.
  
var pariOdispari = prompt("pari o dispari?")

if(pariOdispari = "pari"){
    document.getElementById("risultato").innerHTML += "<br> hai scelto pari";
} else if ( pariOdispari = "dispari"){
    document.getElementById("risultato").innerHTML +=  " <br> hai scelto dispari";
}

var numeroUtente = prompt("inserisci un numero da 1 a 5");

document.getElementById("risultato").innerHTML +=  "<br> " + "il tuo numero è " + numeroUtente;

function getRandomNumber(){
    return Math.floor(Math.random() * 5) + 1;
}
   var result = getRandomNumber();
   document.getElementById("risultato").innerHTML +=  "<br> " + "il numero della cpu è " + result;
   
    var somma = parseInt(numeroUtente) + result;
    document.getElementById("risultato").innerHTML +=  "<br> " + "la somma dei 2 numeri è " + somma;

    
    
    if (somma % 2 ){
        document.getElementById("risultato").innerHTML += " quindi dispari"
    } else{
        document.getElementById("risultato").innerHTML += " quindi pari"
    }