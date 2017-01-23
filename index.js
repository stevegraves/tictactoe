console.log('TIC TAC TOE');

var board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

var printBoard = function() {
  console.log(board[0][0] + ' ' + board[0][1] + ' ' + board[0][2] + '\n' +
              board[1][0] + ' ' + board[1][1] + ' ' + board[1][2] + '\n' +
              board[2][0] + ' ' + board[2][1] + ' ' + board[2][2] + '\n');
};

printBoard();