function solution(dartResult) {
    var answer = 0;
    var score = 0;
    var count = [];
    for (let i=0; i<dartResult.length; i++) {
        // 숫자만 뽑기 10인 경우 처리
        if (!isNaN(dartResult[i])) {
            score = Number(dartResult[i-1])  === 1 ? 10 : Number(dartResult[i])
            console.log(score)
        } else if (dartResult[i] === "S") {
            count.push(score)
        } else if (dartResult[i] === "D") {
            count.push(score ** 2)
        } else if (dartResult[i] === "T") {
            count.push(score ** 3)
        }
        // 옵션
          else if (dartResult[i] === "*") {
             count[count.length-2] = count[count.length-2] * 2;
             count[count.length-1] = count[count.length-1] * 2; 
        } else if (dartResult[i] === "#") {
             count[count.length-1] = -1 * count[count.length-1]; 
        }
    }

    for (let i=0; i<count.length; i++) {
        if (!isNaN(count[i])) {
            answer += count[i]
        }
    }
    return answer;
}