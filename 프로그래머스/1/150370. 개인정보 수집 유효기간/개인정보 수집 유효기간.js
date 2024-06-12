function solution(today, terms, privacies) {
    var answer = []; // 파기해야할 privacies의 인덱스 저장
    let current = today.split(".").map(v => +v); //+v Number(v)랑 같음 [ 2022, 5, 19 ]
    let termsKind = {};
    
    terms.forEach(v => {
        let [kind, period] = v.split(" ")
        termsKind[kind] = +period; //{ A: 6, B: 12, C: 3 } period를 숫자로 넣어주기
    })
    
    privacies.forEach((v,i)=>{
        //date에는 개인정보 수집 일자, kind에는 약관 종류가 저장
        let [date, kind] = v.split(" ")
        //date를 년, 월, 일
        let [y, m, d] = date.split(".").map(v=>+v);
        // 월에 period를 더해준다
        m += termsKind[kind]
        // 보관 가능 날짜는 유효기간 하루 전
        d --
        
        if (m >12) {
           if(m % 12 === 0){
                // 12의 배수이면 년도는 바뀌지 않음
                y += parseInt(m/12) - 1;
                // 0이면 12월 
                m = 12;
            }else{
                // 12의 배수가 아닌 경우는 년도가 바뀜
                y += parseInt(m/12);
                // 아닐경우 12로 나눈 나머지
                m = m % 12;
            }
        }
        
        if (d===0) {
            m --;
            d = 28;
            if (m ===0) {
                y--;
                m = 12;
            }
        }
        if (y < current[0]) {
            answer.push(i+1)
            return;
        } else if ( y === current[0]) {
            if(m < current[1]) {
               answer.push(i+1) 
                return;
            } else if (m === current[1]) {
                if(d < current[2]){
                    answer.push(i+1);
                    return;
                }
            }
        }
    })
    return answer;
}