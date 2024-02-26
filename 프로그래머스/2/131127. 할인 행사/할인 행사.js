function solution(want, number, discount) {
    // 일정 금액 지불 시 10일동안 회원 가격
    // 매일 하나만 세일, 하루에 하나씩만 구매 가능
    // 원하는 제품이 할인하는 날짜가 10일 연속으로 일치
    // 바나나 3개, 사과 2개, 쌀 2개, 돼지고기 2개, 냄비 1개(10일 안에 사기 -> 순서 무관)
    // 자료구조,,?? Map...으로 위시리스트 알아야함
    // for-loop
    var answer = 0;
    
    const m = new Map();
    for (let i=0; i<want.length; i++) {
        m.set(want[i], number[i]) // 출발이 최대 개수
    }
    for (let i=0; i<discount.length; i++) {
        const m2 = new Map(m); // 원본 복사
        for (let j= i; j <i +10; j++) {
            // 돌면서 정현이의 위시에서 하나씩 체크 -> 소거법
            const item = discount[j];
            if (m2.has(item)) {
                const count = m2.get(item);
                
                if (count <=1) {
                m2.delete(item)
                } else {
                    m2.set(item, count-1); //["apple",2]->["apple",1]
                }
            }
            
        }
        if (m2.size === 0) {
            answer ++;
        }
    }
    return answer;
}