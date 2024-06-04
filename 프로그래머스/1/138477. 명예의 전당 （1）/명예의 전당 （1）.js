function solution(k,score) {
    // 명예의 전당 중 최하점만 모은 배열
    var answer = [];
    // 명예의 전당 배열
    var honor = [];
    
    for (let i=0; i<score.length; i++) {
       // sort 후 자르기
        honor.push(score[i]);
        honor.sort((a,b) => (b-a)).splice(k)
        answer.push(Math.min(...honor))
    }
    return answer
}