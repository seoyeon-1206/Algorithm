function solution(X, Y) {
    var answer = '';
    const common = [];
    for (let i=0; i<10; i++) {
        const XLength = X.split("").filter(x => Number(x) === i).length
        const YLength = Y.split("").filter(y => Number(y) === i).length
        // 작은 것을 기준으로
        for (let j=0; j< Math.min(XLength, YLength); j++) {
            common.push(i) 
        }
    }
        common.sort((a,b) => b-a)
        if (common[0] === 0) return "0";
        return common.length > 0 ? common.join("") : "-1"
}