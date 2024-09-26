// Quiz: Veuillez répondre aux questions ci-dessous. (1 heure) (+20 min pour les personnes bénéficiant de mesures supplémentaires)
// Lorsqu'il y a des sous-points (questions 7, 8 et 11), ils vous guident dans les diverses étapes de l'exercice.
// Le quiz est individuel. Vous avez cependant accès à tous les supports de cours, ainsi qu'internet.
// -----------------------

// 1. Expliquez ce qu'est-ce qu'une variable.
// REPONSE:
//c'est comme un container pour y mettre des valeurs
// -----------------------
// 2. Déclarez une variable s'appelant "firstName" et dont la valeur est votre prénom.
const firstName = "Meg";
// -----------------------
// 3. Déclarez une variable s'appelant "age" et dont la valeur est votre âge. Attention, sa valeur pourrait être modifiée par la suite.
let age = 20;
// -----------------------
// 4. Dans le code HTML (lignes 17 - 23), citez les divers éléments composant l'élément HTML <input>:
// - Balise HTML: password-input
// - Classe(s): card-input
// - Attribut(s): text

// -----------------------
// 5. Expliquez la différence entre une class et un ID.
// REPONSE:
// class peut être utilisé plusieurs fois et id est unique
// -----------------------
// 6. A quoi sert la méthode document.querySelector("..."); ?
// REPONSE:
// il sert à selectionner le premier élément correspondant à un sélecteur CSS
// -----------------------
// 7. A l'aide de la méthode document.querySelector("..."), sélectionnez l'élément <p> (ligne 14 du code HTML):
document.querySelector("p");
// 7.1 Créez une variable appelée "cardContent".
let cardContent;
// 7.2 Assignez lui l'élément <p> (ligne 14 du code HTML) que vous avez sélectionné en 7.1.
let cardContent = document.querySelector("p");
// -----------------------
// 8. Utilisez la variable "cardContent" créée à l'exercice 7:
cardContent.style.color = "blue";
// 8.1 Utilisez la propriété   -> .classList <-   pour ajouter   -> .add("...") <-   la class "highlight" à l'élément HTML.
cardContent.classList.add("highlight");
// -----------------------
// 9. Récupérez la valeur de l'attribut "placeholder"   -> .getAttribute("...") <-   de l'élément HTML <input> (ligne 17 du code HTML).
let inputElement = document.querySelector("input");
let placeholderValue = inputElement.getAttribute("placeholder");
// -----------------------
// 10. Expliquez ce qu'est un écouteur d'événement.
// REPONSE:
//c'est une fonction qui réagit à une action sur un élément du dom
// -----------------------
// 11. Sur l'élément HTML button (ligne 26 du code HTML), écoutez l'événement "click":
let button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log("Bouton cliqué !");
});
// 11.1 : Sélectionnez l'élément HTML <button> (ligne 26 du code HTML).
let button = document.querySelector("button");
// 11.2 : Utilisez la méthode   -> .addEventListener("...", function() {...}) <-   sur l'élément HTML sélectionné en 11.1 pour écouter l'événement "click".
let button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log("Bouton cliqué !");
});
// 11.3 : Lorsqu'un.e utilisateurice clique sur le bouton, ajoutez/supprimez (toggle) la class "hide" de l'élément HTML <p> (ligne 29-31 du code HTML).
let button = document.querySelector("button");
let paragraph = document.querySelector("p");
button.addEventListener("click", function () {
  paragraph.classList.toggle("hide");
});
