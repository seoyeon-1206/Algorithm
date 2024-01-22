function solution(s) {
    var answer = [];
    let test = [];
    for(let i=0; i<s.length; i++) {
            if (test.includes(s[i])) {
                answer.push(i - test.lastIndexOf(s[i]))
            } else {
                answer.push(-1)
            }
        test.push(s[i])
        }
    
    return answer;
}