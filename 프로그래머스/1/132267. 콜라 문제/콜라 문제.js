function solution(a, b, n) {
    // 받은 콜라 수 
    var answer = 0;

    while (n >= a){
       answer += Math.floor(n/a) * b
       n = Math.floor(n/a) * b + (n%a)
    }
    return answer
}