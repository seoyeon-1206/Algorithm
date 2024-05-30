function solution(t, p){
    var answer = 0
    for (let i=0; i<=t.length - p.length; i++){
        const str = t.substr(i,p.length)
        if (str <= Number(p)) answer += 1       
    }
    return answer
}