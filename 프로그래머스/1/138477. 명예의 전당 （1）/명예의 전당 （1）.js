function solution(k, score) {
    var answer = [];
    var honor = [];
    score.forEach((num) => {
        honor.push(num)
        honor.sort((a,b) => b-a).splice(k)
    
        answer.push(Math.min(...honor))
    })

    return answer;
}