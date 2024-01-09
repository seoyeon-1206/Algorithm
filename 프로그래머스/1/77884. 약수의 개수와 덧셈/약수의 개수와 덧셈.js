function solution(left, right) {
    var answer = 0;
    for(let i = left; i<= right; i++) {
        let count = 0; //초기화 시켜줘야 함
        for(let j=1; j<=i; j++){
            if (i%j === 0){ //약수를 구하기
                count ++
            } 
        }
        if (count %2 !=0) {
                answer -= i;
            }else{
                answer += i;
            }
    }
    return answer;
}