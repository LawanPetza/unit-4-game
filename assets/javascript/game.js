$(document).ready(function () {
    var winCount = 0;
    var lossCount = 0;
    // var userGuesses = 0;
    var currentScore = 0;
    var targetNumber = 0;

    //FUNCTIONS----------------------------------------------------------

    var getRandom = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function startGame() {
        // Initializes the targetNumber with each new game
        targetNumber = getRandom(19, 120)
        console.log(targetNumber)

        // Resets the currentScore to reach the target number at zero at the start of each game
        currentScore = 0
        $("#totalScore").text(currentScore);
        // Show the user the target score
        $("#computerScore").text(targetNumber);
        // Update the user winCount in the html
        $("#wins").text(winCount);
        // Update the user lossCount in the html
        $("#losses").text(lossCount);

    }
    startGame();

    function crystal() {
        var imageCrystal1 = $("<img>");
        imageCrystal1.addClass("crystal-image");
        imageCrystal1.attr("src", "assets/images/Crystal-1.jpg");
        imageCrystal1.attr("data-crystalvalue", getRandom(1, 12));
        $("#crystals").append(imageCrystal1);

        var imageCrystal2 = $("<img>");
        imageCrystal2.addClass("crystal-image");
        imageCrystal2.attr("src", "assets/images/Crystal-2.jpg");
        imageCrystal2.attr("data-crystalvalue", getRandom(1, 12));
        $("#crystals").append(imageCrystal2);

        var imageCrystal3 = $("<img>");
        imageCrystal3.addClass("crystal-image");
        imageCrystal3.attr("src", "assets/images/Crystal-3.jpg");
        imageCrystal3.attr("data-crystalvalue", getRandom(1, 12));
        $("#crystals").append(imageCrystal3);

        var imageCrystal4 = $("<img>");
        imageCrystal4.addClass("crystal-image");
        imageCrystal4.attr("src", "assets/images/Crystal-4.jpg");
        imageCrystal4.attr("data-crystalvalue", getRandom(1, 12));
        $("#crystals").append(imageCrystal4);
    }

    crystal();

    $(".crystal-image").on("click", function () {
        $("#results").empty();
        
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        currentScore += crystalValue;

        // console.log(currentScore);
        // console.log(targetNumber)
        // console.log(crystalValue);

        // alert("New score: " + currentScore);
        $("#totalScore").text(currentScore);

        if (currentScore === targetNumber) {
            alert("Congratulations! You Won!")
            winCount++;           
            startGame();
            // If players winCount the game, include a function that resets the game start parameters
        }

        else if (currentScore > targetNumber) {
            alert("Sorry! You lost!")
            lossCount++;
            startGame();
            // If player loses game, reset the game parameters
        }

    })
})
    
