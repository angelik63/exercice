// Defi 1 

function direBonjour(){
    alert ("Bonjour !");
}

// Defi 2

let bouton = document.getElementById("btnEvent");

bouton.addEventListener("click", function(){
    alert("Evénement capturé avec addEventListener !");
});

// Defi 3

document.getElementById("btnEventObjet").addEventListener("click",function(event){
    console.log(event);
    alert ("Regarde dans la console !");
});

//Defi 4 

let zone = document.getElementById("zoneMultiEvent");
zone.addEventListener("mouseover", function(){
    zone.style.backgroundColor = "yellow";
});

zone.addEventListener("mouseout", function(){
    zone.style.backgroundColor = "lightblue";
});