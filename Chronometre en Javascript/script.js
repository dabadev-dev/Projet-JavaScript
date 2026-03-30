//les variables dont on a besoin pour le chronomètre
let sp, btnStart, btnStop, t, h, m, s, ms;

//fonction qui initialise les variables
window.onload = function() {
    sp = document.getElementsByTagName("span");
    btnStart = document.getElementById("start");
    btnStop = document.getElementById("stop");
    t;
    h = 0, m = 0, s = 0, ms = 0;
}

// mettre en place le compeur
function update() {
    ms+=1;
    if(ms == 10) {
        ms = 1;
        s+=1;
    }
    if(s == 60) {
        s = 0;
        m+=1;
    }
    if(m == 60) {
        m = 0;
        h+=1;
    }
    
   //inssertion des valeurs dans les span
   //[0] permet de selectionner le premier span 
   //[1]               le deuxième et ainsi de suite
   sp[0].innerHTML = h + "h";
   sp[1].innerHTML = m + "m";
   sp[2].innerHTML = s + "s";
   sp[3].innerHTML = ms + "ms";
}

// mettre en place les fonctions pour les boutons
function start() {
    // cette ligne de code execute la fonction update()
    // toutes les 100 millisecondes
    t = setInterval(update, 100);
    btnStart.disabled = true;
}

//stoper le chronometre

function stop() {
    clearInterval(t); // suppression de l'interval t que nous avions créer
    btnStart.disabled = false;
}

//Initialiser les valeurs du compteur
function reset(){
    clearInterval(t);
    btnStart.disabled = false;
    ms = 0; s = 0; m = 0; h = 0;
    //inserer ces nouvelles valeur dans les spans
    sp[0].innerHTML = "00h";
    sp[1].innerHTML = "00m";
    sp[2].innerHTML = "00s";
    sp[3].innerHTML = "00ms";
}