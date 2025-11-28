$(document).ready(function(){
    $("p").css("color","blue");
});


// Paragraf 1 skal øke størrelse for hvert klikk:

document.getElementById("button1").addEventListener("click", function () { //velg riktig element. Legg på en eventlistener som lytter etter "klikk" Legg til funksjon
    const p1 = document.getElementById("para1"); // velg hvilket element denne funksjonen skal gjelde for
    const currentSize = window.getComputedStyle(p1).fontSize; // beskriv hvordan elementet vises før endring
    const newSize = parseFloat(currentSize) + 2; // øker med 2px  
    // // beskriv hva funksjonen skal gjøre, hvilken endring som skal utføres
    p1.style.fontSize = newSize + "px";
});

// Paragraf to skal vise dagens dato: 

document.getElementById("para2").innerHTML = "Date: " + Date(); // først må riktig dokument element velges. Legg inn ID på element. InnerHTML bestemmer hvor datoen skal vises. Til slutt må man legge til en funksjon som legger inn dagens dato. 


// Paragraf 3 skal veksle mellom 3 ulike farger: 

const colors = ["yellow", "magenta", "cyan"];  //Først må man lage en "array" med de ulike fargene som det skal veksles mellom

setInterval(function () {    // så bruker man setInterval funksjonen for å lage ønsket intervall på vekslingene

    const randomColor = colors[Math.floor(Math.random() * colors.length)];  // (Måtte ha hjelp fra chat GPT)
    document.getElementById("para3").style.backgroundColor = randomColor; // så må man velge elementet dette skal gjelde for og beskrive hva som skal gjøres (bytte farge)
}, 3000); // intervall satt til hvert 3.sekund (3000 millisekund)


$(function() {   // først lager man en function
    $("#toggleButton").click(function(){ // så må man definere hilken knapp funksjonen skal gjelde for å legge på en click function
        $("#pokemon-list").toggle("hide");  // til slutt må man definere hva funksjonen skal gjøre.
    }

)
});