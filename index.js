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

console.log('Select position by entering numbers\n 1, 2 or 3 for first line,\n 4, 5 or 6 for second line and\n 7, 8 or 9 for third line');

printBoard();

var getPlay = function(player) {

  prompt.start();

  prompt.get(['position'], function (err, result) {
    console.log(result.position + ' for player: ' + player);

    board[result.position] = 'x';

    printBoard();

    getPlay(0);
  });
  
}

getPlay(1);
