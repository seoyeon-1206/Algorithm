function solution(board, moves) {
    var answer = 0;
    var basket = [];
    var count = 0;
    
    for (let i=0; i< moves.length; i++) {
        var index = moves[i]-1
        for (let j=0; j<board.length; j++) {
            if (board[j][index] !== 0) {
                basket.push(board[j][index])
                board[j][index] = 0
                break;
            } 
        }
}
      while (true) {
            let found = false
            for (let i=0; i<basket.length; i++) {
                if (basket[i] === basket[i-1])  {
                    basket.splice(i-1,2)
                    count += 2
                    found = true;
                  break;
                } 
            } 
            if (!found) break;
        }
    return count;
}