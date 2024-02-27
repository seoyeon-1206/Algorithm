function solution(k, m, score) {
    var answer = 0;
    var arr = []
    const sortedScore = score.sort((a, b) => b-a) 
    
    for(let i=0; i+m<= sortedScore.length; i+=m){
       answer += sortedScore[i+m-1] * m
        
    }
   
    return answer;
}