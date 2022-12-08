//8-queens problem
//return count of all solutions
function eight_queens() {
    var count = 0;
    var board = [];
    for (var i = 0; i < 8; i++) {
        board[i] = [];
        for (var j = 0; j < 8; j++) {
            board[i][j] = 0;
        }
    }
    function is_available(row, col) {
        for (var i = 0; i < 8; i++) {
            if (board[row][i] === 1) return false;
        }
        for (var i = 0; i < 8; i++) {
            if (board[i][col] === 1) return false;
        }
        for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 1) return false;
        }
        for (var i = row - 1, j = col + 1; i >= 0 && j < 8; i--, j++) {
            if (board[i][j] === 1) return false;
        }
        for (var i = row + 1, j = col - 1; i < 8 && j >= 0; i++, j--) {
            if (board[i][j] === 1) return false;
        }
        for (var i = row + 1, j = col + 1; i < 8 && j < 8; i++, j++) {
            if (board[i][j] === 1) return false;
        }
        return true;
    }
    function put_queen(row) {
        if (row === 8) {
            count++;
            return;
        }
        for (var i = 0; i < 8; i++) {
            if (is_available(row, i)) {
                board[row][i] = 1;
                put_queen(row + 1);
                board[row][i] = 0;
            }
        }
    }
    put_queen(0);
    return count;
}
console.log("8-queens all possible solutions >> ", eight_queens());