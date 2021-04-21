// Création d'une variable result qui affiche un prompt
let resultQuizz = prompt("De quelle couleur sont les étoiles du drapeau américain ?")

// Condition : Si le champs est bien saisi et que ce n'est pas un nombre
if(isNaN(resultQuizz)){
    // Condition imbriquée : Si la réponse est "..." , Sinon si "..." , Sinon si "..." , Sinon --> affiche
    if(resultQuizz == "blanche"){
        alert("Bien ouéj !")
    }else if(resultQuizz == "rouge"){
        alert("Rouge est la couleur des bandes horizontales")
    }else if(resultQuizz == "bleue"){
        alert("Bleu est la couleur du fond du rectangle en haut à gauche")
    }else{
        alert("Bien essayé, mais non !")
    }
}
// Sinon, affiche "..."
else {
    alert("Rentre un f****** mot !");
}