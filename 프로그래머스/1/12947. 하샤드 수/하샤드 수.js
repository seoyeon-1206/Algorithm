function solution(x) {
    var answer = true;
    x = String(x)
    var sum = 0;
    
    for (let i=0; i<x.length; i++) {
        sum += Number(x[i]);
        if (Number(x) % sum === 0) {
            answer = true;
        } else {
            answer = false;
        }
    };
    
    return answer;
}
