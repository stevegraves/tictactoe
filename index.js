 var prompt = require('prompt');

console.log('TIC TAC TOE');

var board = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' '
};

var printBoard = function() {
  console.log(board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
              '--------- \n' +
              board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
              '--------- \n' +
              board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');
};

printBoard();

var getPlay = function(player) {

  printBoard();

  prompt.start();

  prompt.get(['position'], function (err, result) {
    console.log(result.position);
  });
  
}
