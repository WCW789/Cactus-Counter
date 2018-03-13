$(document).ready(function () {

    var crystalDiv = $("#crystalDiv");
    var counter = 0;
    var winsVar = 0;
    var lossesVar = 0;
    var crystalImages = ["../images/cactus1.jpg", "../images/cactus4.jpg", "../images/cactus3.jpg", "../images/cactus2.jpg"]
    
    var targetNumVar = Math.floor(Math.random() * 10) + 50;
    $("#targetNumber").text(targetNumVar);

    var randomNum = Math.floor(Math.random() * 12) + 1;

    var resetGame = function() {
        console.log("New Game!");
        targetNumVar = Math.floor(Math.random() * 10) + 50;
            $("#targetNumber").text(targetNumVar);            
        counter = 0;
        $("#crystalDiv").empty();
        for (var i = 0; i < 4; i++) {
        randomNum = Math.floor(Math.random() * 12) + 1;
        crystalPic = $("<img>");
        crystalPic.addClass("crystalClass");
        crystalPic.attr("src", crystalImages[i]);
        crystalDiv.append(crystalPic);
        crystalPic.attr("data-crystalNum", randomNum);
    }
        $("#counterDiv").html("Current Total: " + counter);
        console.log(counter + "Reset");
        randomNum = Math.floor(Math.random() * 12) + 1; 
    }

    for (var i = 0; i < 4; i++) {
        randomNum = Math.floor(Math.random() * 12) + 1;
        var crystalPic = $("<img>");
        crystalPic.addClass("crystalClass");
        crystalPic.attr("src", crystalImages[i]);
        crystalDiv.append(crystalPic);
        crystalPic.attr("data-crystalNum", randomNum);
    }

    crystalDiv.on("click", ".crystalClass", function() { 
        var crystalNum = ($(this).attr("data-crystalNum"));
        crystalNum = parseInt(crystalNum);
        console.log(crystalNum);

       counter += crystalNum;
        $("#counterDiv").html("Current Total: " + counter);

        if (counter === targetNumVar) {
        console.log("W" + winsVar);
        winsVar +=1;
        $("#winDiv").html("Wins: " + winsVar);
        resetGame();
        } else if (counter >= targetNumVar) {
        console.log("L" + lossesVar);
        lossesVar +=1;
        $("#lossesDiv").html("Losses: " + lossesVar);
        console.log(counter + "One");
        resetGame();
        }
    });
    
    var buttonForGame = document.getElementById("buttonReset");
    buttonForGame.onclick = function () {
        resetGame();
    }

});