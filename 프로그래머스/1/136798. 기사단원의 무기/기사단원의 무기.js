function solution(number, limit, power) {
    var answer = 0;
    for(let i=1; i<=number; i++){
        // i의 약수의 개수를 구해보자
        let count = 0;
        for(let j=1; j<=Math.sqrt(i); j++){
            if(i%j === 0) {
                count += (j*j === i) ? 1 :2; //i가 제곱수면 1을 더함
            }
        } 
    
        if(count>limit){
            answer+= power
        }else{
            answer += count
        } 
    }
    return answer;
}