function solution(a, b, n) {
    var answer = 0;
    let bottle = n;
    while(bottle >= a) {
        answer += (Math.floor(bottle / a)) * b;
        bottle = bottle - (Math.floor(bottle / a))*a + (Math.floor(bottle / a)) * b;
    }
    return answer;
}