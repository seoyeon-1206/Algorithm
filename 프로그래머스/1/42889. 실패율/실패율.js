function solution(N, stages) {
    var fail = [];
    for (let i=1; i<=N; i++) {
        // i의 개수
        const notReach = stages.filter((x) => x === i).length
        // 분모 => filter
        const reach = stages.filter((x) => x >= i).length
        fail.push([i, notReach/reach]);
    }
    // 내림차순 정렬
    fail.sort((a,b)=> b[1] - a[1])
     
    const answer = fail.map((x) => x[0]);
    return answer;
}