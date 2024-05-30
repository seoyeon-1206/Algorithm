function solution(d, budget) {
    var answer = 0;
    var sum = 0;
    // 적은 금액 신청 부서부터 => 그래야 최대 =>오름차순으로 정렬
    d = d.sort((a,b) => (a-b))
    for (let i=0; i<d.length; i++) {
      if (d[i] > budget) break;
        budget -= d[i]
        answer ++
        }
    return answer;
}