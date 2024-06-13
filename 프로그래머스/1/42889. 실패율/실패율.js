function solution(N, stages) {
    var fail = [];
   for (let i=1; i<=N; i++) {
       // 분모
       let notReach = stages.filter(num => num === i).length;
       // 분자 스테이지에 도달한 플레이어 수
       let reach = stages.filter(num => num >= i).length;
       fail.push([i, notReach/ reach])
   }
    fail.sort((a,b) => b[1]-a[1])
    return fail.map(x=>x[0])
}