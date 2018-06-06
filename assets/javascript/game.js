$(document).ready(function () {
var wins = 0;
var losses = 0;
var userGuesses = 0;
var computerGuess = Math.floor(Math.random() * 101) + 19;
console.log(computerGuess)

$("#computerScore").append(computerGuess);

function crystal(){
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/Crystal-1.jpg");
    imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);
    $("#crystals").append(imageCrystal);
}
crystal();

});