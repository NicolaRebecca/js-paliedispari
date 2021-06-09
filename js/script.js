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

var numeroUtente = prompt("inserisci un numero da 1 a 5");

document.getElementById("risultato").innerHTML +=  "<br> " + "il tuo numero è " + numeroUtente;

function getRandomNumber(){
    return Math.floor(Math.random() * 5) + 1;
}
   var result = getRandomNumber();
   document.getElementById("risultato").innerHTML +=  "<br> " + "il numero della cpu è " + result;
   
    var somma = parseInt(numeroUtente) + result;
    
    document.getElementById("risultato").innerHTML +=  "<br> " + "la somma dei 2 numeri è " + somma ;

    function pariDispari(num1){
        if(num1 % 2 === 0)
        return document.getElementById("risultato").innerHTML += ": pari!"  ;
        else
        return document.getElementById("risultato").innerHTML += ": dispari!" ;
    }

    var sommaFinale = pariDispari(somma);
    















