// Déclaration des variables
let div = document.querySelector ('div');
let btnBold = document.getElementById('btnBold');
let btnColor = document.getElementById('btnColor');
let btnFont = document.getElementById('btnFont');

// Création des Listeners
btnBold.addEventListener('click', bold);
btnColor.addEventListener('click', color);
btnFont.addEventListener('click', font);

// Création des fonctions

// Fonction Gras
function bold(){
    if(div.style.fontWeight == 'bold'){
        div.style.fontWeight = 'initial';
    }else {
        div.style.fontWeight = 'bold';
    };
};


// Fonction Couleur
function color() {
    div.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
};


// Font Taille
function font() {
    if(div.style.fontSize == 'large'){
        div.style.fontSize = '';
    }else {
        div.style.fontSize = 'large'
    };
};