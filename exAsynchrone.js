const { createElement } = require("react");

//Défi 1
setTimeout(function() {
    console.log("3 secondes se sont écoulées !");
}, 3000);

//Défi 2
console.log("Début du script");
setTimeout(function() {
    console.log("Message 1");
    document.getElementById("msg1").textContent = "Message 1";
}, 1000);
setTimeout(function () {
    console.log("Message 2");
    document.getElementById("msg2").textContent = "Message 2";
},3000);

//Défi 3

const btnCharger = document.getElementById("charger");

btnCharger.addEventListener("click", () => {
  // Créer le nouvel élément paragraphe
  const newP = document.createElement("p");
  newP.textContent = "Chargement en cours !";
  newP.id = "nouveau-message";

  // Insérer le paragraphe après le bouton
  btnCharger.parentNode.insertBefore(newP, btnCharger.nextSibling);


  //Change le texte après 2 secondes
 setTimeout(function() {
    document.getElementById("nouveau-message").textContent = "Contenu chargé";
  }, 2000);
 
});

/* function creerElement() {
  const nouveauParagraphe = document.createElement("p");
  nouveauParagraphe.textContent = "Je suis un nouveau paragraphe !";
  document.getElementById("zoneCreation").appendChild(nouveauParagraphe);
} */

//Defi 4 

const chrono = document.getElementById("demarre");
const stop = document.getElementById("arret");

chrono.addEventListener("click", () => {
    const newP = createElement("p");
    newP.id = "nouveau-message";
      // secondes écoulées
  let secondes = 0;

  // élément où afficher le décompte
  let para = document.getElementById("nouveau-message");

  // lance l'exécution de la fonction à toutes les secondes
  let chrono = window.setInterval(tictictic, 1000);

  // ---------------------------------------------------------
  // Incrément le nombre de secondes, affiche cette quantité
  // et arrête automatiquement après une minute.
  // ---------------------------------------------------------
  function tictictic() {
    secondes++;
    para.innerHTML = secondes;
    if (secondes == 60) {
      // arrête l'exécution lancée par setInterval()
      window.clearTimeout(chrono);
    }
  }
})
