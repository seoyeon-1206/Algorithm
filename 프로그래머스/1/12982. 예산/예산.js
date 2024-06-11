function solution (d, budget) {
    var answer = 0;
    d = d.sort((a,b) => (a-b))
    var num = 0;
    for (let i=0; i<d.length; i++) {
        num += d[i]
        while(num <= budget) {
            answer ++;
            break;
        }
    }
    return answer;
}