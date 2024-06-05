function solution(lottos, win_nums) {
    var answer = [];
    let count = 0; // 일치한 번호의 개수
    let zeroCount = 0; //0 번호의 개수
    let maxCount = 0; // 최고 순위
    let minCount = 0; // 최저 순위
    let rank = [6,6,5,4,3,2,1]
    
    for (let i=0; i<win_nums.length; i++) {
        if (win_nums.includes(lottos[i])) {
            count ++
        }
        if (lottos[i] === 0) {
            zeroCount ++
        }
    }
    maxCount = zeroCount + count;
    minCount = count;
    return [rank[maxCount], rank[minCount]];
}