function solution(strings, n){
    var answer = []
    for (let i=0; i<strings.length; i++) {
        // console.log(strings[i][n])
        answer.push(strings[i][n] + strings[i])
        answer.sort()
    }
    for (let i=0; i<answer.length; i++) {
        answer[i] = answer[i].slice(1)
    }
    return answer
}












