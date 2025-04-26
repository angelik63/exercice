let nom = prompt("Quel est ton nom ?");
console.log("Votre nom est  " + nom);
let prenom = prompt("Quel est ton prénom ?");
console.log("Votre prénom est " + prenom);
let age = prompt("Quel est ton âge ?");
console.log("Vous avez " + age + " ans");
let reponseEtudiant = prompt("Es- tu étudiant? (oui/non)").toLocaleLowerCase;
console.log("Réponse à la question si vous êtes étudiant " + reponseEtudiant);
const prixBase = 12;
let nombreTickets = prompt("Combien veux tu acheter de tickets?");
console.log("Le nombre de tickets désiré " + nombreTickets);




if (age < 12) {
    prixReduit = prixBase * 0.5;
  } else if (age > 60) {
    prixReduit = prixBase * 0.7;
  } else if (reponseEtudiant === "oui") {
    prixReduit = prixBase * 0.8;
  }else {
    prixReduit = prixBase;
  }
  console.log(prixReduit);

function tarifDeGroupe (nombreTickets,prixReduit){
    let reducGroupe;
 if (nombreTickets>3){
    reducGroupe = prixReduit * 0.9;
 }else{
    reducGroupe = prixReduit;
 }
 return reducGroupe;
}
tarifDeGroupe();

  let prixAvantReduction = nombreTickets * prixBase;
  let prixFinal = nombreTickets * prixReduit;

  console.log("Le prix avant réduction est : "+ prixAvantReduction.toFixed(2)+" €");
  console.log("Le prix aprés réduction est : "+prixFinal.toFixed(2) +" €");