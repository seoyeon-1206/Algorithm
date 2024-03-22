function solution(lottos, win_nums) {
    var answer = [];
    let count = 0; // 일치한 번호의 개수
    let zeroCount = 0; //0 번호의 개수
    let maxCount = 0; // 최고 순위
    let minCount = 0; // 최저 순위
    
    for (let i=0; i<lottos.length; i++){
         if(win_nums.includes(lottos[i])) {
        //console.log(win_nums[i])
        count ++
        }    
        if(lottos[i] === 0){
            zeroCount ++
        }
    }
    
    // count 가지고 result 만들기
    if (count + zeroCount  === 0 || count + zeroCount  === 1) {
        maxCount = 6
    } else {
        maxCount = 7 -(count + zeroCount)
    }
    
    if (count === 0 || count === 1) {
        minCount = 6
    } else{
        minCount = 7 - count
    }
    
    answer = [maxCount, minCount]
    
    return answer;
}