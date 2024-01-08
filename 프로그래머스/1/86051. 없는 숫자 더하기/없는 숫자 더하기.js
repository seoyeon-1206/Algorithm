function solution(numbers) {
    var answer = 45;
    for(let i=0; i<numbers.length; i++) {
        for (let j=0; j<=9; j++) {
            if (numbers[i] === j) {
                answer-= j
            }
        }
    }
    
    return answer;
}