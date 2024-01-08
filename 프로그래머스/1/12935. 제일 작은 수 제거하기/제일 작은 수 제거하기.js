function solution(arr) {
    var answer = [-1];
    if (arr.length >2) { 
    arr.splice(arr.indexOf(Math.min(...arr)), 1)
        return arr;
    }
    return answer;
}