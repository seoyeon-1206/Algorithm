function solution(s) {
    var answer = '';
    s = s.split(" ");
    let max = Math.max(...s)
    let min = Math.min(...s)
    answer = min + ' ' + max
    return answer
}