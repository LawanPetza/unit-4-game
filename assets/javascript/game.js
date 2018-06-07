$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    // var userGuesses = 0;
    var targetNumber = Math.floor(Math.random() * 101) + 19;
    console.log(targetNumber)

    $("#computerScore").append(targetNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);

    var counter = 0;

    function crystal() {
        var imageCrystal1 = $("<img>");
        imageCrystal1.addClass("crystal-image");
        imageCrystal1.attr("src", "assets/images/Crystal-1.jpg");
        imageCrystal1.attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);
        $("#crystals").append(imageCrystal1);

        var imageCrystal2 = $("<img>");
        imageCrystal2.addClass("crystal-image");
        imageCrystal2.attr("src", "assets/images/Crystal-2.jpg");
        imageCrystal2.attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);
        $("#crystals").append(imageCrystal2);

        var imageCrystal3 = $("<img>");
        imageCrystal3.addClass("crystal-image");
        imageCrystal3.attr("src", "assets/images/Crystal-3.jpg");
        imageCrystal3.attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);
        $("#crystals").append(imageCrystal3);

        var imageCrystal4 = $("<img>");
        imageCrystal4.addClass("crystal-image");
        imageCrystal4.attr("src", "assets/images/Crystal-4.jpg");
        imageCrystal4.attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);
        $("#crystals").append(imageCrystal4);
    }

    crystal();

    $(".crystal-image").on("click", function () {

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        alert("New score: " + counter);
        $("#totalScore").text(counter);

        if (counter === targetNumber) {
            alert("You win!");
            wins++;
        }

        else if (counter >= targetNumber) {
            alert("You lose!!");
            losses++;
        }

    })
})
    
