var gameBoard;
var currentPlayer;

$(document).ready(function() {
  newGame();
});

function newGame(){
  rowMax = 6;
  colMax = 7;
  gameBoard = [];
  for (var row = 0; row < rowMax; row++) {
    gameBoard[row] = [];
    for(var col = 0; col < colMax; col++) {
        gameBoard[row][col] = 0;

        }
      }
  currentPlayer = "red";
  $('.game_table').css("background-color", "blue");
}


function whoWon(){

}

function whoesTurn(){

}

function placePiece(){

}

function endGame(){
  alert( currentPlayer + "wins!" );
}

function checkCol(){

}

function checkRow(){

}

function transposeBoard(board){

}

