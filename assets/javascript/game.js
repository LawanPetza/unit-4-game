$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    // var userGuesses = 0;
    var counter = 0;
    var targetNumber = Math.floor(Math.random() * 101) + 19;

    function startGame() {
        // Initializes the targetNumber with each new game
        targetNumber = Math.floor(Math.random() * 101) + 19;
        console.log(targetNumber)
        // Resets the counter to reach the target number at zero at the start of each game
        counter = 0
        $("#totalScore").text(counter);
        // Show the user the target score
        $("#computerScore").text(targetNumber);
        // Update the user wins in the html
        $("#wins").text(wins);
        // Update the user losses in the html
        $("#losses").text(losses);

    }
    startGame();

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
        $("#results").empty();
        
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;

        console.log(counter);
        console.log(targetNumber)

        // alert("New score: " + counter);
        $("#totalScore").text(counter);

        if (counter === targetNumber) {
            $("#results").text("You Win!!!!")
            wins++;
            startGame();
            // If players wins the game, include a function that resets the game start parameters
        }

        else if (counter > targetNumber) {
            $("#results").text("You Lose!!!!")
            losses++;
            startGame();
            // If player loses game, reset the game parameters
        }

    })
})
    
