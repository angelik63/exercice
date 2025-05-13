//Defi 1



function btnClick() {
  alert("Bravo tu as cliqué !");
}

//Defi 2

const rouge = document.getElementById("red");
rouge.addEventListener("click", function () {
  rouge.style.color = "red";
});


//Defi 3
let agrandir = document.getElementById("taille");
agrandir.addEventListener("mouseover", function(){
    agrandir.style.transform = "scale(1.2)";
})
agrandir.addEventListener("mouseout", function(){
    agrandir.style.transform = "scale(1)";
})

//Defi 4 

let clic = document.getElementById("clic");
let compteur = document.getElementById("compteur");
let nombreClic = 0;
const ajoutCompteur = document.createElement('p');

clic.addEventListener("click", function(){
    nombreClic++;
    console.log(nombreClic);
    ajoutCompteur.textContent = nombreClic;
    document.getElementById("compteur").appendChild(ajoutCompteur);
})

//Defi 5

let nbClic = document.getElementById("desactive");
let compte = 0;

nbClic.addEventListener('click', function(){
    compte++;
    console.log(compte);

    if ( compte === 3){
        nbClic.disabled = true;   
    }
});

// Defi 6


function clicAjout(){
     const ajoutPara = document.createElement('p');
    ajoutPara.textContent = "nouveau paragraphe créer";
    document.getElementById("ajout").appendChild(ajoutPara);

}

//Defi 7


    const supprime = document.getElementById("sup");
    supprime.addEventListener("click", function ( ){
      supprime.remove();  
    });

// Defi 8

const title = document.querySelectorAll("h2"); 


