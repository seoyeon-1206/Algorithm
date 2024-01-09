function solution(s) {
    var answer = '';
    const n = Math.floor(s.length /2);
    if (s.length % 2 !=0) {
        answer = s[n];
    } else {
        answer = s[n-1] + s[n]
    }
    return answer;
}