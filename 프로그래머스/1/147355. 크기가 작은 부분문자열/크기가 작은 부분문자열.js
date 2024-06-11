function solution(t, p) {
    var answer = 0;
    for (let i=0; i<t.length-p.length +1; i++) {
        const str = t.substr(i, p.length)
        if (Number(str) <= Number(p)) answer ++
    }
    return answer
}