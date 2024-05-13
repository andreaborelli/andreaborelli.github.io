// Ottieni l'elemento dove inserire l'anno
var annoElement = document.getElementById("anno");

// Ottieni l'anno corrente
var annoCorrente = new Date().getFullYear();

// Inserisci l'anno nel footer
annoElement.textContent = annoCorrente;
