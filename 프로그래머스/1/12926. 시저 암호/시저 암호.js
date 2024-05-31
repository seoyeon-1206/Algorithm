function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';
    
    for (let i=0; i<s.length; i++){
        var word = s[i];
        if (word === " ") {
        answer += " ";
        continue;
        }
        var textArr = upper.includes(word) ? upper : lower;
        let index = textArr.indexOf(word) + n ;
        if (index >= textArr.length) index -= textArr.length;
        answer += textArr[index] 
    }
    return answer 
}