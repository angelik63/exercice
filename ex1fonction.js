// Defi 1
function saluerUtilisateur(prenom){
    console.log("Bonjour, "+prenom+"!");
}
saluerUtilisateur("Laurent");

// Defi 2
function addition (nombre1, nombre2){
    return nombre1 + nombre2;
}
console.log(addition(9, 4));

// Defi 3
function estPair (nombre1){
    if (nombre1 % 2 ===0){
        return true;
    } else {
        return false;
    }
}
console.log (estPair(12));
console.log (estPair(9));
console.log (estPair(58));
console.log (estPair(89));

//Defi 4 
function calculerMoyenne(a,b,c){
    return (a+b+c) /3;
}
console.log("La moyenne des 3 notes est de : "+calculerMoyenne(15, 25,12));

//Defi 5
function plusGrand(a,b){
    if (a > b){
        return a ;
    }else{
        return b;
    } 
}
console.log("Le plus grand des 2 chiffres est : "+plusGrand(54,68));