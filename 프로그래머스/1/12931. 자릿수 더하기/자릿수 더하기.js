// function solution(n) {
//     var answer = 0;
//     n = String(n)
//     for (let i =0; i<n.length; i++) {
//         answer += Number(n[i])
//     };
//     return answer;
// }












function solution(N) {
    var answer = 0
    n = String(N)
    for (var i=0; i<n.length; i++) {
        answer += Number(n[i])
    }
    return answer
}