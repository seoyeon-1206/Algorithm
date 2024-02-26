function solution(n) {
    // n -> n + x
    // n, n+x 는 2진수로 변환했을 때 1의 갯수가 같다
    // 조건 만족 중 가장 작은 수
    
    // 2진수 변환  
    var answer = 0;
    const nBinary = n.toString(2);
    let nBinaryOneCount = 0;
    // 2진수 버전의 1의 개수 구하기
    for (let i=0; i<nBinary.length; i++){
        const ch = nBinary[i];
        if (ch === '1') {
            nBinaryOneCount ++;
        }
    }
    //n, n+x 는 2진수로 변환했을 때 1의 갯수가 같다
    let loopCount = 1;
    while (true) {
        //1의 갯수가 같다면 break!!
        const cmp = n + loopCount;
        const cmpBinary = cmp.toString(2);
        let cmpBinaryOneCount = 0;
        
        for (let i=0; i<cmpBinary.length; i++){
        const ch = cmpBinary[i];
        if (ch === '1') {
            cmpBinaryOneCount ++;
        }
      }
      loopCount ++;
      if (cmpBinaryOneCount === nBinaryOneCount) {
      answer = cmp;
      break
      }
    }
    return answer
}