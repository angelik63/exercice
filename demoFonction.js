function direBonjour(){
    console.log( "Bonjour tout le monde !");
}
direBonjour();

function direBonjourA(prenom){
    console.log("Bonjour "+prenom+" !");
}
direBonjourA ("Lucie");
direBonjourA("Paul");

function addition(a, b){
    console.log("Résultat :",a+b);
}
addition(5, 3);
addition( 10,20);

function doubler(nombre) {
    return nombre *2;
}

let resultat = doubler(6);
console.log("Le double de 6 est :",resultat);

const saluer = function() {
    console.log("Salut !");
};
saluer();

const direSalut = () =>{
    console.log("Salut à tous !");
};
const tripler = (nombre) => {
    return nombre *3;
};
direSalut();
console.log("Le triple de 4 est :", tripler(4));

function estPair(nombre){
    if (nombre % 2 ===0){
        return true;
    }else{
        return false;
    }
}
console.log(estPair(4));
console.log(estPair(7));

function afficherElements(tab) {
    for (let i = 0; i < tab.length; i++){
        console.log("Elément :", tab[i]);
    }
}
let fruits = ["Pomme", "Banane", "Orange"];
afficherElements(fruits);

