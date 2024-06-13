function solution(food) {
    var answer = "";
    for(let i=1; i<food.length; i++) {
        var repeatNum = Math.floor(food[i]/2);
        if (repeatNum !== 0) {
            answer += String(i).repeat(repeatNum)
        }
    }
   return answer + "0" + [...answer].reverse().join('')
}