//Global Variables
var painted;
var content;
var winningCombinations;
var turn = 0;
var theCanvas;
var c;
var cxt;
var squaresFilled = 0;
var w;
var y;
const Alert = document.getElementById('message');

//Instanciate Arrays


//If You want To Change The Grid Than Add New Canvas In Html And Here You Need To Add Winning Combinations Number For The New Grid:



window.onload = function () {

    painted = new Array();
    content = new Array();
    //Add Numbers winning Combination For New Grids, Below😉
    winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    //If Anything Went Wrongs Than Try Changing The Numbers Below:
    for (var l = 0; l <= 8; l++) {
        painted[l] = false;
        content[l] = '';
    }
}

//Game methods
function canvasClicked(canvasNumber) {
    theCanvas = "canvas" + canvasNumber;
    c = document.getElementById(theCanvas);
    cxt = c.getContext("2d");

    if (painted[canvasNumber - 1] == false) {
        if (turn % 2 == 0) {
            cxt.beginPath();
            cxt.moveTo(10, 10);
            cxt.lineTo(40, 40);
            cxt.moveTo(40, 10);
            cxt.lineTo(10, 40);
            cxt.stroke();
            cxt.closePath();
            content[canvasNumber - 1] = 'X';
        }

        else {
            cxt.beginPath();
            cxt.arc(25, 25, 20, 0, Math.PI * 2, true);
            cxt.stroke();
            cxt.closePath();
            content[canvasNumber - 1] = 'O';
        }

        turn++;
        painted[canvasNumber - 1] = true;
        squaresFilled++;
        checkForWinners(content[canvasNumber - 1]);

        if (squaresFilled == 9) {
            Alert.innerHTML = "THE GAME IS OVER, Just Give another Try!";
            location.reload(true);
        }

    }
    else {
        Alert.innerHTML = "No Cheating? huh!";
    }

}

//Check The Winner Logic

function checkForWinners(symbol) {

    for (var a = 0; a < winningCombinations.length; a++) {
        if (content[winningCombinations[a][0]] == symbol && content[winningCombinations[a][1]] == symbol && content[winningCombinations[a][2]] == symbol) {
            Alert.innerHTML = "Congratulations..." + symbol + " Won! " + "  " + "Reseting The Game in a 5 Seconds...";
            playAgain();
        }
    }

}


//Play Again Logic
function playAgain() {
    setTimeout(() => {
        location.reload(true);
    }, 5000);

}