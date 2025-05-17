//Défi 1
console.log("Début du script");

console.log("Etape 1 terminée");

console.log(" Etape 2 terminée");

console.log("Fin du script");

//Defi 2
console.log("Début du script");

setTimeout(function () {
console.log("Action différée (setTimeout)");
}, 2000);
console.log("Fin du script");

//Défi 3
console.log("Début du script");

setTimeout(function() {
    console.log("Action A (attente 1000ms)");
}, 500);

console.log("Fin du script");

//Défi 4
document.getElementById("btnCharger").addEventListener("click", function() {
  document.getElementById("contenu").textContent = "Chargement en cours...";

  setTimeout(function() {
    document.getElementById("contenu").textContent = "Contenu chargé avec succès ✅";
  }, 2000);
});

//Defi 5
function direBonjour(nom) {
    console.log("Bonjour " + nom);
}

function executerCallback(callback) {
    const nom = "Nuno";
    callback(nom);
}

executerCallback(direBonjour); 

//Défi 6
function attendreEtDireBonjour(nom, callback) {
    setTimeout(function() {
        callback(nom);
    }, 2000);
}
 attendreEtDireBonjour("Angélique", function(prenom) {
    console.log("Bonjour après 2s, " + prenom);
 });
