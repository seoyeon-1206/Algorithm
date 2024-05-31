function solution(d, budget) {
    // 오름차순 정렬
    var answer = 0;
    d = d.sort((a,b) => (a-b));

    for (let i=0; i<d.length; i++) {
        if (budget >= d[i]) {
            budget -= d[i]
            answer ++
        }
        
    }
    return answer
}