let choixNombre= prompt("Choisi un nombre entre 1 et 5 pour connaître ta forme animale secrète.");
let nombreChoisi = Number(choixNombre);
console.log(typeof choixNombre);
console.log(typeof nombreChoisi);

function revelerAnimal(nombreChoisi){
    if (nombreChoisi === 1){
        alert ("Ton animale secret est : La Licorne");
    } else if (nombreChoisi === 2 ){
        alert ("Ton animale secret est : La Grenouille");
    }else if (nombreChoisi === 3){
        alert ("Ton animale secret est : Le Dragon");
    }else if (nombreChoisi === 4){
        alert ("Ton animale secret est : Le Hibou");
    }else if (nombreChoisi === 5){
        alert ("Ton animale secret est : L'Escargot");
    }else{
        alert ("Tu es trop puissant pour être classé dans notre bestiaire !");
    }
}
revelerAnimal(nombreChoisi);