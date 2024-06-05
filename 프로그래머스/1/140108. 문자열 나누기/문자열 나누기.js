function solution(s) {
    var answer = 0;
    
    while (s.length >0) {
    let same = 0; //x와 같은 문자 횟수
    let diff = 0; //x와 다른 문자 횟수
    let x = s[0]
    
        for (let i=0; i<s.length; i++) {
            if (x === s[i]) same ++;
            else diff ++;
            if (same === diff) {
                s = s.substr(i+1, s.length)
                answer ++;
                break; //while문으로 이동
            }
        }
        if (same !== diff) {
            answer ++;
            break;
        }  
    }
    return answer;
}